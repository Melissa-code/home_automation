import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})

export class ArticleComponent {

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

  /**
   * Change the color of the icons of the rooms : green or red
   */
  toggleColor(room: string) {
    this.roomsList[room] = !this.roomsList[room];
  }
  
  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
