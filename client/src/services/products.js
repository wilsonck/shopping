import abstractService from "./abstractService";
import endPoints from "../config/endPoints";

class ProductService extends abstractService {
    constructor() {
        super(endPoints.products);
    }
}

export default new ProductService();