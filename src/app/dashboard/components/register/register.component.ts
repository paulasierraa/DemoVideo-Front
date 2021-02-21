import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, FormArray } from '@angular/forms';
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
import { Skill } from '../../../models/Skill.model';
import { SkillsService } from '../../../services/skills/skills.service';

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
  countries: Country[] = [];
  cities: City[] = [];
  typedocs: Typedoc[] = [];
  skills:Skill[]=[];
  skillNames:string="Skills";
  skillIndex:number[]=[];
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private LocationService: LocationService,
    private typeDocService: TypedocService,
    private skillService:SkillsService,
    private router: Router) {
    this.buildRegister();
  }

  ngOnInit() {
    this.fetchLocation();
    this.fetchTypeDoc();
    this.fetchSkills();
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
        city:['',Validators.required],
        skillsc: new FormArray([]),
        gender: ['', Validators.required]
      }
    );
  }

  fetchLocation() {
    this.LocationService.getAllCountries().subscribe(country => {
      country.forEach((element, index) => {
        this.countries[index] = new Country(element.id, element.name);
      })
    })
    this.LocationService.getAllCities().subscribe(city => {
      city.forEach((element, index) => {
        this.cities[index] = new City(element.id_country, "Colombia", element.id, element.name);
      })
    })
  }
  fetchTypeDoc() {
    this.typeDocService.getAll().subscribe(data => {
      data.forEach((element,index)=>{
        this.typedocs[index] = new Typedoc(element.id,element.name);
      });
    })
  }
  fetchSkills()
  {
    this.skillService.getAll().subscribe(skill=>{
      skill.forEach((element,index)=>{
        this.skills[index] = new Skill(element.id,element.name);
      });
    });
  }



  register() {
    if (window.navigator.onLine) { //verify connection
      const value = this.form.value;
      if (this.form.valid && value.name.trim() != "" && value.user.trim() != "" &&this.skillNames!=="Skills") { //verify blank spaces
        let obcity: City = new City(value.country.id, value.country.name, value.city.id, value.city.Cityname);
        let obuser: user = new user(
          value.id, value.name, value.email, value.user, value.password, value.gender, obcity);
    
          this.userService.create(obuser,this.skillIndex)
            .subscribe()
          {
           
              this.successRegister = true;
              setTimeout(() => this.router.navigate(['/login']), 1500);
            
          }
      }
      else {
        this.message = "Debe completar todos los campos";
        this.registerError = true;
      }
    }
    else {
      this.registerError = true;
      this.message = "Se ha perdido la conexión!"
    }
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
  sendSkills()
  {
    this.skillNames="";
    const value = this.form.value;
    value.skillsc.forEach(element => {
        this.skillNames+=" "+element.name;
        this.skillIndex.push(element.id);
    });
    if(this.skillNames==="")
    {
      this.skillNames="Skills"
    }
  }

  onCheckChange(event,skill) {
    const value = this.form.value;
    const item:Skill[] = value.skillsc;
    /* Selected */
    if(event.target.checked){
      // Add a new control in the arrayForm
      let object=new Skill(skill.id,skill.name);
      value.skillsc.push(object);
    }
    /* unselected */
    else{
      // find the unselected element
      let element = value.skillsc.find(element=>element.name===skill.name);
      //remove the unselected element
      let index=value.skillsc.indexOf(element);
      item.splice(index,1);

    }
  }
}
