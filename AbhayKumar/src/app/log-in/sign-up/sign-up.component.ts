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
    'FirstName' : new FormControl("", [Validators.required, contentValidatorText]), // null is similar as ""
    'LastName' : new FormControl("", [Validators.required, contentValidatorText]),

    // i am not using here Validators.pattern() , because i want to reuse and adding some condition
    // 'MobileNumber' : new FormControl(null,[Validators.required,Validators.pattern("[6-9][\d]{9}$"),Validators.maxLength(10)]),
    // 'MobileNumber' : new FormControl("", [Validators.required, Validators.maxLength(10) , contentValidatorPhoneNumber  ]),
    'MobileNumber' : new FormControl("", [Validators.required, contentValidatorPhoneNumber  ]),
    'EmailId' : new FormControl("",[Validators.required , contentValidatorEmailId]),
    // 'EmailId' : new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z0-9_\.\-]+[@][A-Za-z]+[\.][a-zA-Z]{2,3}$"),Validators.maxLength(10)]),
    
    // 'Password':new FormGroup({
    //   'EnterPassword' : new FormControl("",[Validators.required,contentValidatorPassword]),
    //   'ConfirmPassword' : new FormControl("",[Validators.required,]),
    // } ,{validators:this.passwordConfirming})
    'Password':new FormGroup({
      'EnterPassword' : new FormControl("",[Validators.required,contentValidatorPassword]),
      'ConfirmPassword' : new FormControl("",[Validators.required,contentValidatorReEnterPassword]),
    })

    // 'Password':new FormGroup({
    //   'EnterPassword' : new FormControl("",[Validators.required,contentValidatorPassword]),
    //   'ConfirmPassword' : new FormControl("",[Validators.required]),
    // } ,[this.passwordConfirming])

    // 'Password':new FormGroup({
    //   'EnterPassword' : new FormControl("",[Validators.required,contentValidatorPassword]),
    //   'ConfirmPassword' : new FormControl("",[Validators.required , this.passwordConfirmingCheck]),
    // })
  })

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    // you can check here every thing
    // console.log("this.userInfoSignUp.value    :-    ",this.userInfoSignUp.value);
    // console.log("this.userInfoSignUp    :-    ",this.userInfoSignUp);
    // console.log("this.userInfoSignUp.controls    :-    ",this.userInfoSignUp.controls);

    // console.log("this.userInfoSignUp.controls['Password']    :-    ",this.userInfoSignUp.controls['Password']);
    // console.log("this.userInfoSignUp.get('Password') as FormGroup    :-    ",this.userInfoSignUp.get('Password') as FormGroup);
    // console.log("this.userInfoSignUp.get('Password')   :-    ",this.userInfoSignUp.get('Password'));

    // console.log("this.userInfoSignUp.controls['Password'].value    :-    ",this.userInfoSignUp.controls['Password'].value);
    // console.log("this.userInfoSignUp.controls['Password'].value    :-    ",this.userInfoSignUp?.controls['Password']['controls']);

    // console.log("this.userInfoSignUp.get('FirstName')   :-    ",this.userInfoSignUp.get('FirstName'));
    // console.log("this.userInfoSignUp.get('LastName')   :-    ",this.userInfoSignUp.get('LastName'));
    // console.log("this.userInfoSignUp.get('MobileNumber')   :-    ",this.userInfoSignUp.get('MobileNumber'));
    // console.log("this.userInfoSignUp.get('EmailId')   :-    ",this.userInfoSignUp.get('EmailId'));
    // console.log("this.userInfoSignUp.get('Password')   :-    ",this.userInfoSignUp.get('Password'));

    // console.log("this.userInfoSignUp.get('Password')?.get('EnterPassword')   :-    ",this.userInfoSignUp.get('Password')?.get('EnterPassword'));
    console.log("this.userInfoSignUp.get('Password')?.get('ConfirmPassword')   :-    ",this.userInfoSignUp.get('Password')?.get('ConfirmPassword'));
    console.log("this.userInfoSignUp.get('Password')?.get('ConfirmPassword').parent   :-    ",this.userInfoSignUp.get('Password')?.get('ConfirmPassword')?.parent);
    // console.log("this.userInfoSignUp.get('Password')?.get('EnterPassword')?.value   :-    ",this.userInfoSignUp.get('Password')?.get('EnterPassword')?.value);
    // console.log("this.userInfoSignUp.get('Password')?.get('ConfirmPassword')?.value   :-    ",this.userInfoSignUp.get('Password')?.get('ConfirmPassword')?.value);
    console.log("this.userInfoSignUp.get('Password')?.get('ConfirmPassword')?.value   :-    ",this.userInfoSignUp.get('Password')?.get('ConfirmPassword')?.parent?.get('EnterPassword')?.value);

    console.log("this.userInfoSignUp.controls['Password'].invalid    :-    ",this.userInfoSignUp.controls['Password'].invalid);
    console.log("this.userInfoSignUp.controls['Password'].valid    :-    ",this.userInfoSignUp.controls['Password'].valid);

  }

  onSignUp(){
    // console.log(this.userInfoSignUp.value)
    // console.log("this.userInfoSignUp.value    :-    ",this.userInfoSignUp.value);
    // console.log("this.userInfoSignUp    :-    ",this.userInfoSignUp);
    // console.log("this.userInfoSignUp.controls    :-    ",this.userInfoSignUp.controls);

    // console.log("this.userInfoSignUp.controls['Password']    :-    ",this.userInfoSignUp.controls['Password']);
    // console.log("this.userInfoSignUp.get('Password') as FormGroup    :-    ",this.userInfoSignUp.get('Password') as FormGroup);
    // console.log("this.userInfoSignUp.get('Password')   :-    ",this.userInfoSignUp.get('Password'));

    // console.log("this.userInfoSignUp.controls['Password'].value    :-    ",this.userInfoSignUp.controls['Password'].value);

    console.log("this.userInfoSignUp.controls['Password'].invalid    :-    ",this.userInfoSignUp.controls['Password'].invalid);
    console.log("this.userInfoSignUp.controls['Password'].valid    :-    ",this.userInfoSignUp.controls['Password'].valid);

    this.userInfoSignUp.reset();
  }

  passwordConfirming(control: AbstractControl){

    if (control.get('EnterPassword')?.value !== control.get('ConfirmPassword')?.value) {

        return {invalidContent: true};
    }
    return null;
  }



  getConsoleFirstName(){
    // console.log("userInfoSignUp.get('FirstName')?.hasError('invalidContent')  :-  " , this.userInfoSignUp.get('FirstName')?.hasError('invalidContent'))
    // console.log("this.userInfoSignUp.controls['FirstName']  :-  " , this.userInfoSignUp.controls['FirstName'])
  }

  getConsoleMobileNumber(){
    // console.log("userInfoSignUp.controls['MobileNumber']  :-  " , this.userInfoSignUp.controls['MobileNumber'])
    // console.log("userInfoSignUp  :-  " , this.userInfoSignUp) 
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
  return null; // or  return {invalidContent: false}

}




