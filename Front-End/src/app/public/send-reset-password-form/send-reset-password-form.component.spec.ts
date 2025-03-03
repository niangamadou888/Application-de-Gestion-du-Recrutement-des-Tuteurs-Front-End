import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendResetPasswordFormComponent } from './send-reset-password-form.component';

describe('SendResetPasswordFormComponent', () => {
  let component: SendResetPasswordFormComponent;
  let fixture: ComponentFixture<SendResetPasswordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendResetPasswordFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendResetPasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
