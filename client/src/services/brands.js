import abstractService from "./abstractService";
import endPoints from "../config/endPoints";

class BrandsService extends abstractService {
    constructor() {
        super(endPoints.brands);
    }
}

export default new BrandsService();