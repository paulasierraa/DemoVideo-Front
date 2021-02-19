import { City } from './City.models';
export class user{
   private id: number;
   private name:string;
   private email:string;
   private user:string;
   private password:string;
   private gender:boolean;
   private city:City;

    constructor(id:number,name:string,email:string,user:string,password:string,gender:boolean,city:City)
    {
        this.id=id;
        this.name=name;
        this.email=email;
        this.user=user;
        this.password=password;
        this.gender=gender;
        this.city=city;
    }

    getId():number{
        return this.id;
    }
    getName():string{
        return this.name;
    }
    getEmail():string{
        return this.email;
    }
    getUser():string{
        return this.user;
    }
    getPassword():string{
        return this.password;
    }
    getCity():City{
        return this.city;
    }
    getGender():boolean{
        return this.gender;
    }
    setId(id:number):void{
         this.id=id;
    }
    setName(name:string):void{
        this.name=name;
    }
    setEmail(email:string):void{
        this.email=email;
    }
    setUser(user:string):void{
        this.user=user;
    }
    setPassword(password:string):void{
        this.password=password;
    }
    setGender(gender:boolean):void{
        this.gender=gender;
    }
}