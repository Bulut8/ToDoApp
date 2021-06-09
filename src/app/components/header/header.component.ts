import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

@Input() menuState:boolean=false;
@Output() menuStateChanged = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  changeSlideMenu(menuState){
 this.menuState=!menuState;
 this.menuStateChanged.emit(this.menuState);

  }

}
