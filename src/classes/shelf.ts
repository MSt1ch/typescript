import {Book, Magazine, ShelfItem} from "../interfaces";

export default class Shelf<T extends ShelfItem> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getFirst(): T {
        return this.items[0];
    }

    find(title: string): T {
        return this.items.find(item => item.title === title);
    }

    printTitles(): void {
        this.items.forEach(item => console.log(item.title))
    }
}

// type BookOrMagazine = Book | Magazine
//
// export class Shelf2 {
//     private items: BookOrMagazine[] = [];
//
//     add(item: BookOrMagazine): void {
//         this.items.push(item);
//     }
//
//     getFirst(): BookOrMagazine {
//         return this.items[0];
//     }
// }