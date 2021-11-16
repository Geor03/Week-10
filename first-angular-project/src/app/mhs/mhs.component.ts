import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mhs',
  templateUrl: './mhs.component.html',
  styleUrls: ['./mhs.component.css']
})
export class MhsComponent implements OnInit {
  nama;
  constructor() { 
    this.nama = ['Geo', 'marco', 'polo', 'star'];
  }

  ngOnInit(): void {
  }

}
