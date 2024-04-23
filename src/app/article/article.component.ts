import { Component } from '@angular/core';
import { HourComponent } from '../hour/hour.component';
import { HourService } from '../hour.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})

export class ArticleComponent {

  readonly Disponible: number = 1;
  readonly Indisponible: number = 2;
  readonly Soucis: number = 3;

  roomsList: { [key: string]: number | boolean } = {
    "Salle à manger": this.Disponible, 
    "Salle de bain": this.Disponible,
    "Garage": this.Indisponible,
    "PAC": this.Disponible,
    "Buanderie": this.Disponible,
    "Piscine": this.Disponible
  };

  roomsListNumber: number = Object.keys(this.roomsList).length;
  btnForce: string = "btn btn-primary"; 
  roomStatus: boolean[] = Object.keys(this.roomsList).map(() => false);
  statusRoom: boolean = false; 
  iconActive: boolean = false; 

    // Stock the state of the btn 
    forceStates: { [key: string]: boolean } = {};

  currentHour: number;

  constructor(private hourService: HourService) {

    this.initializeForceStates()
    setInterval(() => {
      this.currentHour = parseInt(this.hourService.currentHour.split(':')[0],10);
      console.log(this.currentHour)
      this.applyTimeBasedRules();
      this.applyTimeBasedRules()
    }, 1000);
  }
  initializeForceStates() {
    Object.keys(this.roomsList).forEach(room => {
      this.forceStates[room] = (room === "" || room === ""); // Initially true only for Piscine & PAC
    });
  }

  private applyTimeBasedRules() {
    const currentHour = this.currentHour;  // Directly using Date object here

    // Automatic rules based on time
    if (currentHour >= 23){
      this.forceStates['Piscine'] = false;  
    }
    this.forceStates['PAC'] = (currentHour >= 23 || currentHour < 7) ? false : true;
    if (currentHour === 7 && this.forceStates['Garage'] !== true) {
      this.forceStates['Garage'] = true;
      // setTimeout(() => this.forceStates['Garage'] = false, 2 * 60 * 60 * 1000);
    } else if (currentHour == 9 && this.forceStates['Garage'] == true){
      this.forceStates['Garage'] = false;
    }
  }

  toggleColor(room: string) {
    this.forceStates[room] = !this.forceStates[room];  // Toggle the button state
    this.roomsList[room] = this.forceStates[room] ? this.Disponible : this.Indisponible;  // Update room availability based on the button state
  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}