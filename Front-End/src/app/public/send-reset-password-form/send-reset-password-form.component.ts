import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../core/_services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-send-reset-password-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
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

  chooseConnection() {
    
    // Rediriger vers la page de connexion
    this.router.navigate(['/connexion']);
  }
  onCancel() {
    this.router.navigate(['/connexion']); // Redirige vers la page de connexion
  }
  
}
