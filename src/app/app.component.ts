import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databinding';

  @Input() value = 0;
  @Input() unit: string;
  @Input() units = ['°C', '%', 'ppm'];

  @Output() valueChange = new EventEmitter<number>();
  @Output() unitChange = new EventEmitter<string>();
}
