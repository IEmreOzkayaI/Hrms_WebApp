import axios from "axios"

export  default class UserService{
    logIn(user){

        let result = axios.post("http://localhost:8080/api/users/logIn",user)
        return result;
    }
}