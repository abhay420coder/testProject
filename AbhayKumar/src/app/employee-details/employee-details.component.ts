import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Form, FormArrayName, FormGroup, FormControl, NgForm, Validators, AbstractControl } from '@angular/forms';
import { contentValidatorText } from '../log-in/sign-up/sign-up.component'

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }



  employeeForm = this.fb.group({
    employeeDetails: this.fb.array([]),// Initially,  the FormArray instance is empty and contains no form controls, meaning that the editable table is initially empty.
}); 

deafultImageSource="../../assets/images/Sachin.jpg";
fileToUpload: File | null = null;
 get employeeDetails() :FormArray{ // this is  to get formArray  from form Group
    return this.employeeForm.controls["employeeDetails"] as FormArray; // it works as an array , it means  we are getting an array 
  }


  addEmployeeDetails(){
    let empArr = this.employeeForm.get('employeeDetails') as FormArray // or let empArr = this.employeeDetails

    let empDetails = this.fb.group({
      userImage : new FormControl(this.deafultImageSource),
      userName : new FormControl("" , [Validators.required , contentValidatorText]),
      userPosition : new FormControl("" , [Validators.required , contentValidatorText]),
      userAge : new FormControl("" , [Validators.required, contentValidatorAge]),
      userGender : new FormControl("" , [Validators.required]),
    })
    empArr.push(empDetails);  // or this.employeeDetails.push(empDetails)
  }

  deleteEmployee(lessonIndex: number) {
    this.employeeDetails.removeAt(lessonIndex);
  }

  onSubmitForm(employeeForm:any){
    console.log("employeeForm :-  ",employeeForm)
    console.log("employeeForm.value :-  ",employeeForm.value)
    console.log("employeeForm.value.employeeDetails[1].userImage.value :-  ",employeeForm.value.employeeDetails[0].userImage.value)
  } 

  showPreview(event: any , index:any){
    console.log("event  :-  ",event);
    console.log("event.target.files  :-  ",event.target.files);
    let files = event.target.files
    this.fileToUpload = files.item(0);
    if(files){
      let reader = new FileReader();  
      reader.readAsDataURL(files[0]);
      reader.onload=(event:any)=>{
          let imgResult= event.target.result;
          this.employeeForm.controls.employeeDetails.controls[index].patchValue({userImage:imgResult})
      }
    }
  }
















}


export function contentValidatorAge(control: AbstractControl) {

  const regex = /[1-9][\d]/; // this is a  regular expression for age
  let value = control.value;
  let paragraph="";
  let len = false;
  let reg = false;
  let res = false;

  if(value===null)paragraph=" ";
  else paragraph=String(control.value);

  if(Boolean(paragraph.match(regex))) reg=true;
  else reg = false;

  if(paragraph.length>=2 && Number(paragraph)>18) len=true;
  else len = false;

  if(reg&&len) res = true;
  else res=false;
  
  if(!res){
    return {invalidContent: true};
  }
  return null; 

}
