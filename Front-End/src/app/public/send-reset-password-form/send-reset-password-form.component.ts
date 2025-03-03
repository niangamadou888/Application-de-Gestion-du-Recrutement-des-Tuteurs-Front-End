import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../core/_services/user.service';

@Component({
  selector: 'app-send-reset-password-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './send-reset-password-form.component.html',
  styleUrl: './send-reset-password-form.component.css'
})
export class SendResetPasswordFormComponent {
  userEmail: string = '';

  constructor(private router: Router,private userService: UserService) {}
  chooseInscription() {
    
    // Rediriger vers la page d'inscription
    this.router.navigate(['/inscription']);
  }

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
        this.router.navigate(['/']); // Or wherever you want to redirect after success
      },
      error => {
        console.error('Erreur lors de l\'envoi de l\'email', error);
        alert('Une erreur est survenue. Veuillez réessayer.');
      }
    );
  }

  chooseConnection() {
    
    // Rediriger vers la page de connexion
    this.router.navigate(['/connexion']);
  }
}
