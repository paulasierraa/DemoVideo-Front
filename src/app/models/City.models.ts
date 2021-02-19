import { Country } from './Country.models';

export class City  extends Country{
    cityId: number;
    cityName:string;
    constructor(cityId:number,cityName:string,CountryId:number,CountryName:string)
    {
        super(CountryId,CountryName);
        this.cityId=cityId;
        this.cityName=cityName;
    }
    setCityId(cityId:number)
    {
        this.cityId=cityId;
    }
    setCityName(cityName:string)
    {
        this.cityName=cityName;
    }
    getCityId()
    {
        return this.cityId;
    }
    getCityName()
    {
        return this.cityName;
    }

}