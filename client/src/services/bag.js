import abstractService from "./abstractService";
import endPoints from "../config/endPoints";

class BagService extends abstractService {
    constructor() {
        super(endPoints.bag);
    }
}

export default new BagService();