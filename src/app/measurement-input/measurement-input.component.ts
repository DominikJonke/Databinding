import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-measurement-input',
  templateUrl: './measurement-input.component.html',
  styleUrls: ['./measurement-input.component.css']
})
export class MeasurementInputComponent implements OnInit {
  
  @Input() value: number;
  @Input() unit: string;
  @Input() units = ['°C', '%', 'ppm'];

  @Output() valueChange = new EventEmitter<number>();
  @Output() unitChange = new EventEmitter<string>();
  @Output() unitsChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onValueChanged() {
    this.valueChange.emit(this.value);
  }

  onUnitChanged() {
    this.unitChange.emit(this.unit);
  }
}