import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  petName = 'ki';
  petImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Le%C3%AFko_au_bois_de_la_Cambre.jpg/505px-Le%C3%AFko_au_bois_de_la_Cambre.jpg';

  constructor() {
  }

  updateName(name) {
    this.petName = name;
  }

  updateImg(img) {
    this.petImg = img;
  }

  ngOnInit() {
  }

}
