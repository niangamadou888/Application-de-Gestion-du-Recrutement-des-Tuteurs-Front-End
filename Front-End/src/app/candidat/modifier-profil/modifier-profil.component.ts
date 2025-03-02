import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderUserComponent } from '../../shared/header-user/header-user.component';

@Component({
  selector: 'app-modifier-profil',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, HeaderUserComponent],
  templateUrl: './modifier-profil.component.html',
  styleUrl: './modifier-profil.component.css'
})
export class ModifierProfilComponent {

}
