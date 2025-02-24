import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormCandidatureService } from '../../core/_services/candidature_service/form-candidature.service';

@Component({
  selector: 'app-form-candidature',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './form-candidature.component.html',
  styleUrl: './form-candidature.component.css'
})
export class FormCandidatureComponent {

  formGroup! : FormGroup;

  files : { cv?: File, LettreMotivation?: File, diplome?: File } = {};
  isLoading = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb:FormBuilder, private http:HttpClient,
    private formCandidatureService :FormCandidatureService
  ){}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required], 
      date_naissance: ['', Validators.required],
      adresse: ['', Validators.required],
      niveau_etudes: ['', Validators.required],
      domaine: ['', Validators.required],
      experience: ['', Validators.required],
      universite: ['', Validators.required],
      cv: [null, Validators.required], // Gardez cette validation si le fichier est nécessaire
  LettreMotivation: [null, Validators.required], // Pareil ici
  diplome: [null, Validators.required], 
      disponibilite: ['', [Validators.required, Validators.min(2)]],
      declaration: [false, Validators.requiredTrue]
    });
  }
  onFileSelected(event: any, type: 'cv' | 'LettreMotivation' | 'diplome') {
    const file = event.target.files[0];
    if (file) {
      // Vérifiez le type de fichier et la taille
      if (file.size > 5000000) {  // Limite à 5MB
        console.log('Le fichier est trop volumineux');
        return;
      }
      if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
        console.log('Type de fichier invalide');
        return;
      }
      this.files[type] = file;
      this.formGroup.get(type)?.setValue(file.name);  // Ajoutez le nom du fichier au formulaire
    }
  }
  // Méthode onSubmit appelée lors de la soumission du formulaire
  onSubmit(): void {
    if (this.formGroup.valid) {
      // Traite les données du formulaire ici
      console.log(this.formGroup.value);
      this.successMessage = 'Candidature soumise avec succès !';
      this.errorMessage = '';
    } else {
      // si le formulaire n'est pas valide
      console.log('Formulaire invalide');
      console.log(this.formGroup.errors);  // Affichez les erreurs globales
    Object.keys(this.formGroup.controls).forEach(control => {
      if (this.formGroup.get(control)?.invalid) {
        console.log(`Le champ ${control} est invalide.`);
      }
    });
      this.errorMessage = 'Veuillez vérifier les champs du formulaire.';
      this.successMessage = ''; // Réinitialise le message de succès
    }
  }


}
