import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  documentId = '';
  addForm : FormGroup;
  document = {};

  constructor(private router:Router, private apiService:ApiService, private route:ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.documentId = params.iddocument
    });
   }

  ngOnInit() {
    this.addForm = new FormGroup({
      nombre_doc : new FormControl('', [Validators.required])
    });
    this.apiService.getDocumentById(this.documentId).subscribe(res => {
      this.document = res.json();
      console.log(res.json());
    });
    
  }
  commandeBtn(){
    if(this.addForm.valid){
      const token = localStorage.getItem('token');
      const userId = jwt_decode(token).data._id
      const obj = {
        "nombre_doc" : this.addForm.value.nombre_doc,
        "titre_doc" : this.documentId,
        "user" : userId
      }
      this.apiService.postCommande(obj).subscribe(res => {
        console.log(res.json());
        this.ngOnInit();
      })
    }
  }

}
