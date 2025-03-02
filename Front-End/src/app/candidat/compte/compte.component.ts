import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderUserComponent } from '../../shared/header-user/header-user.component';

@Component({
  selector: 'app-compte',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, HeaderUserComponent],
  templateUrl: './compte.component.html',
  styleUrl: './compte.component.css'
})
export class CompteComponent {

}
