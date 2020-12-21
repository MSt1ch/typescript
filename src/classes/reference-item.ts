import { timeout } from "../decorators";

export abstract class ReferenceItem {
    // title: string;
    // private year: number;
    //
    // constructor(newTitle: string, newYear: number) {
    //     console.log(`Creating a new ReferenceItem...`);
    //     this.title = newTitle;
    //     this.year = newYear;
    // }

    private _publisher: string;
    #id: number;

    static department: string = 'Classical Literature';

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    constructor(
        id: number,
        public title: string,
        public year: number
    ) {
        console.log(`Creating a new ReferenceItem...`);
        this.#id = id;
    }

    getID(): number {
        return this.#id
    }

    @timeout(2000)
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`)
        console.log(`Department: ${ReferenceItem.department}`);
    }

    abstract printCitation(): void;
}
