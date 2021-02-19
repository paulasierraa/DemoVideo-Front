import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
// import * as CryptoJS from 'crypto-js';
import { UserService } from 'src/app/services/user/user.service';
import { user } from '../../../models/user.model';
import { Router } from '@angular/router';
import { LocationService } from '../../../services/location/location.service';
import { Country } from '../../../models/Country.models';
import { City } from '../../../models/City.models';
import { TypedocService } from '../../../services/typedoc/typedoc.service';
import { Typedoc } from '../../../models/Typedoc.model';
import { element } from 'protractor';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  successRegister: boolean = false;
  message: string;
  registerError: boolean = false;
  isText: boolean = false;
  countries: Country[]=[];
  cities:City[]=[];
  typedocs:Typedoc[]=[];
  constructor(private formBuilder: FormBuilder,
     private userService: UserService,
     private LocationService:LocationService, 
     private typeDocService:TypedocService,
     private router: Router) {
    this.buildRegister();
  }

  ngOnInit() {
    this.fetchLocation();
    this.fetchTypeDoc();
  }
  // encrypt(password:string):string
  // {
  //   // const val = this.form.value;
  //   return CryptoJS.SHA256(password.trim()).toString();
  // }
  buildRegister() { //building the form
    this.form = this.formBuilder.group(
      {
        id: ['', [Validators.required, Validators.pattern('[0-9]+')]],
        name: ['', [Validators.required, Validators.pattern('[a-zA-Z *]+')]],
        user: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        country: ['', Validators.required],
        city:City,
        gender: ['', Validators.required]
      }
    );
  }
  register() {
    if (window.navigator.onLine) { //verify connection
      const value = this.form.value;
      if (this.form.valid && value.name.trim() != "" && value.user.trim() != "") { //verify blank spaces
        let obcity: City = new City(value.country.id,value.country.name,value.city.id,value.city.Cityname);
        console.log(obcity.getCityname());
        let obuser: user = new user(
        value.id,value.name,value.email,value.user,value.password,value.gender,obcity);
        this.userService.create(obuser)
          .subscribe()
        {
          data=>{
            console.log(data);
            this.successRegister = true;
            setTimeout(()=>this.router.navigate(['/login']),1500);      
          }
         
        }
        
      }
      else {
        this.message = "Debe completar todos los campos";
        this.registerError = true;
      }
    }
    else {
      this.registerError=true;
      this.message="Se ha perdido la conexión!"
      console.log("Sin conexión");
    }


  }
  fetchLocation() {
    this.LocationService.getAllCountries().subscribe(country => {
        country.forEach((element,index)=>{
          this.countries[index] = new Country(element.id,element.name);
        })
        console.log(this.cities); 
    })
    this.LocationService.getAllCities().subscribe(city=>{
      city.forEach((element,index)=>{
        this.cities[index] = new City(element.id_country,"Colombia",element.id,element.name);
      })
      console.log(this.cities); 
    })
  }
  fetchTypeDoc()
  {
    this.typeDocService.getAll().subscribe(data=>{
      this.typedocs=data;
    })
  }
  showPassword() {
    let passwordInput: any = document.getElementById('passwordtxt');
    if (!this.isText) {
      passwordInput.type = "text";
      this.isText = true;
    }
    else {
      passwordInput.type = "password";
      this.isText = false;
    }
  }
}
