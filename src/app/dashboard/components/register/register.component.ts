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
      debugger;
      if (this.form.valid && value.name.trim() != "" && value.user.trim() != "") { //verify blank spaces
        let obcity: City = new City(value.city.id,value.city.name,value.country.id,value.country.name);
        console.log(obcity.getNameCountry());
        // let obuser: user = new user(
        // value.id,
        // value.name,
        // value.email,
        // value.user,
        // value.gender,
        // value.password,
        
        // );
        // this.userService.create(obuser)
        //   .subscribe()
        // {
        //   this.successRegister = true;
          
        //   setTimeout(()=>this.router.navigate(['/login']),1500);      
        // }
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
    this.LocationService.getAllCountries().subscribe(data => {
      this.countries = data;
    })
    this.LocationService.getAllCities().subscribe(city=>{
      this.cities=city;
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
