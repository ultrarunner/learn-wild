import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMediaPlayerComponent } from './single-media-player.component';

describe('SingleMediaPlayerComponent', () => {
  let component: SingleMediaPlayerComponent;
  let fixture: ComponentFixture<SingleMediaPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleMediaPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMediaPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
