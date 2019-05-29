import {Injectable, NgModule} from '@angular/core';

export interface IWord {
  key: string;
  meaning: string;
}

@Injectable({
  providedIn: 'root'
})

// @NgModule({
//   providers: [DictionaryService],
// })

export class DictionaryService {

  constructor() {
  }

  private words: IWord[] = [
    {key: 'service', meaning: 'dich vu'},
    {key: 'service provider', meaning: 'nha cung cap dich vu'},
    {key: 'provide', meaning: 'cung cap'},
    {key: 'efficient', meaning: 'hieu qua'},
    {key: 'snow', meaning: 'tuyet'}
  ];

  search(word: string): string {
    if (!word) {
      return '';
    }
    const w = this.words.find(item => item.key === word.toLocaleLowerCase());
    if (w) {
      return w.meaning;
    }
    return 'not found!!!';
  }

  getAll(): IWord[] {
    return this.words;
  }
}

// @NgModule({
//   providers: [DictionaryService],
// })
// export class AppModul {}
