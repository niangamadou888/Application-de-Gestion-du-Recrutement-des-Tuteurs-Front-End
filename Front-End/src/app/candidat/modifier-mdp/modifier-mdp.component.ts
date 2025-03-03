import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../core/_services/user.service';

@Component({
  selector: 'app-modifier-mdp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modifier-mdp.component.html',
  styleUrl: './modifier-mdp.component.css'
})
export class ModifierMdpComponent {
  newPassword: string = '';  // New password field
  confirmerMdp: string = ''; // Confirm password field
  erreurMessage: string = '';  // To store the error message
  successMessage: string = '';
  token: string | null = null; 

  constructor(private route: ActivatedRoute,private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    // Capture the token from the URL path using ActivatedRoute
    this.route.paramMap.subscribe(params => {
      this.token = params.get('id'); // 'id' is the dynamic segment in the URL
      console.log('Token captured from URL:', this.token);  // Optional: you can remove this in production
    });
  }

  // Form submission handler
  onSubmit(): void {
    if (!this.token) {
      alert('Invalid token.');
      return;
    }
    // Check if new password and confirm password match
    if (this.newPassword !== this.confirmerMdp) {
      this.erreurMessage = "Les mots de passe ne correspondent pas."; // Error message for mismatch
      return; // Prevent form submission
    }

    // Clear any previous error message
    this.erreurMessage = '';

    // Call the password reset service to send the new password to the backend
    this.userService.resetPassword(this.token, this.newPassword).subscribe(
      response => {
        // Handle success (you can redirect or display a success message)
        this.successMessage = 'Mot de passe réinitialisé avec succès.';
        setTimeout(() => {
          this.router.navigate(['/login']); // Redirect to login page after success
        }, 2000);
      },
      error => {
        // Handle error (e.g., token invalid, server issues, etc.)
        this.erreurMessage = error; // Display the error message received from the service
      }
    );
  }
}