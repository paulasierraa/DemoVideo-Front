import { stringify } from "@angular/compiler/src/util";

export class user{
    id: string;
    name:string;
    email:string;
    user:string;
    password:string;

    constructor(id:string,name:string,emai:string,user:string,password:string)
    {
        this.id=id;
        this.name=name;
        this.email = emai;
        this.user = user;
        this.password=password;
    }
}