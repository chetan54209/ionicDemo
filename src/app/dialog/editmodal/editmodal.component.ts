import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editmodal',
  templateUrl: './editmodal.component.html',
  styleUrls: ['./editmodal.component.scss'],
})
export class EditmodalComponent implements OnInit  {
user: any;
formGroup: FormGroup;
titleAlert: string = 'This field is required';



constructor(public formBuilder: FormBuilder, public dialogRef: MatDialogRef<EditmodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) 
{
this.user = data;
}


ngOnInit(){
  this.createForm();
}

createForm() {
  let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  this.formGroup = this.formBuilder.group({
    'email': ['', [Validators.required, Validators.pattern(emailregex)]],
    'name': ['', Validators.required],
    'age': ['', [Validators.required]],
    'validate': ''
  });
}
get name() {
  return this.formGroup.get('name') as FormControl
}

get age() {
  return this.formGroup.get('age') as FormControl
}

getErrorEmail() {
  return this.formGroup.get('email').hasError('required') ? 'Field is required' :
    this.formGroup.get('email').hasError('pattern') ? 'Not a valid emailaddress' : '';
}

onSubmit() {
  // this.post = post;
console.log(this.user)
}

onNoClick(): void {
  this.dialogRef.close();
}
  // onsubmit() {
  //   let userObject = {
  //     name: this.form.controls["name"].value,
  //     age: this.form.controls["age"].value,
  //     email: this.form.controls["email"].value,
  //   };
  //   alert(JSON.stringify(userObject))
  //   console.log(userObject);
    
  // }



}
 