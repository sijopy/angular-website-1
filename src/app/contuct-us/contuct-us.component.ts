import { Component } from '@angular/core';
import { AbstractControl,FormControl,FormGroup,Validators,FormBuilder, } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contuct-us',
  templateUrl: './contuct-us.component.html',
  styleUrls: ['./contuct-us.component.scss']
})
export class ContuctUsComponent {
  title = 'reativeform';
  name: string = "";
  loginForm: any;
  inputtext: string = "Name";
  emailid:string="email";
  text:string="Comments"
  isFormValid: boolean = false;
  

    registerForm = new FormGroup({
    Name: new FormControl("", [Validators.required, Validators.maxLength(15)]),
    email: new FormControl("", [Validators.required,Validators.email]),
    comment: new FormControl("",[Validators.required])
    });
   
    constructor(private router: Router) { }




  getControl(name: any): AbstractControl | null {
    return this.registerForm.get(name)
  }


  onSubmit() {
    if (this.registerForm.valid) {
      this.isFormValid = true;
      this.router.navigate(['/sucess']);
      console.log('Form Values', this.registerForm.value)
    }
  }
}
