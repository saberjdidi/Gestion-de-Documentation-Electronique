import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-commande-admin',
  templateUrl: './commande-admin.component.html',
  styleUrls: ['./commande-admin.component.css']
})
export class CommandeAdminComponent implements OnInit {
  commande = {};
  user = {};
  document = {};

  constructor(private router:Router, private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getCommande().subscribe(res => {
      this.commande = res.json();
      console.log(res.json());
    });

    this.apiService.getUser().subscribe(res => {
      this.user = res.json();
      console.log(res.json());
    });

    this.apiService.getDocument().subscribe(res => {
      this.document = res.json();
      console.log(res.json());
    });
  }

  deleteCommande(id){
    if(confirm('Delete Commande ?') == true){
      this.apiService.deleteCommande(id).subscribe(res => {
        this.ngOnInit();
      });
    }
  }

}
