import { Controller, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService){}
    // auth/signin
    @Post("signin")
    signin(){
       return this.authService.signin();
    }
    @Post("signup")
    signup(@Req() req : Request){
      return this.authService.signup();
    }

}