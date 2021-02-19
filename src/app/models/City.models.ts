import { Country } from './Country.models';

export class City extends Country {

     private CityId: number;
     private Cityname:string; 
  
    constructor(CountryId:number,Countryname:string,CityId:number,Cityname:string,)
    {
        super(CountryId,Countryname);
        this.CityId=CityId;
        this.Cityname=Cityname;
    }
    setCityIdCity(CityId:number)
    {
        this.CityId=CityId;
    }
    setCitynameCity(Cityname:string)
    {
        this.Cityname=Cityname;
    }
    getCityId():number
    {
        return this.CityId;
    }
    getCityname():string
    {
        return this.Cityname;
    }

}