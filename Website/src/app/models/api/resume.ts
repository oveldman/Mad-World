export interface IResume {
    name: String;
}

export class Resume implements IResume {
    public name: String;

    constructor() {
        this.name = "";
    }
}