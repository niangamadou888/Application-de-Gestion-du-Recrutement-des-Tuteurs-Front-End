import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../core/_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-reset-password-form2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './send-reset-password-form2.component.html',
  styleUrl: './send-reset-password-form2.component.css'
})
export class SendResetPasswordForm2Component {
  userEmail: string = '';

  constructor(private userService: UserService, private router: Router) {}

  // Method to handle the password reset
  onSubmit() {
    if (!this.userEmail) {
      alert('Veuillez entrer un email');
      return;
    }

    // Call the service to send the reset request
    this.userService.sendResetEmail(this.userEmail).subscribe(
      response => {
        alert('Un email de réinitialisation a été envoyé.');
        this.router.navigate(['/candidat/compte']); // Or wherever you want to redirect after success
      },
      error => {
        console.error('Erreur lors de l\'envoi de l\'email', error);
        alert('Une erreur est survenue. Veuillez réessayer.');
      }
    );
  }
}
