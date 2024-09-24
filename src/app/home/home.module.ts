import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class HomeModule { }
