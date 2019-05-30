import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DictionaryService, IDictionaryService, IWord} from '../service/dictionary.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.scss']
})
export class DictionaryDetailComponent implements OnInit {
  word: IWord;
  sub: Subscription;

  constructor(private activatedRoute: ActivatedRoute,
              private dictionaryService: IDictionaryService) {
  }

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // const {snapshot} = this.activatedRoute;
      const origin = paramMap.get('key');
      const result = this.dictionaryService.search(origin);
      this.word = {key: origin, meaning: result};
    });

  }

}
