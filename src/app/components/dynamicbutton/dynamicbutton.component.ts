import { Component, Input, OnInit } from '@angular/core';
import { Dynamicarray } from './dynamicarray';

@Component({
  selector: 'app-dynamicbutton',
  templateUrl: './dynamicbutton.component.html',
  styleUrls: ['./dynamicbutton.component.css']
})
export class DynamicbuttonComponent implements OnInit {

dynamicbuttons: Dynamicarray[]=[

  {
    name:'List',
    icon:'info',
    path:'list',
    order:1
  },

  {
    name:'Delete',
    icon:'delete',
    path:'delete',
    order:2
  },
];  


@Input() baseUrl;




  constructor() { }

  ngOnInit(): void {
  }


}
