import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name="Details Page"

  loginForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[A-Za-z]*')]],
    address:['',[Validators.required,Validators.pattern('[A-Za-z]*')]],
    date:['',[Validators.required,Validators.pattern('[0-9]*')]],
    phone:['',[Validators.required,Validators.pattern('0-9*')]],
  })


  uname=" "
  address=""
  date=""
  admin=""
  manager=""
  HR=""
  engineer=""
  phone=""
  gender=""

  list:any[]=[]


  constructor(private routerhome:Router, private fb:FormBuilder) { }
  ngOnInit(): void {
  }
  submitClick(item:any){
 this.list.push({id:this.list.length,uname:item,address:item,date:item,admin:item,manager:item,HR:item,engineer:item})
 console.log(this.list);
 

  }}
