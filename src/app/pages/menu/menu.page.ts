import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  selectedPath = '';

  pages = [
    {
      title: 'Page with Tabs',
      url: '/menu/first'
    },
    {
      title: 'page1 ',
      url: '/menu/first-blank'
    },
    {
      title: 'page2',
      url: '/menu/second'
    },
    {
      title: 'page3',
      url: '/menu/third'
    }
  ];
  constructor(private router: Router) { 
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {
  }

}
