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
  logs: string[] = [];

    // Stock the state of the btn 
    forceStates: { [key: string]: boolean } = {};

  currentHour: number;

  constructor(private hourService: HourService) {

    this.initializeForceStates()
    setInterval(() => {
      this.currentHour = parseInt(this.hourService.currentHour.split(':')[0],10);
      this.applyTimeBasedRules();
    }, 1000); 
  }
  initializeForceStates() {
    Object.keys(this.roomsList).forEach(room => {
      this.forceStates[room] = false;
    });
  }

  private applyTimeBasedRules() {
    const currentHour = this.currentHour;

    // Automatic rules based on time
    if (currentHour >= 23 && this.forceStates['Piscine']){
      this.forceStates['Piscine'] = false;
      this.addLogs("Piscine");
    }
    
    
    if ((currentHour >= 23 || currentHour < 7) && this.forceStates['PAC']){
      this.forceStates['PAC'] = false;
      this.addLogs('PAC');

    } else if((currentHour < 23 && currentHour >= 7) && !this.forceStates['PAC']) {
      this.forceStates['PAC'] = true;
      this.addLogs('PAC');
    }


    if (currentHour === 7 && !this.forceStates['Garage']) {
      this.forceStates['Garage'] = true;
      this.addLogs("Garage");
    
    } else if (currentHour == 9 && this.forceStates['Garage']){
      this.forceStates['Garage'] = false;
      this.addLogs("Garage");
    }
  }

  toggleColor(room: string) {
    this.forceStates[room] = !this.forceStates[room];  // Toggle the button state
    this.roomsList[room] = this.forceStates[room] ? this.Disponible : this.Indisponible;  // Update room availability based on the button state

    this.addLogs(room);
    
  }
  
  addLogs(room: string){
    const message: string = this.hourService.currentHour + " - " + room + (!this.forceStates[room] ? " éteint(e) " : " allumé(e) ");
    if (this.logs.indexOf(message) < 0){
      this.logs.unshift(this.hourService.currentHour + " - " + room + (!this.forceStates[room] ? " éteint(e) " : " allumé(e) "));
    }
  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}