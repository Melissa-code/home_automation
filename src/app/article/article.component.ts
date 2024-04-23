import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})

export class ArticleComponent implements OnInit {

  roomsList: { [key: string]: boolean } = {
    "Salle à manger": false, 
    "Salle de bain": false, 
    "Garage": false, 
    "PAC": false, 
    "Buanderie": false, 
    "Piscine": false
  };

  roomsListNumber: number = Object.keys(this.roomsList).length;
  btnForce: string = "btn btn-primary"; 
  roomStatus: boolean[] = Array(this.roomsList.length).fill(false);
  statusRoom: boolean = false; 
  iconActive: boolean = false; 
  
  constructor() {
    // Définir une vérification initiale au chargement du composant
    this.checkTimeAndTurnOffLights();
  }

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
  
  /**
   * Change the color of the icons of the rooms : green or red
   */
  toggleColor(room: string) {
    if (!(room === 'Piscine' && new Date().getHours() >= 23)) { // Ne pas allumer la piscine après 23h
      this.roomsList[room] = !this.roomsList[room];
    }
  }

  
  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
