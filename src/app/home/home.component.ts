import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categorie = {};
  document = {};
  userId = [];

  constructor(private router:Router, private apiService:ApiService) { }

  ngOnInit() {

    this.apiService.getCategorie().subscribe(res => {
      this.categorie = res.json();
    });

    this.apiService.getDocument().subscribe(res => {
      this.document = res.json();
    });

    const token = localStorage.getItem('token');
    const Data = jwt_decode(token).data;
    this.userId = Data;
  }

  logoutBtn(){
    localStorage.clear();
    this.router.navigateByUrl('/login')
  }

}
