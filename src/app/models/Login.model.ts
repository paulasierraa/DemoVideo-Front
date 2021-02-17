export class Login{

    private user:string;
    private password:string;
     token:string;

    constructor()
    {
      
    }
    getUser():string{
        return this.user;
    }
    getPassword():string{
        return this.password;
    }
    getToken():string{
        return this.token;
    }
    setUser(user:string):void{
        this.user=user;
    }
    setPassword(password:string):void{
       this.password=password;
    }
    setToken(token:string):void{
        this.token=token;
    }
 
}