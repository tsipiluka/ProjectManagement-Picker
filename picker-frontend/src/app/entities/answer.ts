export interface IAnswer {
    answer: string,
    checked: boolean,
    info: string,
    weights: Map<number, number>
}

export class Answer implements IAnswer {
    constructor(
        public answer: string,
        public checked: boolean,
        public info: string,
        public weights: Map<number, number>
    ) { }
}