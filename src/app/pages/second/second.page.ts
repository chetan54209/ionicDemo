import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {
  lang: any;
text = "Page2 Works!"


  constructor(public translate: TranslateService) 
    { 
      this.lang = 'en';
      this.translate.setDefaultLang('en');
      this.translate.use('en');
  
  }
  ngOnInit() {
  }
  
  switchLanguage() {
    this.translate.use(this.lang);
  }
}
