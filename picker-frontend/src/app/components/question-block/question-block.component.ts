import { Component } from '@angular/core';
import { IQuestion, Question } from '../../entities/question';
import QuestionJson from './questions.json';
import { IAnswer, Answer, IAnswerObject } from 'src/app/entities/answer';
import { ProjectMethod } from 'src/app/entities/projectMethod';
import { ConfirmationService } from 'primeng/api';

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
  questionCounter: number = 0;

  selectedAnswers: string[] = [];

  showResult: boolean = false;

  constructor(private confirmationService: ConfirmationService) {
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
      if(QuestionJson[i].answers !== undefined){
        for (let j = 0; j < QuestionJson[i].answers!.length; j++) {
          var weights: Map<number, number> = new Map<number, number>();
          for (let k = 0; k < this.projectMethodNames.length; k++) {
            weights.set(k, QuestionJson[i].answers![j].weights![k])
          }
          answers.push(new Answer(QuestionJson[i].answers![j].answer, QuestionJson[i].answers![j].checked, QuestionJson[i].answers![j].info, weights))
        }
        this.questions.push(new Question(QuestionJson[i].id!, QuestionJson[i].question!, QuestionJson[i].questiontype!, answers));
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

  getStatusOfAllProjectMethods() {
    for (let i = 0; i < this.projectMethods.length; i++) {
      console.log(this.projectMethods[i].project_name + ": " + this.projectMethods[i].value)
    }
  }

  getCurrentQuestion() {
    return this.questions[this.questionCounter];
  }

  sortProjectMethods() {
    this.projectMethods.sort((a, b) => (a.value > b.value) ? -1 : 1)
    this.getStatusOfAllProjectMethods();
  }

  nextQuestion() {
    for (let answer of this.getCurrentQuestion().answers ){
      if(answer.answer === this.selectedAnswers[0]){
        this.updateProjectMethods(answer.weights);
      }
    }
    if ( this.questionCounter+1 === 10){
      this.confirmationService.confirm({
        message: 'We already have enough data to give you a recommendation. Do you want to continue to have a better recommendation?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-circle',
        accept: () => {
          this.selectedAnswers.length = 0;
          this.questionCounter++;
        },
        reject: () => {
          this.sortProjectMethods()
          this.showResult = true;
          document.getElementById("p1")!.style.height = "100%";
          document.getElementById("p2")!.style.height = (100/this.projectMethods[0].value)*this.projectMethods[1].value + "%";
          document.getElementById("p3")!.style.height = (100/this.projectMethods[0].value)*this.projectMethods[2].value + "%";
          document.getElementById("p4")!.style.height = (100/this.projectMethods[0].value)*this.projectMethods[3].value + "%";
          document.getElementById("p5")!.style.height = (100/this.projectMethods[0].value)*this.projectMethods[4].value + "%";
        }
    });
    }else{
      if ( this.questionCounter+1 === 20){
        this.sortProjectMethods()
        this.showResult = true;
      }
      this.selectedAnswers.length = 0;
      this.questionCounter++;
    }
  }

  changeBoolState(selectedAnswer: IAnswer) {
    if(!(selectedAnswer.answer in this.selectedAnswers)){
      this.selectedAnswers.length = 0;
      this.selectedAnswers.push(selectedAnswer.answer);
    }
  }

}
