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

  constructor(private hourService: HourService) {
    this.applyTimeBasedRules();
    setInterval(() => this.applyTimeBasedRules(), 60000); // Check rules every minute
  }
  initializeForceStates() {
    Object.keys(this.roomsList).forEach(room => {
      this.forceStates[room] = (room === "Piscine" || room === "PAC"); // Initially true only for Piscine & PAC
    });
  }

  private applyTimeBasedRules() {
    const currentHour = new Date().getHours();  // Directly using Date object here

    // Automatic rules based on time
    this.roomsList['Piscine'] = currentHour >= 23 ? this.Indisponible : this.Disponible;
    this.roomsList['PAC'] = (currentHour >= 23 || currentHour < 7) ? this.Indisponible : this.Disponible;
    if (currentHour === 7 && this.roomsList['Garage'] !== this.Disponible) {
      this.roomsList['Garage'] = this.Disponible;
      setTimeout(() => this.roomsList['Garage'] = this.Indisponible, 2 * 60 * 60 * 1000);
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