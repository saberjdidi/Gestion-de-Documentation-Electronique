import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsableActualiteComponent } from './responsable-actualite.component';

describe('ResponsableActualiteComponent', () => {
  let component: ResponsableActualiteComponent;
  let fixture: ComponentFixture<ResponsableActualiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsableActualiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsableActualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
