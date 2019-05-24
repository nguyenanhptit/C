import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-font-editor',
  templateUrl: './font-editor.component.html',
  styleUrls: ['./font-editor.component.css']
})
export class FontEditorComponent implements OnInit {
  fontSize = 23;

  constructor() {
  }

  onChange(value) {
    this.fontSize = value;
  }

  ngOnInit() {
  }

}
