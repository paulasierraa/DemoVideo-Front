import { user } from './user.model';
export class Login{
    public user:string;
    public password:string;
    public token?:string;

    constructor(user:string,password:string,token?:string)
    {
        this.user=user;
        this.password=password;
        this.token=token;
    }
}