import { City } from "./City.models";

export class Country{
    private idCountry:number;
    private nameCountry:string;

    constructor(idCountry:number,nameCountry:string)
    {
        this.idCountry=idCountry;
        this.nameCountry=nameCountry;
    }
    setCountryId(idCountry:number)
    {
        this.idCountry=idCountry;
    }
    setCountryName(nameCountry:string)
    {
        this.nameCountry=nameCountry;
    }
    getCountryId()
    {
        return this.idCountry;
    }
    getCountryName()
    {
        return this.nameCountry;
    }
    
}