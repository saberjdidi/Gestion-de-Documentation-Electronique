import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  addForm : FormGroup;
  categorie = {};
  document = {};
  updateDocument = null;
  constructor(private apiService:ApiService, private router:Router) { }

  ngOnInit() {

    this.addForm = new FormGroup({
      titre : new FormControl('', [Validators.required]),
      contenu : new FormControl('', [Validators.required]),
      date : new FormControl(''),
      categorie : new FormControl(''),
    });

    this.apiService.getCategorie().subscribe(res => {
      this.categorie = res.json();
      console.log(res.json());
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

  deleteBtn(id){
    if(confirm('Are you sure to delete this document !') == true){
      this.apiService.deleteDocument(id).subscribe(res => {
        this.ngOnInit();
      });
    }
  }
  updatedocumentBtn(){
    this.apiService.editDocument(this.updateDocument._id, this.updateDocument).subscribe(res => {
      this.updateDocument = null;
      this.ngOnInit();
    });
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/dashboard')
  }

}
