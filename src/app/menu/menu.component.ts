import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
   
  home = '#home';
  news = "#news";
  contact ="#contact";
  about="#about";
  
  constructor() { }
  
  ngOnInit() {
  }

}
