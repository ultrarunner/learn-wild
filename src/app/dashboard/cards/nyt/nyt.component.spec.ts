import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NytComponent } from './nyt.component';

describe('NytComponent', () => {
  let component: NytComponent;
  let fixture: ComponentFixture<NytComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NytComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NytComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
