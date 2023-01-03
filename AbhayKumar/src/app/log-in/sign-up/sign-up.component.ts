import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUPComponent implements OnInit {

  userInfoSignUp : FormGroup = this.formBuilder.group({
    'firstName' : new FormControl("", [Validators.required, contentValidatorText]), // null is similar as ""
    'lastName' : new FormControl("", [Validators.required, contentValidatorText]),
    'mobileNumber' : new FormControl("", [Validators.required, contentValidatorPhoneNumber  ]),
    'emailId' : new FormControl("",[Validators.required , contentValidatorEmailId]),
    'enterPassword' : new FormControl("",[Validators.required,contentValidatorPassword]),
    'confirmPassword' : new FormControl("",[Validators.required,contentValidatorReEnterPassword]),
  })

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void { }

  onSignUp(){
    // console.log(this.userInfoSignUp.value)
    console.log("this.userInfoSignUp.value    :-    ",this.userInfoSignUp.value);
    // console.log("this.userInfoSignUp.get('enterPassword')    :-    ",this.userInfoSignUp.get('enterPassword'));
    // console.log("this.userInfoSignUp.controls['enterPassword'].value    :-    ",this.userInfoSignUp.controls['enterPassword'].value);

    this.userInfoSignUp.reset();
  }

}



export function contentValidatorText(control: AbstractControl) {
  if(control?.value!==""&&control?.value?.trim()===""){
    return {invalidContent: true};
  }
  return null; // or  return {invalidContent: false}
}


export function contentValidatorPhoneNumber(control: AbstractControl) {

  const regex = /[6-9][\d]{9}/;
  let value = control.value;
  let paragraph="";
  let len = false;
  let reg = false;
  let res = false;

  if(value===null)paragraph=" ";
  else paragraph=String(control.value);

  if(Boolean(paragraph.match(regex))) reg=true;
  else reg = false;

  if(paragraph.length===10) len=true;
  else len = false;

  if(reg&&len) res = true;
  else res=false;
  
  if(!res){
    return {invalidContent: true};
  }
  return null; 

}


export function contentValidatorEmailId(control: AbstractControl) {
  const regex = /[a-zA-Z0-9_\.\-]+[@][A-Za-z]+[\.][a-zA-Z]{2,3}/;
  const regexEnd = /com$|co$|in$/
  let value = control.value;
  let paragraph="";

  let reg = false;
  let regEnd = false;
  let res= false;

  if(value===null)paragraph=" ";
  else paragraph=String(control.value);

  if(Boolean(paragraph.match(regex))) reg=true;
  else reg = false;

  if(Boolean(paragraph.match(regexEnd))) regEnd=true;
  else regEnd = false;

  if(reg&&regEnd) res = true;
  else res=false;

  if(!res){
    return {invalidContent: true};
  }
  return null; // or  return {invalidContent: false}
}


export function contentValidatorPassword(control: AbstractControl) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$%*\-&])[A-Za-z\d#$%*\-&]{8,15}$/;
  let value = control.value;
  let paragraph=""; 

  let reg = false;

  if(value===null)paragraph=" ";
  else paragraph=String(control.value);

  if(Boolean(paragraph.match(regex))) reg=true;
  else reg = false;

  if(!reg){
    return {invalidContent: true};
  }
  return null; 

}


export function contentValidatorReEnterPassword(control: AbstractControl){
  if(control.parent?.get('enterPassword')?.value!==control?.value){
    return {invalidContent: true};
  }
  return null; 
}