import { Component, OnInit } from '@angular/core';
import { RouterLink} from '@angular/router';
import { HeaderUserComponent } from '../../shared/header-user/header-user.component';
import { UserService } from '../../core/_services/user.service';
import { UserAuthService } from '../../core/_services/user-auth.service';

@Component({
  selector: 'app-compte',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './compte.component.html',
  styleUrl: './compte.component.css'
})
export class CompteComponent implements OnInit {
  user: any = null; // To hold the user information
  loading: boolean = true;
  error: string | null = null;

  constructor(private userService: UserService, private userAuthService: UserAuthService) {}

  ngOnInit(): void {
    this.getUserInfo();
  }

  // Fetch user information by extracting token from local storage
  getUserInfo(): void {
    const token = this.userAuthService.getToken(); // Assume JWT is saved in local storage
    if (token) {
      this.userService.getUserInfo(token).subscribe(
        (data) => {
          this.user = data;
          this.loading = false;
        },
        (err) => {
          this.error = 'Failed to fetch user data.';
          this.loading = false;
        }
      );
    } else {
      this.loading = false;
    }
  }
}