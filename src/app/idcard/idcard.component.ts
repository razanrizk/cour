import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idcard',
  templateUrl: './idcard.component.html',
  styleUrls: ['./idcard.component.css']
})
export class IDCardComponent implements OnInit {

  constructor() { }
  title = 'IDCard ';
  nom = 'Tarbouche ';
  prenom = 'Razan ';
  sex = 'Female ';
  age = 35;

  ngOnInit() {
  }
}
  
