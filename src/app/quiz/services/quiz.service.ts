import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }
  URL:string ='assets/db.json'

  getAllQuestion(lang: string): Observable<any> {
    return this.http.get<any>(this.URL).pipe(
      map((data) => data[lang])
    );
  
  
}
}

