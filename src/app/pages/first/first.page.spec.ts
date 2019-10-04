import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {DataService} from '../../services/data.service';
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { FirstPage } from './first.page';

describe('page: FirstPage', () => {
  let component: FirstPage;
  let fixture: ComponentFixture<FirstPage>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPage ],
      providers: [DataService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
    component = null;
    de = null;
    el = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("displays data containing a id, name, email and age in the table", () => {
    let dataService = fixture.debugElement.injector.get(DataService);
    let firstdata = dataService.data[0];
    
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css("ion-list ion-item"));
    el = de.nativeElement;

    expect(el.textContent).toContain(firstdata.id);
    expect(el.textContent).toContain(firstdata.name);
    expect(el.textContent).toContain(firstdata.email);
    expect(el.textContent).toContain(firstdata.age)
  });
});
