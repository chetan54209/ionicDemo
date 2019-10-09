import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletemodalComponent } from './deletemodal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { IonicModule } from '@ionic/angular';


describe('DeletemodalComponent', () => {
  let component: DeletemodalComponent;
  let fixture: ComponentFixture<DeletemodalComponent>;
  const dialogMock = {
    close: () => { }
   };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletemodalComponent ],
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
      { provide: MatDialogRef, useValue: {} },
      {provide: MatDialogRef, useValue: dialogMock},
  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should set submitted to be true`, async(() => {
    component.confirmDelete();
    expect(component.confirmDelete).toBeTruthy();
    }));

    it('dialog should be closed after onNoClick()', () => {
      let spy = spyOn(component.dialogRef, 'close').and.callThrough();
      component.onNoClick();
      expect(spy).toHaveBeenCalled();    
    });

    // it('dialog should be closed after onNoClick()', async(() => {
    //   component.onNoClick();
    //   expect(component.dialogRef.close).toHaveBeenCalled();
    // }));
    
});
