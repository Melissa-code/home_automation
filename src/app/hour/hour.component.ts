import { Component } from '@angular/core';

@Component({
  selector: 'app-hour',
  templateUrl: './hour.component.html',
  styleUrl: './hour.component.css'
})

export class HourComponent {
  currentDate: Date;
  currentHour: string; 

  constructor() {
    this.currentDate = new Date();
    this.currentHour = `${this.currentDate.getHours()}:${this.currentDate.getMinutes()}`; 
  }

  /**
   * Add 30 minutes to current hour 
   */
  addFortyMinutes() {
    console.log(this.currentHour);
    // convert hours in minutes and cast string to number
    let currentHourInMinutes: number = parseInt(this.currentHour.split(':')[0]) * 60 + parseInt(this.currentHour.split(':')[1]);
    let newHourInMinutes: number = currentHourInMinutes + 30;
    newHourInMinutes = newHourInMinutes % (24 * 60);
    let newHours: number = Math.floor(newHourInMinutes / 60);
    let newMinutes: number = newHourInMinutes % 60; 
    let paddedMinutes: string = newMinutes.toString().padStart(2, '0');
    this.currentHour = `${newHours}:${paddedMinutes}`;
    console.log('heure plus 30min',this.currentHour);
  }
}
