import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
selectedLanguage:string =''

getLan(ev : any)
{
  this.selectedLanguage = ev.target.value
  console.log( 'current lang ' + this.selectedLanguage);
}
}
