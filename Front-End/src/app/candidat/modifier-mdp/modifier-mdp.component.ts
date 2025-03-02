import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderUserComponent } from '../../shared/header-user/header-user.component';

@Component({
  selector: 'app-modifier-mdp',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, HeaderUserComponent],
  templateUrl: './modifier-mdp.component.html',
  styleUrl: './modifier-mdp.component.css'
})
export class ModifierMdpComponent {

}
