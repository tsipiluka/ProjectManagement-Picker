import { Component } from '@angular/core';
import { IQuestion, Question } from '../../entities/question';
import QuestionJson from './questions.json';
import { IAnswer, Answer, IAnswerObject } from 'src/app/entities/answer';
import { ProjectMethod } from 'src/app/entities/projectMethod';

@Component({
  selector: 'app-question-block',
  templateUrl: './question-block.component.html',
  styleUrls: ['./question-block.component.css']
})
export class QuestionBlockComponent {

  questions: Question[] = [];
  projectMethods: ProjectMethod[] = [];
  projectMethodNames: string[] = ["Waterfall", "V-Model", "Spiral Model", "Kanban", "Scrum"];
  
  constructor() {
    this.initializeProjectMethods();
    this.laodQuestions();
   }

  initializeProjectMethods() {
    for (let i = 0; i < this.projectMethodNames.length; i++) {
      this.projectMethods.push(new ProjectMethod(i, this.projectMethodNames[i], 0));
    }
  }

  laodQuestions() {
    for (let i = 0; i < QuestionJson.length; i++) {
      var answers: IAnswer[] = []
      var weights: Map<number, number> = new Map<number, number>();
      if(QuestionJson[i].answers !== undefined){
        for (let j = 0; j < QuestionJson[i].answers!.length; j++) {
          for (let k = 0; k < this.projectMethodNames.length; k++) {
            weights.set(k, QuestionJson[i].answers![j].weights![k])
          }
          answers.push(new Answer(QuestionJson[i].answers![j].answer, QuestionJson[i].answers![j].info, weights))
        }
        this.questions.push(new Question(QuestionJson[i].id!, QuestionJson[i].question!, QuestionJson[i].questiontype!, answers));
        console.log(this.questions[i])
      }
    }
  }
     
  updateProjectMethods(weights: Map<number, number>) {
    for (let i = 0; i < this.projectMethods.length; i++) {
      this.projectMethods[i].value += weights.get(i)!;
    }
  }
}
