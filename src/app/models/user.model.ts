export class user{
   private id: number;
   private name:string;
   private email:string;
   private user:string;
   private password:string;
   private gender:boolean;
   private id_country:number;
   private id_city:number;
 

    constructor()
    {

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
    getGender():boolean{
        return this.gender;
    }
    getIdCountry():number{
        return this.id_country;
    }
    getIdCity():number{
        return this.id_city;
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
    setIdCountry(id:number):void{
        this.id_country=id;
   }
   setIdCity(id:number):void{
    this.id_city=id;
    }
}