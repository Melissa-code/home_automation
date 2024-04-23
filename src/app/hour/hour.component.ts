import { Component, OnInit } from '@angular/core';
import { HourService } from '../hour.service';

@Component({
  selector: 'app-hour',
  templateUrl: './hour.component.html',
  styleUrls: ['./hour.component.css']
})
export class HourComponent {
  currentHour: string;

  constructor(private hourService: HourService) {
    this.updateDisplay(); // Set initial time
    setInterval(() => {
      this.updateDisplay();
    }, 60000); // Updates every minute
  }

  private updateDisplay() {
    this.currentHour = this.hourService.currentHour;
  }

  addFortyMinutes() {
    this.hourService.addFortyMinutes();
    this.updateDisplay();
  }
}