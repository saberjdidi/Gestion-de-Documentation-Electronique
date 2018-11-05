import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsableHomeComponent } from './responsable-home.component';

describe('ResponsableHomeComponent', () => {
  let component: ResponsableHomeComponent;
  let fixture: ComponentFixture<ResponsableHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsableHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsableHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
