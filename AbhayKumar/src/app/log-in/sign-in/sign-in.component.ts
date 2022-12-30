import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  userInfoSignIn : FormGroup = this.formBuilder.group({
    'MobileNumber' : new FormControl(null,[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    // mobile number should be 10 characters
    'FirstPassword' : new FormControl("",[Validators.required,]),
  })
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }
  onSignIn(){
    console.log(this.userInfoSignIn.value)
    // you can pass data to api here
    this.userInfoSignIn.reset();
  }

}
