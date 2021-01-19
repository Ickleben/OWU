import {Component, Input, OnInit} from '@angular/core';
import {Cars} from '../../data/data';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
@Input()
cars: any[] = Cars;
  constructor() { }

  ngOnInit(): void {
  }

}
