import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service'; 

    //guard pour protéger certaines routes
export const authGuard: CanActivateFn = (route, state) => {
  const userAuthService = inject(UserAuthService);
  const router = inject(Router);
  const userService = inject(UserService);

  const token = userAuthService.getToken(); // Récupération du token 

  if (token !== null){
    const roles = route.data["roles"] as Array <string>; // Récupération des rôles requis pour accéder à la route
    
    if(roles){
      const match = userService.roleMatch(roles); // Vérification si l'utilisateur a un rôle autorisé
      if(match){
        return true; // Autorise l'accès à la route
      }else{
        router.createUrlTree(['/']);
        return false;
      } 
    }
    router.createUrlTree(['/public/connection']);
    return false;
  }
  return router.createUrlTree(['/']);
};
