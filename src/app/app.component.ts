import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'databinding';
  
  value = 0;
  unit: string;
  units = ['°C', '%', 'ppm'];
}
