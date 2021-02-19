
export class Country{
    private id:number;
    private name:string;

    constructor(id:number,name:string)
    {
        this.id=id;
        this.name=name;
    }
    setid(id:number)
    {
        this.id=id;
    }
    setname(name:string)
    {
        this.name=name;
    }
    getidCountry()
    {
        return this.id;
    }
    getnameCountry()
    {
        return this.name;
    }
    
}