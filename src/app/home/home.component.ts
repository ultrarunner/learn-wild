import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
        <div style="margin-top:5px;">
            <dashboard></dashboard>
        </div>        
    `
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      console.log("hello from the home page...");
  }
}
