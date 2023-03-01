import axios from "axios"

export default class EmployerService{
    
    registerEmployer(employer){
        let result = axios.post("http://localhost:8080/api/employers/add",employer)
        return result;
    }
    getAllEmployers(){
        let result = axios.get("http://localhost:8080/api/employers/getall")
        return result;
    }
 }