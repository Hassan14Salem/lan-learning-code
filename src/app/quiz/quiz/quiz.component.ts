import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  
  lang:string='';
  questions : any[]=[];
  score:number= 0 ;
  flag:boolean=false;
  currentQuestionIndex :number= 0;
  shuffledAnswers:any[]=[];
  timeLeft: number = 60; 
timerInterval: any = null;

constructor(
  private _quizService:QuizService ,
  private _route:ActivatedRoute,
  private router: Router
){}

getQuestions()
{
  this._quizService.getAllQuestion(this.lang).subscribe({
    next: (Response) => {
      this.questions = Response;
    }
  })
}

startTimer() {
  this.timerInterval = setInterval(() => {
    if (this.timeLeft > 0) {
      this.timeLeft--; 
    } 
    else {
      clearInterval(this.timerInterval); 
      this.endQuiz(); 
    }
  }, 1000); 
}

endQuiz() {
  this.router.navigate(['/results'], { state: { score: this.score } });
  this.updateLocalStorage();

}

loadQuestion() {
  if (this.currentQuestionIndex < this.questions.length) {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    this.shuffledAnswers.push(currentQuestion.correct_answer);
    console.log(this.shuffledAnswers);
  } else {
    this.router.navigate(['/results'], { state: { score: this.score } });
    this.updateLocalStorage()

  }
}

updateLocalStorage()
{
  localStorage.setItem("score",JSON.stringify(this.score))
  localStorage.setItem("numOfQuestions",JSON.stringify(this.questions.length))
}




getScore(event:any)
{
  const liElement = event.target as HTMLElement
  const liText = liElement.textContent?.trim()


  if (liText == this.questions[this.currentQuestionIndex].answer) {
    liElement.classList.add("trueAnswer");
    liElement.classList.add("fa-beat");
 setTimeout(()=>{
  liElement.classList.remove("trueAnswer");
  liElement.classList.remove("fa-beat");

  this.flag = true;
  setTimeout(() => {
    this.currentQuestionIndex++;
    this.flag = false;
    this.loadQuestion();


    if (this.currentQuestionIndex === this.questions.length) {
      clearInterval(this.timerInterval); 
      this.endQuiz();

    }
  }, 500);
      

 },1000)


    this.score++;
  }
  else
  {
    liElement.classList.add("falseAnswer");
    liElement.classList.add("fa-beat");

    setTimeout(()=>{
      liElement.classList.remove("falseAnswer");
      liElement.classList.remove("fa-beat");
      this.flag = true;

        setTimeout(() => {
    this.currentQuestionIndex++;
    this.flag = false;
    this.loadQuestion();
    if (this.currentQuestionIndex === this.questions.length) {
      clearInterval(this.timerInterval); 
      this.endQuiz(); 
    }
  }, 500);

    },1000)
  }

 

  

}



ngOnInit(): void {
  this._route.paramMap.subscribe( params => {
    this.lang = params.get('lan') || '' ;
  })

  console.log(`language : ` + this.lang)
  this.getQuestions();
  this.startTimer(); 

}

resetQuiz() {
  this.score = 0;
  this.currentQuestionIndex = 0;
  this.timeLeft = 60; 
  this.shuffledAnswers = [];
  this.flag = false; 
  this.getQuestions();
  this.startTimer(); 
}

}
