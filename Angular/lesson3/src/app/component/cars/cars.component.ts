import { Component, OnInit } from '@angular/core';
import {Cars} from '../../data/data';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars = Cars;
  constructor() { }

  ngOnInit(): void {
  }

}
