import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable({})
export class AuthService{
    constructor(private prisma : PrismaService){}
    signin(){
        return {msg : "Hello from signin"};
    }

    signup(){
        return {msg : "Hello from signup"};
    }
}
