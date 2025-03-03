import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
  notifications = [
    {
      id: 1,
      titre: "🎓 Vous avez été sélectionné en tant que tuteur en IA !",
      message: "Félicitations ! Vous avez été retenu pour encadrer des étudiants en Intelligence Artificielle.",
      icone: "🎓",
      date: "il y a 2 heures",
      lu: false
    },
    {
      id: 2,
      titre: "❌ Votre candidature pour le poste de tuteur en Big Data a été rejetée",
      message: "Nous sommes désolés, mais votre profil n’a pas été retenu pour cette mission.",
      icone: "❌",
      date: "Reçu hier",
      lu: true
    },
    {
      id: 3,
      titre: "🚀 Nouvelle mise à jour de la plateforme e-learning !",
      message: "Découvrez les nouvelles fonctionnalités ajoutées pour améliorer votre expérience d'apprentissage.",
      icone: "🚀",
      date: "il y a 3 jours",
      lu: false
    },
    {
      id: 4,
      titre: "🎤 Un nouveau webinaire sur l’IA est disponible !",
      message: "Rejoignez-nous ce vendredi pour un webinaire exclusif sur l’Intelligence Artificielle appliquée.",
      icone: "🎤",
      date: "il y a 5 jours",
      lu: false
    },
    {
      id: 5,
      titre: "📅 Rappel : Votre session de tutorat commence bientôt",
      message: "Votre prochaine session de tutorat est prévue pour demain à 10h00. Soyez prêt !",
      icone: "📅",
      date: "il y a 1 semaine",
      lu: true
    }
  ];

  marquerCommeLu(notification: any) {
    notification.lu = true;
  }

  supprimerNotification(notification: any) {
    this.notifications = this.notifications.filter(n => n.id !== notification.id);
  }

}
