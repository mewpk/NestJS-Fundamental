import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService{
    signin(){
        return {msg : "Hello from signin"};
    }

    signup(){
        return {msg : "Hello from signup"};
    }
}
