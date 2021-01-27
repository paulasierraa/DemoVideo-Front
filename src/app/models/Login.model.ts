import { user } from './user.model';
export class Login{
    public user:string;
    public password:string;
    constructor(obUser:user)
    {
        this.user=obUser.user;
        this.password=obUser.password;
    }
}