export class Files{

    public id:number;
    public name:string;
    public slug:string;
    public path:string;
    public type:number;

    constructor(id:number,name:string,slug:string,path:string,type:number){
        this.id=id;
        this.name=name;
        this.slug=slug;
        this.path=path;
        this.type=type;
    }

    getId()
    {
        return this.id;
    }
    getName()
    {
        return this.name;
    }
    getPath()
    {
        return this.path;
    }
    getSlug()
    {
        return this.slug;
    }

}