import { Component, OnInit, Inject } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ZooDataService } from '../services/zoo-data.service';
import { Router } from '@angular/router';
import { Animal } from '../interfaces/animal';

export let _settings = {
  //hideSubHeader: true,
  columns: {
    id: {
      title: 'Id',
      editable: false,
      filter: true
    },
    name: {
      title: 'Name',
      filter: true
    },
    type: {
      title: 'Type',
      editable: false,
      filter: true
    },
    description: {
      title: 'Description',
      filter: true
    },
    age: {
      title: 'Age',
      filter: false
    },
    gender: {
      title: 'Gender',
      editable: false,
      filter: false
    },
  },
  edit: {
    editButtonContent: '<i class="material-icons">edit</i>',
    saveButtonContent: '<i class="material-icons">save</i>',
    cancelButtonContent: '<i class="material-icons">cancel</i>',
    confirmSave:true,
  },
  delete: {
    deleteButtonContent: '<i class="material-icons">delete</i>',
    saveButtonContent: '<i class="material-icons">save</i>',
    cancelButtonContent: '<i class="material-icons">cancel</i>',
    confirmDelete:true
  },

  actions: {
    add: false,
    // delete: true,
    // edit:true,
    position: 'right',
    columnTitle: '',
    width: '30%',
  },
};
export let _data = [];


@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {


 

  source: LocalDataSource;
  settings = _settings;
  animals: Animal[];

  constructor(private router: Router,private service: ZooDataService) { 
    this.source = new LocalDataSource(_data); 
    this.getAllAnimals();
  }

  ngOnInit() {
  }

  getAllAnimals() {
    this.service.getAllAnimals().subscribe(res => {
      console.log(res);
      var data = <Animal[]>res;
      this.source.load(data);
      
    },res => {
      console.log(res);
    });
  }

  onEdit(event) {
  }

  addAnimal(event){

  }

  onEditConfirm(event) {
    console.log(event);
    if (window.confirm('Are you sure you want to update?')) {
      this.updateAnimal(event.newData.id,event.newData.name,event.newData.description,event.newData.age);

      event.confirm.resolve(event.newData);
    } 
    else {
      event.confirm.reject();
    }
  }

  updateAnimal(id: number, name: string, description: string, age: number) {
    this.service.updateAnimal(id, name ,description,age).subscribe(res=>{
      console.log(res);
    },res => {console.error(res);
    });
  }

  onDeleteConfirm(event) {
    console.log(event);
    if (window.confirm('Are you sure you want to delete?')) {
      this.deleteAnimal(event.data.id);

      event.confirm.resolve();
    } 
    else {
      event.confirm.reject();
    }
  }

  deleteAnimal(id: number) {
    this.service.deleteAnimal(id).subscribe(res=>{
      console.log(res);
    },res => {console.error(res);
    });
  }

  onCustom(event) {
    switch(event.action){
      case "DoWork":
        // this.DoWork(event);
        break;
      default:
          break;
      }
  }



}