export function contentValidatorEmailId(control: AbstractControl) {
  // const regex = /[a-zA-Z0-9_\.\-]+[@][A-Za-z]+[\.][a-zA-Z]{2,3}/;
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
  /* 
    At least 8 - 16 characters,
    must contain at least 1 uppercase letter,
    must contain at least 1 lowercase letter,
    and 1 number
    Can contain any of this special characters $ % # * & - .
    */

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
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
  return null; // or  return {invalidContent: false}

}



export function contentValidatorReEnterPassword(control: AbstractControl){
  if(control.parent?.get('EnterPassword')?.value!==control.parent?.get('ConfirmPassword')?.value){
    return {invalidContent: true};
  }
  return null; // or  return {invalidContent: false}
}

// export function passwordConfirmingCheck(control: AbstractControl){
//   if (control.get('EnterPassword')?.value !== control.get('ConfirmPassword')?.value) {
//     return {invalid: true};
// }
// return null;
// }
























/* 

export function contentValidatorPhoneNumber(control: AbstractControl) {
  
// const paragraph = '69786578945';
// const regex = /[6-9][0-9]{9}/;
// let found = Boolean(paragraph.match(regex));
// let res = false;
// if(Boolean(paragraph.match(regex)) && paragraph.length==10) res=true;
// console.log(res);
 
  


  // if(control.value==null)mobileNo="";
  // else mobileNo =control.value;
  // console.log("mobileNo   :-  ", mobileNo)
  // if(mobileNo.length!=0) regexMatch = Boolean(String(mobileNo).match(regex));
  // else regexMatch = false;
  // // regexMatch = Boolean(mobileNo.match(regex));
  // let MobileLengthMatch = mobileNo?.length==10 ? true:false;
  // if(regexMatch && MobileLengthMatch){
  //   return {invalidContent: false};
  // }
  // return {invalidContent: true}
  // if(regexMatch){
  //   return {invalidContent: false};
  // }
  // return {invalidContent: true};

  // const regex = /[6-9][0-9]{9}/;
  // let value = control.value;
  // let paragraph="";
  // let len = false;
  // let reg = false;
  // let res = false;

  // if(value===null)paragraph=" ";
  // else paragraph=String(control.value);

  // if(Boolean(paragraph.match(regex))) reg=true;
  // else reg = false;

  // if(paragraph.length===10) len=true;
  // else len = false;

  // if(reg&&len) res = true;
  // else res=false;
  
  // if(!res){
  //   return {invalidContent: true};
  // }
  // return null; // or  return {invalidContent: false}

} */