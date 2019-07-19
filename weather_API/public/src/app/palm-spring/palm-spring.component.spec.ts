import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalmSpringComponent } from './palm-spring.component';

describe('PalmSpringComponent', () => {
  let component: PalmSpringComponent;
  let fixture: ComponentFixture<PalmSpringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalmSpringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalmSpringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
