import axios from 'axios';
import cloneDeep from 'lodash/cloneDeep';

axios.defaults.withCredentials = true;
const requestService = axios.create({
    // withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
});

/**
 * Abstract class that is meant to be overwritten by any service that wants to implement basic CRUD operations.
 */
class abstractService {
    /**
     * Class constructor
     * @param {String} endPoint - The endpoint to perform requests, i.e. http://localhost:500/api/products
     */
    constructor(endPoint) {
        this.endPoint = endPoint;
    }

    /**
     * Finds an element of a given endpoint.
     */
    async findById(id) {
        const response = await axios.get(this.endPoint);
        return response.data.data;
    }

    /**
     * Creates a querystring from the key/value pairs of a object.
     * @param {Object} queryObj - the object to be transformed into a querystring
     */
    createQueryStringFromObj(queryObj) {
        return Object.keys(queryObj).map(key => `${key}=${queryObj[key]}`).join('&');
    }

    /**
     * Finds all elements of a given endpoint.
     */
    async findAll(_where = {}) {
        let where = cloneDeep(_where);
        where.page_size = where.page_size || -1;
        where = this.createQueryStringFromObj(where);
        const url =  `${this.endPoint}?${where}`;
        const response = await requestService.get(url);
        return response.data;
    }

    /**
     * Saves a given element.
     * @param {*} element - The element to be saved.
     */
    async save(element) {
        // const url = this.parameterizedEndpoint('', { ...otherParams, method: "save" }) || this.endPoint;
        let response = await requestService.post(this.endPoint, element);
        return response.data.data;
    }

    /**
     * Updates a given element.
     * @param {*} elementId - Id of the element that is going to be updated.
     * @param {*} updatedAttributes - Attributes to be updated.
     */
    async update(elementId, updatedAttributes) {
        const url =  `${this.endPoint}${elementId}`;
        let response = await requestService.patch(url, updatedAttributes);
        return response.data.data.data;
    }

    /**
     * Removes an element
     * @param {*} elementId - Id of the element that is going to be removed.
     */
    async remove(elementId) {
        const url =  `${this.endPoint}/${elementId}`;
        const response = await requestService.delete(url);
        return response.data.data;
    }
}

export default abstractService;