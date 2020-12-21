import { ReferenceItem } from "./reference-item";
import {positiveInteger} from "../decorators";


export default class Encyclopedia extends ReferenceItem {
    private _copies: number;

    @positiveInteger
    get copies(): number {
        return this._copies;
    }

    set copies(value: number) {
        this._copies = value;
    }

    constructor(
        public edition: number,
        id: number,
        title: string,
        year: number
    ) {
        super(id, title, year);
    }

    printItem() {
        super.printItem();
        console.log(`Edition: ${this.edition} ${this.year}`)
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`)
    }

}
