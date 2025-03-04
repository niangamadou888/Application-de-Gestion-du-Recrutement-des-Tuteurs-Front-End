import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CandidatureService } from '../../core/_services/candidature_service/candidature.service';
import { UserAuthService } from '../../core/_services/user-auth.service';
@Component({
  selector: 'app-candidature',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './candidature.component.html',
  styleUrl: './candidature.component.css'
})
export class CandidatureComponent {

  candidatures: any[] = [];

  constructor(private candidatureService: CandidatureService,
              private userAuthService: UserAuthService) {}

  ngOnInit(): void {
    this.loadCandidatures();
  }
  
  loadCandidatures(): void {
    const userId = this.userAuthService.getUserId()!;
    this.candidatureService.getCandidaturesByUserId(userId).subscribe(
      (data) => {
        this.candidatures = data;
        console.log('Candidatures récupérées :', this.candidatures); // Log pour déboguer
      },
      (error) => {
        console.error('Erreur lors de la récupération des candidatures :', error);
      }
    );
  }

}
