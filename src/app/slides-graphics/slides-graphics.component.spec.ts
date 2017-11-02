import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesGraphicsComponent } from './slides-graphics.component';

describe('SlidesGraphicsComponent', () => {
  let component: SlidesGraphicsComponent;
  let fixture: ComponentFixture<SlidesGraphicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidesGraphicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
