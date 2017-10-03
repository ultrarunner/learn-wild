import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-protected',
    template: `
    <div style="margin-top:5px;">
      <dashboard></dashboard>
    </div>         
    `
})
export class ProtectedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
