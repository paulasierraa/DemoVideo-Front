import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form!:FormGroup;
  constructor(private formBuilder:FormBuilder) {
    this.buildRegister();
   }

  ngOnInit() {
  }
  buildRegister()
  {
    this.form = this.formBuilder.group(
      {
        nombre:['',Validators.required],
        usuario:['',Validators.required],
        correo:['',[Validators.required,Validators.email]],
        password:['',Validators.required]
      }
    );
  }
  validar(id:string)
  {
    const ob = document.getElementById('id');

    if(this.form.get('id')?.invalid)
    {
      ob?.classList.add("is-invalid");
    }
    else{
      ob?.classList.add("is-valid");
    }

  }    
}
