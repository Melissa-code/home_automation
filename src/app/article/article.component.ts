import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})

export class ArticleComponent implements OnInit {

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

  ngOnInit() {
    // Vérifier périodiquement (toutes les minutes)
    setInterval(() => {
      this.checkTimeAndTurnOffLights();
    }, 60000);
  }
  
  checkTimeAndTurnOffLights() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    if (currentHour >= 23) {
      this.roomsList['Piscine'] = false;  // Éteindre la lumière de la piscine après 23h
    }
  }
  
  // Stock the state of the btn 
  forceStates: { [key: string]: boolean } = {};

  /**
   * All the states are false (red) except piscine & PAC
   */
  constructor() {
    this.checkTimeAndTurnOffLights();
    Object.keys(this.roomsList).forEach(room => {
      if (room === "Piscine" || room === "PAC") {
        this.forceStates[room] = true; 
      } else {
        this.forceStates[room] = false; 
      }
    });
  }

  /**
   * Change the color of the status if the button is clicked
   * @param string room 
   */
  toggleColor(room: string) {
    if (!(room === 'Piscine' && new Date().getHours() >= 23)) { // Ne pas allumer la piscine après 23h
      this.roomsList[room] = !this.roomsList[room];
    }
    // Reverse the state of the btn 
    this.forceStates[room] = !this.forceStates[room];
    // Update the state of the room 
    this.roomsList[room] = this.forceStates[room] ? this.Disponible : this.Indisponible;
  }

  
  /**
   * Get all the rooms
   * @param obj 
   * @returns obj
   */
  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
