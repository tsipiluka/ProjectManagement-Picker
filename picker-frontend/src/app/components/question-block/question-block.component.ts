import { Component } from '@angular/core';
import { IQuestion, Question } from '../../entities/question';
import QuestionJson from './questions.json';
import RecommsJson from './recomms.json';
import { IAnswer, Answer } from 'src/app/entities/answer';
import { IProjectMethod, ProjectMethod } from 'src/app/entities/projectMethod';
import { ConfirmationService } from 'primeng/api';

export interface IColorizeAnswer {
  method: string;
  color: string;
}

export class ColorizeAnswer implements IColorizeAnswer {
  constructor(public method: string,public color: string) {}
}


@Component({
  selector: 'app-question-block',
  templateUrl: './question-block.component.html',
  styleUrls: ['./question-block.component.css'],
  providers: [ConfirmationService]
})
export class QuestionBlockComponent {

  questions: Question[] = [];
  projectMethods: ProjectMethod[] = [];
  projectMethodNames: string[] = ["Waterfall", "V-Model", "Spiral Model", "Kanban", "Scrum"];
  projectMethodPaths: string[] = ["waterfall", "v-model", "spiral-model", "kanban", "scrum"];
  questionCounter: number = 0; 

  selectedAnswers: string[] = [];

  showResult: boolean = false;

  constructor(private confirmationService: ConfirmationService) {
    this.initializeProjectMethods();
    this.laodQuestions();
   }

  initializeProjectMethods() {
    for (let i = 0; i < this.projectMethodNames.length; i++) {
      this.projectMethods.push(new ProjectMethod(i, this.projectMethodNames[i], 0, '', "https://project-picker.wh0cares.live/" +this.projectMethodPaths[i]));
    }
  }

  laodQuestions() {
    for (let i = 0; i < QuestionJson.length; i++) {
      var answers: IAnswer[] = []
      if(QuestionJson[i].answers !== undefined){
        for (let j = 0; j < QuestionJson[i].answers!.length; j++) {
          var weights: Map<number, number> = new Map<number, number>();
          for (let k = 0; k < this.projectMethodNames.length; k++) {
            weights.set(k, QuestionJson[i].answers![j].weights![k])
          }
          answers.push(new Answer(QuestionJson[i].answers![j].answer, QuestionJson[i].answers![j].checked, QuestionJson[i].answers![j].info, weights))
        }
        this.questions.push(new Question(QuestionJson[i].id!, QuestionJson[i].question!, QuestionJson[i].questiontype!, QuestionJson[i].relevance!,  answers));
      }
    }
  }
     
  getPercentageOfStage() {
    return (this.questionCounter) * 5;
  }

  updateProjectMethods(weights: Map<number, number>) {
    for (let i = 0; i < this.projectMethods.length; i++) {
      this.projectMethods[i].value += weights.get(i)!;
    }
  }

  getCurrentQuestion() {
    return this.questions[this.questionCounter];
  }

  sortProjectMethods() {
    this.projectMethods.sort((a, b) => (a.value > b.value) ? -1 : 1)
  }

  // getStatusOfAllProjectMethods() {
  //   for (let i = 0; i < this.projectMethods.length; i++) {
  //     console.log(this.projectMethods[i].project_name + ": " + this.projectMethods[i].value)
  //   }
  // }

  nextQuestion() {
    let counter = 0;
    for (let answer of this.getCurrentQuestion().answers ){
      if(answer.answer === this.selectedAnswers[0]){
        this.getCurrentQuestion().answers[counter].checked = true;
        this.updateProjectMethods(answer.weights);
      }
      counter++;
    }
    if ( this.questionCounter+1 === 20){
      this.sortProjectMethods()
      let largeValue = this.projectMethods[0].value
      this.projectMethods[0].rec = this.getCorrectRecommondation(this.projectMethods[0].id, 100);
      this.projectMethods[1].rec = this.getCorrectRecommondation(this.projectMethods[1].id, (100 / largeValue) * this.projectMethods[1].value);
      this.projectMethods[2].rec = this.getCorrectRecommondation(this.projectMethods[2].id, (100 / largeValue) * this.projectMethods[2].value);
      this.projectMethods[3].rec = this.getCorrectRecommondation(this.projectMethods[3].id, (100 / largeValue) * this.projectMethods[3].value);
      this.projectMethods[4].rec = this.getCorrectRecommondation(this.projectMethods[4].id, (100 / largeValue) * this.projectMethods[4].value);
      this.showResult = true;
    }
    this.selectedAnswers.length = 0;
    this.questionCounter++;
  }

  getCorrectRecommondation(projectId: number, proc: number) {
    if( proc > 89){
      return RecommsJson[projectId].rec
    }else if ( proc > 69 ){
      return RecommsJson[projectId].semiRec
    } else{
      return RecommsJson[projectId].noRec
    }   
  }

  changeBoolState(selectedAnswer: IAnswer) {
    if(!(selectedAnswer.answer in this.selectedAnswers)){
      this.selectedAnswers.length = 0;
      this.selectedAnswers.push(selectedAnswer.answer);
    }
  }

  getHighestProjectMethodOnGivenAnswer(answer: IAnswer, question: IQuestion) {
    let highestProjectMethod: IColorizeAnswer[] = []
    for (let i = 0; i < this.projectMethodNames.length; i++) {
      if(question.relevance === 1){
        highestProjectMethod.push(new ColorizeAnswer(this.projectMethodNames[i], this.setCorrectColor(answer.weights.get(i)!/ 2)!));
      }else{
        highestProjectMethod.push(new ColorizeAnswer(this.projectMethodNames[i], this.setCorrectColor(answer.weights.get(i)!)!));
      }
    }

    highestProjectMethod.sort((a, b) => {
      if (a.color === b.color) {
        return 0;
      } else if (a.color === 'success') {
        return -1;
      } else if (b.color === 'success') {
        return 1;
      } else if (a.color === 'warning') {
        return -1;
      } else if (b.color === 'warning') {
        return 1;
      } else {
        return -1;
      }
    });
    return highestProjectMethod;
  }

  setCorrectColor(num: number) {
    switch (num) {
      case 0:
        return "danger";
      case 1:
        return "danger";
      case 2:
        return "danger";
      case 3:
        return "warning";
      case 4:
        return "warning";
      case 5:
        return "success";
    }
    return "";
  }
}
