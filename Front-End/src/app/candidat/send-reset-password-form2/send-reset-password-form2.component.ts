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

    this.userService.sendResetEmail(this.userEmail).subscribe(
      (response: { message: string }) => {
        alert(response.message);
        this.router.navigate(['/']);
      },
      error => {
        console.error('Erreur lors de l\'envoi de l\'email', error);
    
        // Check if the error response has a message and display it
        const errorMessage = error?.message || 'Une erreur est survenue. Veuillez réessayer.';
        alert(errorMessage);
      }
    );
  }
}
