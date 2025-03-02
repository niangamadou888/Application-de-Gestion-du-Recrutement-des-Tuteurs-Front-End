import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderUserComponent } from '../../shared/header-user/header-user.component';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, HeaderUserComponent],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {

}
