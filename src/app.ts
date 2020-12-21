import {Category} from "./enums";
import {getBookByCotegory, getBookByCotegoryPromise, logCategorySearch, logSearchResults} from "./functions";

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


// logFirstAvailable(getAllBooks());
// console.log(getAllBooks());
// const titles = getBookTitlesByCategory(Category.JavaScript);
// logBookTitles(titles);
// console.log(getBookAuthorByIndex(2));
// console.log(calcTotalPages());

// Task 03.01
// const myId: string = createCustomerId('Ann', 10);
// console.log(myId);
// let idGenerator: (name1: string, id1: number) => string;
// idGenerator = (name: string, id: number) => `${id}-${name}`;
// idGenerator = createCustomerId;
// console.log(idGenerator('a', 1))


// Task 03.02
// createCustomer('Anna', 20, 'Minsk');
// createCustomer('Anna', null, 'Minsk');
// console.log(getBookTitlesByCategory());
// logFirstAvailable();
// console.log(getBookById(1))
// console.log(checkoutBooks('Anna', 1, 2, 5));


// Task 03.03
// console.log(getTitles(1, true ));
// console.log(getTitles('Lea Verou' ));

// Task 03.04
// let result = bookTitleTransform('javaScript');
// console.log(result);
// result = bookTitleTransform(123);
// console.log(result);

// Task 04.01
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     markDamaged: (reason: string) => `Damaged: ${reason}`
// }
//
// printBook(myBook)
// console.log(myBook.markDamaged('missing back cover'))

// Task 04.02
// const logDamage: Logger = (reason: string) => `Damaged: ${reason}`;
// console.log(logDamage('missing back cover'));


// Task 04.03
// const favoriteAuthor: Author = {
//     email: 'ann@example.com',
//     name: 'Anna',
//     numBooksPublished: 3,
// };
//
// const favoriteLibrarian: Librarian = {
//     department: "By",
//     email: 'ann@example.com',
//     name: 'Anna',
//     assistCustomer: (constName: string) => console.log(constName),
// }
//
// console.log(favoriteAuthor);
// console.log(favoriteLibrarian);

// Task 04.04
// const offer: any = {};
// console.log(offer.magazine);
// console.log(offer.getTitle?.());

// Task 04.05
// console.log(getBookProp(getAllBooks()[0], 'title'));
// console.log(getBookProp(getAllBooks()[0], 'markDamaged'));
// console.log(getBookProp(getAllBooks()[0], 'isbn'));

// Task 05.01
// const ref: ReferenceItem = new ReferenceItem(1,"TypeScript", 2020);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'Random publisher';
// console.log(ref.publisher);
// console.log(ref.getID())

// Task 05.02
// const refBook = new RefBook(3, 1,"TypeScript", 2020);
// console.log(refBook);
// refBook.printItem();


// Task 05.03
// const refBook = new Encyclopedia(3, 1,"TypeScript", 2020);
// console.log(refBook);
// refBook.printCitation();


// Task 05.04
// const  favoriteLibrarian : Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris');


// Task 05.05
// const personBook: PesonBook = {
//     name: 'Anna',
//     email: 'anna@example.com',
//     author: 'Boris',
//     available: false,
//     category: Category.TypeScript,
//     id: 1,
//     title: 'Some Title',
//     markDamaged: null,
//     pages: 400,
// }
// console.log(personBook);


// Task 06.05
// const flag = true;
//
// if (flag) {
//     import('./classes')
//         .then(module => {
//             const reader = new module.Reader();
//             reader.name = 'Anna';
//             reader.take(getAllBooks()[0]);
//             console.log(reader);
//         })
// }

// Task 06.06
// let lib: Library = {
//     id: 1,
//     name: 'Anna',
//     address: 'Minsk'
// }
// console.log(lib);

// Task 07.01
// const inventory: Book[] = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];

// const result = purge(inventory);
// console.log(result);
// const res1 = purge([1, 2, 3]);
// console.log(res1);

// Task 07.02
// const bookShelf: Shelf<Book> = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);
//
// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];
// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst().title);
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// Task 07.04
// const obj: BookRequiredFields = {
//     id: 1,
//     author: 'Anna',
//     available: false,
//     category: Category.CSS,
//     markDamaged: null,
//     pages: 100,
//     title: 'New'
// }
//
// const updatedBook: UpdatedBook = {
//     id: 1,
//     title: 'Cool title'
// }
//
// const params: Parameters<CreateCustomerFunctionType> = ['Anna', 30];
// createCustomer(...params);

// Task 08.01, 08.02
// const obj = new UniversityLibrarian();
// console.log(obj);
// obj.name = 'Stan';
// // console.log(Object.getPrototypeOf(obj))
// obj['printLibrarian']();


// Task 08.03
// const obj = new UniversityLibrarian();
// obj.assistFaculty = null;
// obj.assistCommunity = null;
// console.log(obj);

// Task 08.04
// const encyclopetia = new RefBook(1, 3, 'no title', 2020);
// encyclopetia.printItem();

// Task 08.05, 08.06
// const o = new UniversityLibrarian();
// o.name = 'Anna';
// o.assistCustomer('Boris');
// console.log(o)

// Task 08.07
// const enc = new RefBook(1, 3, 'no title', 2020);
// enc.copies = 10;
// enc.copies = -4;


// Task 09.01, 09.02
// console.log('Begin');
// getBookByCotegory(Category.JavaScript, logCategorySearch);
// getBookByCotegory(Category.Software, logCategorySearch);
// getBookByCotegoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(titles);
//         return titles.length;
//     })
//     .then(console.log)
//     .catch(error => console.log(`Error ${error}`))
// getBookByCotegoryPromise(Category.Software)
//     .then(console.log)
//     .catch(error => console.log(`Error ${error}`))
// console.log('End');


// Task 09.01, 09.03
// console.log('Begin');
// logSearchResults(Category.JavaScript);
// logSearchResults(Category.Software)
//     .catch(console.log);
// console.log('End');
