import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'component';
  countdownMsg = '';

  finishCountdown() {
    this.countdownMsg = 'finish !!!!!';
  }

  onRateChange($event: number) {
  console.log($event);
  }
}
