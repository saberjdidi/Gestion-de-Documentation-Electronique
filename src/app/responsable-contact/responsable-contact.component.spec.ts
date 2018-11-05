import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsableContactComponent } from './responsable-contact.component';

describe('ResponsableContactComponent', () => {
  let component: ResponsableContactComponent;
  let fixture: ComponentFixture<ResponsableContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsableContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsableContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
