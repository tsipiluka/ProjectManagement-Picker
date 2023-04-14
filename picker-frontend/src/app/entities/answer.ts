export interface IAnswerObject {
    AnswerObject: Map<number, number>
}

export interface IAnswer {
    answer: string,
    info: string,
    weights: Map<number, number>
}

export class Answer implements IAnswer {
    constructor(
        public answer: string,
        public info: string,
        public weights: Map<number, number>
    ) { }
}