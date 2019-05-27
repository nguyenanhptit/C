import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  private intervalID = 8;
  message = '';
  remainingTime: number;

  @Input() second = 10;

  constructor() {
  }

  clearTime() {
    clearInterval(this.intervalID);
  }

  ngOnInit() {
    this.reset();
    this.start();
  }

  ngOnDestroy() {
    this.clearTime();
  }

  start() {
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.second;
    }
  }

  reset() {
    this.clearTime();
    this.remainingTime = this.second;
    this.message = 'click start button to start the countdown';
  }

  stop() {
    this.clearTime();
    this.message = `holding at ${this.remainingTime} second`;
  }

  private countDown() {
    this.clearTime();
    this.intervalID = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.message = 'blast off';
        this.clearTime();
      } else {
        this.message = `${this.remainingTime} second and counting`;
      }
    }, 1000);
  }


}
