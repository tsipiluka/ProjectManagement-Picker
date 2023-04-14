import { Component } from '@angular/core';
import { IQuestion, Question } from '../../entities/question';
import QuestionJson from './questions.json';
import { IAnswer, Answer, IAnswerObject } from 'src/app/entities/answer';

@Component({
  selector: 'app-question-block',
  templateUrl: './question-block.component.html',
  styleUrls: ['./question-block.component.css']
})
export class QuestionBlockComponent {

  questions: Question[] = [];
  
  constructor() {
    this.laodQuestions();
   }

   laodQuestions() {
    for (let i = 0; i < QuestionJson.length; i++) {
      var answers: IAnswer[] = []
      var weights: Map<number, number> = new Map<number, number>();
      if(QuestionJson[i].answers !== undefined){
        for (let j = 0; j < QuestionJson[i].answers!.length; j++) {
          for (let k = 0; k < 5; k++) {
            weights.set(k, QuestionJson[i].answers![j].weights![k])
          }
          answers.push(new Answer(QuestionJson[i].answers![j].answer, QuestionJson[i].answers![j].info, weights))
        }
        this.questions.push(new Question(QuestionJson[i].id!, QuestionJson[i].question!, QuestionJson[i].questiontype!, answers));
        console.log(this.questions[i])
      }
    }
   }
}
