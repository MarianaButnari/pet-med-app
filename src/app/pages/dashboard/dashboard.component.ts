import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  localDate = new Date();


  constructor() {
  }

  ngOnInit(): void {
  }
}
