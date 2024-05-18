import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  router = inject(Router);

  NavigationByUrl(url: string): Promise<boolean> {
    return this.router.navigateByUrl(url);
  }
}
