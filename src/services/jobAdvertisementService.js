
import axios from "axios"

export default class jobAdvertisementService{

    add(cityId,employerId,jobAdvertisement,jobPositionId){
        let result = axios.post("http://localhost:8080/api/job-advertisements/add",{cityId,employerId,jobAdvertisement,jobPositionId})
        return result;
    }
}
