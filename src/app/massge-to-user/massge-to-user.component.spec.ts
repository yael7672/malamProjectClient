import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassgeToUserComponent } from './massge-to-user.component';

describe('MassgeToUserComponent', () => {
  let component: MassgeToUserComponent;
  let fixture: ComponentFixture<MassgeToUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MassgeToUserComponent]
    });
    fixture = TestBed.createComponent(MassgeToUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
