import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed,} from '@angular/core/testing';

import { AddmodalComponent } from './addmodal.component';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule, By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


describe('AddmodalComponent', () => {
  let component: AddmodalComponent;
  let fixture: ComponentFixture<AddmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmodalComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        BrowserModule,
        IonicModule.forRoot({
            _testing: true
        }),
    ],
    providers: [
      { provide: MAT_DIALOG_DATA, useValue: {} },
      { provide: MatDialogRef, useValue: {} }
  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

it(`should set submitted to be true`, async(() => {
component.onSubmit();
expect(component.onSubmit).toBeTruthy();
}));

it(`form should be invalid`, async(() => {
component.formGroup.controls['email'].setValue('');
component.formGroup.controls['name'].setValue('');
component.formGroup.controls['password'].setValue('');
component.formGroup.controls['age'].setValue('');
expect(component.formGroup.valid).toBeFalsy();
}));

it(`form should be valid`, async(() => {
component.formGroup.controls['email'].setValue('test@example.com');
component.formGroup.controls['name'].setValue('Testing')
component.formGroup.controls['password'].setValue('Test123456')
component.formGroup.controls['age'].setValue('26')
expect(component.formGroup.valid).toBeTruthy();
}));

});
