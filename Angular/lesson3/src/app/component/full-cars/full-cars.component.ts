import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {log} from 'util';

@Component({
  selector: 'app-full-cars',
  templateUrl: './full-cars.component.html',
  styleUrls: ['./full-cars.component.css']
})
export class FullCarsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => console.log(value));
  }

  ngOnInit(): void {
  }

}
