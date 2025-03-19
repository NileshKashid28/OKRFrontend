import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [],
  providers : [HttpService , CommonModule] , 
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  data: any = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpService.getData().subscribe(
      (response) => {
        this.data = response;
        console.log('Data received:', this.data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

}
