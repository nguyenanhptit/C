import {Component, OnInit} from '@angular/core';
import {IDictionaryService, IWord} from '../service/dictionary.service';
import {IAuthService} from '../service/auth.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {

  word: IWord;

  constructor(private dictionaryService: IDictionaryService,
              public authService: IAuthService) {
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
