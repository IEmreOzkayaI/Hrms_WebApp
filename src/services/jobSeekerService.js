import axios from "axios"

export default class JobSeekerService{
    
    registerJobSeeker(jobSeeker){
    
        let result = axios.post("http://localhost:8080/api/job-seekers/add",jobSeeker)
        return result;
    }
    getAllJobSeekers(){
        let result = axios.get("http://localhost:8080/api/job-seekers/getall")
        return result;
    }
 }