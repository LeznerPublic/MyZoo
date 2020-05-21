import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormControl,
  AbstractControl,
  ValidatorFn
} from '@angular/forms';

@Component({
  selector: 'app-new-animal',
  templateUrl: './new-animal.component.html',
  styleUrls: ['./new-animal.component.css']
})
export class NewAnimalComponent implements OnInit {

  constructor() { }

  registerForm:any;
  resultMsg:string;

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
