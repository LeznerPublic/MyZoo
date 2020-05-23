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
import { ZooDataService } from '../services/zoo-data.service';
import { Animal } from '../interfaces/animal';
import { KeyValuePair } from '../interfaces/key-value-pair';

@Component({
  selector: 'app-new-animal',
  templateUrl: './new-animal.component.html',
  styleUrls: ['./new-animal.component.css']
})
export class NewAnimalComponent implements OnInit {

  animalTypes:KeyValuePair[];

  constructor(private fb: FormBuilder,private service: ZooDataService) { 
    this.service.getAnimalTypes().subscribe(res=>{
      console.log(res);
      this.animalTypes = <KeyValuePair[]>res;
    });
  }

  public addAnimalForm: FormGroup;
  resultMsg:string;

  ngOnInit(): void {
    this.addAnimalForm = this.fb.group({
      name:new FormControl('', Validators.required),
      type:new FormControl('', Validators.required),
      description:new FormControl('', Validators.required),
      age:new FormControl('', Validators.required),
      gender:new FormControl('', Validators.required),
    });
  }

  onSubmit(){
    debugger;
    var request:Animal = {
      id:0,
      name:this.addAnimalForm.get('name').value,
      type:this.addAnimalForm.get('type').value,     
      description:this.addAnimalForm.get('description').value,
      gender:this.addAnimalForm.get('gender').value,
      age:+this.addAnimalForm.get('age').value,
    };

    this.service.addAnimal(request).subscribe(res=>{
      console.log(res);
      
    });
  }

}
