import { Component, HostBinding, ViewChild } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { customAnimations } from './animations/customAnimations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
   customAnimations
  ]
})
export class AppComponent {
  title = 'languageLearningWebsite';

  @ViewChild(RouterOutlet) outlet!: RouterOutlet;

  // Using HostBinding to apply the routeAnimations trigger on the host element
  @HostBinding('@routeAnimations')
  public get routeAnimation() {
    return this.outlet?.activatedRouteData?.['animation'];
  }

  
}
