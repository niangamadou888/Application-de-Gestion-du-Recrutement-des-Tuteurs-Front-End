import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormCandidatureService } from '../../core/_services/candidature_service/form-candidature.service';
import { UserAuthService } from '../../core/_services/user-auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-candidature',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-candidature.component.html',
  styleUrl: './form-candidature.component.css'
})
export class FormCandidatureComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({});
  files: { cv?: File; LettreMotivation?: File; diplome?: File } = {};
  successMessage = '';
  errorMessage = '';
  isLoading = false; // Indicateur de chargement

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private formCandidatureService: FormCandidatureService,
    private userAuthService: UserAuthService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.pattern('^[0-9]{9,15}$')]],
      date_naissance: ['', Validators.required],
      adresse: ['', Validators.required],
      niveau_etudes: ['', Validators.required],
      domaine: ['', Validators.required],
      experience: ['', Validators.required],
      universite: ['', Validators.required],
      disponibilite: ['', [Validators.required, Validators.min(2)]],
      declaration: [false, Validators.requiredTrue]
    });
  }

  onFileSelected(event: any, type: 'cv' | 'LettreMotivation' | 'diplome') {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5000000) {
        this.errorMessage = 'Le fichier est trop volumineux (max 5MB).';
        return;
      }

      const validTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      if (!validTypes.includes(file.type)) {
        this.errorMessage = 'Format de fichier invalide. Seuls PDF et Word sont acceptés.';
        return;
      }

      this.files[type] = file;
      this.formGroup.get(type)?.setValue(file.name);
    }
  }

  onSubmit(): void {
    this.errorMessage = '';
    this.successMessage = '';
    this.isLoading = true; // Activation du chargement

    if (this.formGroup.invalid) {
      this.errorMessage = 'Veuillez remplir tous les champs correctement.';
      this.isLoading = false;
      return;
    }

    if (!this.files.cv || !this.files.LettreMotivation || !this.files.diplome) {
      this.errorMessage = 'Tous les fichiers (CV, Lettre de motivation, Diplôme) sont requis.';
      this.isLoading = false;
      return;
    }

    const candidatureData = this.formGroup.value;
    const userId = this.userAuthService.getUserId();
    const annonceId = this.route.snapshot.params['annonceId'];

    if (!userId || !annonceId) {
      this.errorMessage = 'Identifiant utilisateur ou annonce manquant.';
      this.isLoading = false;
      return;
    }

    this.formCandidatureService.onSubmit(candidatureData, this.files, userId, annonceId).subscribe(
      (response) => {
        this.successMessage = 'Candidature soumise avec succès !';
        this.errorMessage = '';
        this.formGroup.reset();
        this.files = {};
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = 'Une erreur s\'est produite. Veuillez réessayer.';
        this.successMessage = '';
        this.isLoading = false;
      }
    );
  }
}
