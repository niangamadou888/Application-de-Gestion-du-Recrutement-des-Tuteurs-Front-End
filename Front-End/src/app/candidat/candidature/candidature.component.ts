import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CandidatureService } from '../../core/_services/candidature_service/candidature.service';
import { HeaderUserComponent } from '../../shared/header-user/header-user.component';

@Component({
  selector: 'app-candidature',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, HeaderUserComponent],
  templateUrl: './candidature.component.html',
  styleUrl: './candidature.component.css'
})
export class CandidatureComponent {

  candidatures: any[] = [];

  constructor(private candidatureService: CandidatureService) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('userId')!;
    this.candidatureService.getCandidatures(userId).subscribe(
      (data) => {
        this.candidatures = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des candidatures', error);
      }
    );
  }


}
