import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1Page } from './tab1.page';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';


describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
       IonicStorageModule.forRoot(),
        IonicModule.forRoot({
            _testing: true
        }),
    ],
   
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
