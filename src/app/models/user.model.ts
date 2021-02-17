export class user{
   private id: number;
   private name:string;
   private email:string;
   private user:string;
   private password:string;
   private gender:string;
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
    getGender():string{
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
    setGender(gender:string):void{
        this.gender=gender;
    }

    
}