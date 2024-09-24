import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit , OnDestroy{
score : number = 0 ; 
numberOfQuestion :number = 0;
ngOnInit(): void {
  this.score = JSON.parse(localStorage.getItem("score")!);
  this.numberOfQuestion = JSON.parse(localStorage.getItem("numOfQuestions")!);

  console.log('score ' + this.score )
  console.log('numberOfQuestion ' + this.numberOfQuestion )

}

ngOnDestroy(): void {
  localStorage.setItem("score",JSON.stringify(0))
  localStorage.setItem("numOfQuestions",JSON.stringify(0))


}
}
