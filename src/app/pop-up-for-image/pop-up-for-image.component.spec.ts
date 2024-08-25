import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpForImageComponent } from './pop-up-for-image.component';

describe('PopUpForImageComponent', () => {
  let component: PopUpForImageComponent;
  let fixture: ComponentFixture<PopUpForImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpForImageComponent]
    });
    fixture = TestBed.createComponent(PopUpForImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
