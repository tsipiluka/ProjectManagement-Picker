import { IAnswer } from "./answer";

export interface IQuestion {
    id: number,
    question: string,
    questiontype: string,
    answers: IAnswer[]
}

export class Question implements IQuestion {
    constructor(
        public id: number,
        public question: string,
        public questiontype: string,
        public answers: IAnswer[]
    ) { }
}