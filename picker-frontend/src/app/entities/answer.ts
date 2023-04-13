export interface IAnswerObject {
    AnswerObject: Map<number, number>
}

export interface IAnswer {
    name: string,
    weights: IAnswerObject[]
}

export class Answer implements IAnswer {
    constructor(
        public name: string,
        public weights: IAnswerObject[]
    ) { }
}