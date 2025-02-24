import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {

}
