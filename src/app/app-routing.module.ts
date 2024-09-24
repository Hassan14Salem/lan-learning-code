import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',loadChildren : () => import('./home/home.module').then( h => h.HomeModule),data: { animation: 'HomePage' }},
  {path:'quiz',loadChildren : () => import('./quiz/quiz.module').then( q => q.QuizModule),data: { animation: 'QuizPage' } },
  {path:'results',loadChildren : () => import('./results/results.module').then( r => r.ResultsModule),data: { animation: 'ResultsPage' } }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
