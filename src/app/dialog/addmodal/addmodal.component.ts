import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Observable,of, from } from 'rxjs';

@Component({
  selector: 'app-addmodal',
  templateUrl: './addmodal.component.html',
  styleUrls: ['./addmodal.component.scss'],
})
export class AddmodalComponent implements OnInit {
  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  // post: any = '';



  constructor(public formBuilder: FormBuilder,public dialogRef: MatDialogRef<AddmodalComponent>,) {
 }

  ngOnInit() {  this.createForm();
    // this.setChangeValidate()
  }


  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.pattern(emailregex)]],
      'name': ['', Validators.required],
      'password': ['', [Validators.required, this.checkPassword]],
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
        // this.formGroup.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  }

getErrorPassword() {
    return this.formGroup.get('password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
      this.formGroup.get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  }  

checkPassword(control) {
    let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }

onSubmit() {
    // this.post = post;
  console.log(this.formGroup)
}

  onNoClick(){
    this.dialogRef.close();
  }
}
