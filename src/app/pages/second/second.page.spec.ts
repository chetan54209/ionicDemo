import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SecondPage } from './second.page';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import {TranslateFakeLoader,TranslateLoader,TranslateModule,TranslateService } from '@ngx-translate/core';


const TRANSLATIONS_EN = require('../../../assets/i18n/en.json');



describe('SecondPage', () => {
  let component: SecondPage;
  let fixture: ComponentFixture<SecondPage>;

  let translate: TranslateService;
  let http: HttpTestingController;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondPage ],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        BrowserModule,
        RouterTestingModule,
        IonicModule.forRoot({
            _testing: true
        }),
        TranslateModule.forRoot({
                    loader: {
                      provide: TranslateLoader,
                      useClass: TranslateFakeLoader
                    }
                  })
    ],

      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [TranslateService]
    })
    .compileComponents();
    translate = TestBed.get(TranslateService);
    http = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have a text a 'Page2 Works!'`, async(() => {
expect(component.text).toEqual('Page2 Works!')
  }));

  // it(`should load translation`, async(() => {
  //   spyOn(translate, 'getBrowserLang').and.returnValue('en');
  //   const fixture = TestBed.createComponent(SecondPage);
  //   const compiled = fixture.debugElement.nativeElement;

  //  the DOM should be empty for now since the translations haven't been rendered yet
  //  expect(compiled.querySelector('h2').textContent).toEqual('');

  //  http.expectOne('../../../assets/i18n/en.json').flush(TRANSLATIONS_EN);


  //  Finally, assert that there are no outstanding requests.
  //  http.verify();

  //  fixture.detectChanges();

// the content should be translated to english now
// expect(compiled.querySelector('h2').textContent).toEqual(TRANSLATIONS_EN.home);
//   }));


});
