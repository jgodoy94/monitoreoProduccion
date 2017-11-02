import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalGraphicsComponent } from './principal-graphics.component';

describe('PrincipalGraphicsComponent', () => {
  let component: PrincipalGraphicsComponent;
  let fixture: ComponentFixture<PrincipalGraphicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalGraphicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
