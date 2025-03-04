import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/_services/user.service';
import { UserAuthService } from '../../core/_services/user-auth.service';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifier-profil',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modifier-profil.component.html',
  styleUrl: './modifier-profil.component.css'
})
export class ModifierProfilComponent implements OnInit{
  user = {
    userFirstName: '',
    userLastName: '',
    userEmail: ''
  };

  ngOnInit(): void {
    const token = this.userAuthService.getToken(); // Get the JWT token from storage
    this.userService.getUserInfo(token).subscribe(
      (response) => {
        // Populate the form fields with the fetched data
        this.user.userFirstName = response.userFirstName;
        this.user.userLastName = response.userLastName;
        this.user.userEmail = response.userEmail;
      },
      (error) => {
        console.error('Error fetching user info:', error);
      }
    );
  }

  public gererAnnonce() {
    this.router.navigate(['/candidat/compte']).then(() => {
      // Force reload of the page
      window.location.reload();
    });
  }

   constructor(private userService: UserService, private userAuthService: UserAuthService, private router:Router) {}

  onSubmit() {
    const token = this.userAuthService.getToken();  // Get the token from storage
    this.userService.updateUserInfo(token, this.user).subscribe(
      (response) => {
        console.log('User info updated:', response);
        this.gererAnnonce();
        // Handle the success response (maybe show a success message or redirect)
      },
      (error) => {
        console.log('Error updating user info:', error);
        // Handle the error response (maybe show an error message)
      }
    );
  }
  onCancel() {
    this.router.navigate(['/candidat/compte']); // Redirige vers la page de connexion
  }
}
