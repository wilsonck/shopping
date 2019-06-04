import abstractService from "./abstractService";
import endPoints from "../config/endPoints";

class wishListService extends abstractService {
    constructor() {
        super(endPoints.wishList);
    }
}

export default new wishListService();