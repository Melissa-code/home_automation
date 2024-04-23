import { Component, OnInit } from '@angular/core';
import { HourService } from '../hour.service';

@Component({
  selector: 'app-hour',
  templateUrl: './hour.component.html',
  styleUrls: ['./hour.component.css']
})
export class HourComponent implements OnInit {
  currentHour: string;

  constructor(private hourService: HourService) {
    this.currentHour = this.hourService.currentHour;
  }

  ngOnInit(): void {
  }

  addFortyMinutes() {
    this.hourService.addFortyMinutes();
    this.currentHour = this.hourService.currentHour;
  }
}
