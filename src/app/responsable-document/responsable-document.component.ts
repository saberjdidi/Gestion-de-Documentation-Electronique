import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-responsable-document',
  templateUrl: './responsable-document.component.html',
  styleUrls: ['./responsable-document.component.css']
})
export class ResponsableDocumentComponent implements OnInit {
  addForm : FormGroup;
  categorie = {};
  document = {};

  constructor(private router:Router, private apiService:ApiService) { }

  ngOnInit() {
    this.addForm = new FormGroup({
      titre : new FormControl('', [Validators.required]),
      contenu : new FormControl('', [Validators.required]),
      date : new FormControl(''),
      categorie : new FormControl(''),
    });

    this.apiService.getCategorie().subscribe(res => {
      this.categorie = res.json()
    });
    this.apiService.getDocument().subscribe(res => {
      this.document = res.json();
      console.log(res.json());
    });
  }

  documentBtn(){
    if(this.addForm.valid){
      this.apiService.addDocument(this.addForm.value).subscribe(res => {
        console.log(res.json());
        this.ngOnInit();
      });
    }
  }

}
