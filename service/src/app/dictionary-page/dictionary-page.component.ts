import {Component, OnInit} from '@angular/core';
import {DictionaryService, IDictionaryService, IWord} from '../service/dictionary.service';
import {IAuthService} from '../service/auth.service';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.scss']
})
export class DictionaryPageComponent implements OnInit {

  listWord: IWord[] = [];

  constructor(private dictionaryService: IDictionaryService,
              public authService: IAuthService) {
  }

  ngOnInit() {
    this.listWord = this.dictionaryService.getAll();
  }

}
