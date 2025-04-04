import { DatePipe } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-exercise-stop-watch',
  imports: [DatePipe],
  templateUrl: './exercise-stop-watch.component.html',
  styleUrl: './exercise-stop-watch.component.css',
})
export class ExerciseStopWatchComponent implements OnDestroy {
  elapsedTime = 0;
  isRunning = false;
  timerId: any;
  logs: {date: Date, elapsedTime: number}[] = []


  ngOnDestroy(): void {
    if (this.timerId) {
      clearInterval(this.timerId)
    }
    console.log("Component destroyed");
    
  }

  startStopwatchHandler() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.timerId = setInterval(() => {
        console.log('Elapsed time:', this.elapsedTime / 1000);
        this.elapsedTime += 1000;
      }, 1000);
    }
  }

  stopStopwatchHandler() {
    if (this.isRunning) {
      this.isRunning = false;
      clearInterval(this.timerId);
      this.timerId = null;
      let date = new Date()
      this.logs.push({date: date , elapsedTime: this.elapsedTime})
      console.log(this.logs);
      this.elapsedTime = 0
    }
  }
}
