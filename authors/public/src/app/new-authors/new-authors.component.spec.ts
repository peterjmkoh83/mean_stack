import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAuthorsComponent } from './new-authors.component';

describe('NewAuthorsComponent', () => {
  let component: NewAuthorsComponent;
  let fixture: ComponentFixture<NewAuthorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAuthorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
