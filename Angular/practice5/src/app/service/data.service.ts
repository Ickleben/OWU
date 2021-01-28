import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IData} from '../model/IData';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: IData[] = [
    {name: 'admin', password: '12345'},
    {name: 'petya', password: '12345'},
    {name: 'kolya', password: '12345'},
    {name: 'olya', password: '12345'},
    {name: 'max', password: '12345'},
    {name: 'anya', password: '12345'},
    {name: 'oleg', password: '12345'},
    {name: 'andrey', password: '12345'},
    {name: 'masha', password: '12345'},
    {name: 'olya', password: '12345'},
    {name: 'max', password: '12345'}
  ];

  constructor() {
  }

  loginUser(user: IData): boolean {
    return !!this.data.filter(value => JSON.stringify(value) === JSON.stringify(user)).length;
  }
}
