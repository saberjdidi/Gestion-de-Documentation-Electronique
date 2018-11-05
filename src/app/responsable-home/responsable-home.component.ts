import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-responsable-home',
  templateUrl: './responsable-home.component.html',
  styleUrls: ['./responsable-home.component.css']
})
export class ResponsableHomeComponent implements OnInit {

  categorie = {};

  constructor(private router:Router, private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getCategorie().subscribe(res => {
      this.categorie = res.json()
    });
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/login')
  }

}
