import {Author, Book, Person} from "./interfaces";

type DamageLogger2 = (reason: string) => void;

export type BookProperties = keyof Book;

export type PesonBook = Person & Book;

export type BookRequiredFields = Required<Book>

export type UpdatedBook = Partial<Book>

export type AuthorWoEmail = Omit<Author, 'email'>

export type CreateCustomerFunctionType = (name: string, age: number, city?: string) => void;

export type BookOrUndefined = Book | undefined;
