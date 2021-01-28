import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name = new FormControl('', [Validators.required, Validators.minLength(3), ]);
  password = new FormControl('');
  myForm = new FormGroup({
    name: this.name,
    password: this.password
  });

  myFormochka(myForm: FormGroup): void {
    console.log(myForm);
    console.log(Validators);
    const res = this.dataService.loginUser(myForm.getRawValue());
    console.log(res);
  }
  constructor(private dataService: DataService) {
    console.log(this.myForm);
  }

  ngOnInit(): void {
  }
  // loginValidator(inputData: AbstractControl): any {
  //   if (inputData.value.name === 'admin' && inputData.value.password === '12345') {
  //     console.log(inputData);
  //     console.log('good');
  //   } else {
  //     console.log('error');
  //     // return {error: true, msg: 'wrong name or password'};
  //   }

}
