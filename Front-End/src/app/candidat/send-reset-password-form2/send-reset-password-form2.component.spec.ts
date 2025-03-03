import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendResetPasswordForm2Component } from './send-reset-password-form2.component';

describe('SendResetPasswordForm2Component', () => {
  let component: SendResetPasswordForm2Component;
  let fixture: ComponentFixture<SendResetPasswordForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendResetPasswordForm2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendResetPasswordForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
