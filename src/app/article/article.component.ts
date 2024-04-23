import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})

export class ArticleComponent {

  roomsList: string[] = ["Salle à manger", "Salle de bain", "Garage", "PAC", "Buanderie", "Piscine"]; 
  roomsListNumber: number = this.roomsList.length;  
  btnForce: string = "btn btn-primary"; 
  roomStatus: boolean[] = Array(this.roomsList.length).fill(false);
  statusRoom: boolean = false; 
  iconActive: boolean = false; 

  /**
   * Light up the icons of the rooms 
   */
  // lightUp(index: number) {
  //   console.log(this.roomStatus[index]);
  //   this.roomStatus[index] = false; 
  // }
  toggleColor(index: number) {
    this.iconActive = !this.iconActive; // Inverser l'état de l'icône
  }

  /**
  * Force to change the status
  */
  toggleIconColor() {
    this.iconActive = !this.iconActive; // Inverser l'état de l'icône
  }
}
