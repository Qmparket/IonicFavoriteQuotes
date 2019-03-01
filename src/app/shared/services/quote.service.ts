import { Injectable } from '@angular/core';
import { Quote } from '../../data/quote.interface';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor() { }

  chosenQuotes: Quote[];

  quotes: {category: string, quotes: Quote[], icon: string}[] = [
    {
      category: 'inspirational',
      quotes: [
        {
          id: '1',
          person: 'Theodore Roosevelt',
          text: 'Believe you can and you\'re halfway there',
          favorite: false
        },
        {
          id: '2',
          person: 'Norman Vincent Peale',
          text: 'Change your thoughts and you change your world.',
          favorite: false
        },
        {
          id: '3',
          person: 'Robert H. Schuller',
          text: 'What great thing would you attempt if you knew you could not fail?',
          favorite: false
        }
      ],
      icon: 'brush'
    },
    {
      category: 'ability',
      quotes: [
        {
          id: '4',
          person: 'John Wooden',
          text: 'Ability may get you to the top, but it takes character to keep you there.',
          favorite: false
        },
        {
          id: '5',
          person: 'Robert Frost',
          text: 'Education is the ability to listen to almost anything without losing your temper.',
          favorite: false
        }
      ],
      icon: 'bicycle'
    },
    {
      category: 'enthusiasm',
      quotes: [
        {
          id: '6',
          person: 'Benjamin Disraeli',
          text: 'Every product of genius must be the product of enthusiasm.',
          favorite: false
        },
        {
          id: '7',
          person: 'Norman Vincent Peale',
          text: 'Enthusiasm releases the drive to carry you over obstacles and adds significance to all you do.',
          favorite: false
        }
      ],
      icon: 'battery-charging'
    },
    {
      category: 'motivational',
      quotes: [
        {
          id: '8',
          person: 'Jim Rohn',
          text: 'Either you run the day or the day runs you.',
          favorite: false
        },
        {
          id: '9',
          person: 'Donna Brazile',
          text: 'I was motivated to be different in part because I was different.',
          favorite: false
        }
      ],
      icon: 'body'
    }
  ];
  private _favoriteQuotes = new BehaviorSubject<Quote[]>([]);
  favoriteQuotes = this._favoriteQuotes.asObservable();

  addFavorite(quote: Quote) {
    this._favoriteQuotes.next(this._favoriteQuotes.getValue().concat(quote));
  }
  removeFavorite(quote: Quote) {
    quote.favorite = false;
    const quoteArr = [...this._favoriteQuotes.getValue()];
    const index = quoteArr.indexOf(quote);
    quoteArr.splice(index, 1);
    this._favoriteQuotes.next(quoteArr);
  }
}
