export class Files{

    private id:number;
    private name:string;
    private slug:string;
    private path:string;
    private type:number;

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