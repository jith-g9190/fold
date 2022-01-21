import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  list:any[]=[]

item:any

uname=" "
  address=""
  date=""
  admin=""
  manager=""
  HR=""
  engineer=""
  phone=""
  gender=""

  constructor() { }

  ngOnInit(): void {
  }

}
