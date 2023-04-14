export interface IProjectMethod {
    id: number,
    project_name: string,
    value: number,
}

export class ProjectMethod implements IProjectMethod {
    constructor(
        public id: number,
        public project_name: string,
        public value: number
    ) { }
}