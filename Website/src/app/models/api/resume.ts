export interface IResume {
    name: string;
}

export class Resume implements IResume {
    public name: string;

    constructor() {
        this.name = "";
    }
}