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
  isLoading: boolean = false;
  files: { cv?: File; LettreMotivation?: File; diplome?: File } = {};
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private candidatureService: FormCandidatureService,private route: ActivatedRoute,private userAuthService: UserAuthService) { }

  ngOnInit(): void {
    // Initialize the form group with validators
    this.formGroup = this.fb.group({
      nomComplet: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required]],
      dateNaissance: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      niveauEtude: ['', [Validators.required]],
      domaineSpecialisation: ['', [Validators.required]],
      experiencePro: ['', [Validators.required]],
      universiteFrequente: ['', [Validators.required]],
      nbHeureDisponible: ['', [Validators.required, Validators.min(2)]]
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
    if (this.formGroup.invalid) {
      return; // Exit if form is invalid
    }
  
    this.isLoading = true;
    this.successMessage = null;
    this.errorMessage = null;
  
    // Prepare the form data to send to the backend (using FormData)
    const formData = new FormData();
    
    // Append JSON object as a string
    formData.append('candidature', JSON.stringify(this.formGroup.value));

    const userId = this.userAuthService.getUserId();
    console.log(userId);
    const annonceId = this.route.snapshot.params['id'];
  
    // Append the other fields
    if (userId) {
      formData.append('userId', userId); // Pass the userId
    } else {
      this.errorMessage = 'User ID is missing.';
      this.isLoading = false;
      return;
    }
    formData.append('annonceId', annonceId); // Pass the annonceId

    if (!this.files.cv || !this.files.LettreMotivation || !this.files.diplome) {
      this.errorMessage = 'Tous les fichiers (CV, Lettre de motivation, Diplôme) sont requis.';
      this.isLoading = false;
      return;
    }

    formData.append('cvFile', this.files.cv, this.files.cv.name);
    formData.append('lettreFile', this.files.LettreMotivation, this.files.LettreMotivation.name);
    formData.append('diplomeFile', this.files.diplome, this.files.diplome.name);


    // Call the service to submit the form data
    this.candidatureService.submitCandidature(formData).subscribe(
      (response) => {
        console.log(formData);
        this.isLoading = false;
        this.successMessage = 'Candidature soumise avec succès!';
        this.formGroup.reset(); // Reset the form after successful submission
      },
      (error) => {
        console.log(formData);
        this.isLoading = false;
        this.errorMessage = 'Une erreur est survenue. Veuillez réessayer plus tard.';
        console.log(error); // Log the error for debugging purposes
      }
    );
  }
  
}
