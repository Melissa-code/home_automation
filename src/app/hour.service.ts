import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HourService {
  currentDate: Date = new Date();
  currentHour: string = `${this.currentDate.getHours()}:${this.currentDate.getMinutes()}`;

  constructor() { }

  addFortyMinutes() {
    let currentHourInMinutes: number = parseInt(this.currentHour.split(':')[0]) * 60 + parseInt(this.currentHour.split(':')[1]);
    let newHourInMinutes: number = currentHourInMinutes + 30;
    newHourInMinutes = newHourInMinutes % (24 * 60);
    let newHours: number = Math.floor(newHourInMinutes / 60);
    let newMinutes: number = newHourInMinutes % 60; 
    let paddedMinutes: string = newMinutes.toString().padStart(2, '0');
    this.currentHour = `${newHours}:${paddedMinutes}`;
  }
}
