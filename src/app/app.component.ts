import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
//import { HttpClient} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpService } from './http.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers :[HttpService],
  imports:[RouterOutlet,SidebarComponent,CommonModule , HttpClientModule]
})
export class AppComponent {
  
}
