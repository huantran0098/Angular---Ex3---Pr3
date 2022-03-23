import { Component, OnInit } from '@angular/core';
import {Pet} from '../pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pet: Pet = {
    name: 'huyen xau gai',
    image: 'https://vuipet.com/wp-content/uploads/2021/04/cho-ngao.jpg'
  };
  constructor() { }

  ngOnInit() {
  }

}
