import { Component, OnInit } from '@angular/core';
import { HourService } from '../hour.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  currentHour: string;
  currentDate: Date;

  constructor(private hourService: HourService) {
    this.currentHour = this.hourService.currentHour;
    this.currentDate = this.hourService.currentDate;
  }

  ngOnInit(): void {
    console.log("heure a afficher ici", this.currentHour); 
    console.log(this.currentDate.getHours())
  }

}
