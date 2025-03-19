import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpService } from '../http.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink ,CommonModule, HttpClientModule ],
  providers:[HttpService] , 
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

   data: any = [];
  
    constructor(private httpService: HttpService) {}
  
    ngOnInit(): void {
      this.fetchData();
    }
  
    fetchData() {
      this.httpService.getData().subscribe(
        (response) => {
          this.data = response;
          console.log("Hiiiii ")
          console.log('Data received:', this.data);
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
    }
}
