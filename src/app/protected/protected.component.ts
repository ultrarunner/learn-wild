import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div style="margin-top:5px;">
          PROTECTED ROUTE REACHED...
        </div>        
    `
})
export class ProtectedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
