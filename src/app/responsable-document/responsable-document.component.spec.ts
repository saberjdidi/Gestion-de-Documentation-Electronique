import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsableDocumentComponent } from './responsable-document.component';

describe('ResponsableDocumentComponent', () => {
  let component: ResponsableDocumentComponent;
  let fixture: ComponentFixture<ResponsableDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsableDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsableDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
