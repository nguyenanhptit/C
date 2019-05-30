import {Component, OnInit} from '@angular/core';
import {IDictionaryService, IWord} from '../dictionary.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {

  word: IWord;

  constructor(private dictionaryService: IDictionaryService) {
  }

  search(word: string) {
    const result = this.dictionaryService.search(word);
    this.word = {
      key: word,
      meaning: result
    };
  }

  ngOnInit() {
  }

}
