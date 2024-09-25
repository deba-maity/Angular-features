import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsStringComponent } from './js-string.component';

describe('JsStringComponent', () => {
  let component: JsStringComponent;
  let fixture: ComponentFixture<JsStringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsStringComponent]
    });
    fixture = TestBed.createComponent(JsStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
