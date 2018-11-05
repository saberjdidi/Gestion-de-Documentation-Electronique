import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  addForm : FormGroup;
  categorie = {};
  updateCategorie = null;

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.addForm = new FormGroup({
      titre : new FormControl('', [Validators.required]),
      description : new FormControl('')
    });

    this.apiService.getCategorie().subscribe(res => {
      this.categorie = res.json();
    });
  }
  categorieBtn(){
    if(this.addForm.valid){
      this.apiService.addCategorie(this.addForm.value).subscribe(res => {
        console.log(res.json());
        this.ngOnInit();
      });
    }
  }

  deleteBtn(id){
    if(confirm('Delete Categorie !') == true){
      this.apiService.deleteCategorie(id).subscribe(res => {
        console.log(res.json());
        this.ngOnInit();
      });
    }
  }

  editCategorieBtn(){
    this.apiService.editCategorie(this.updateCategorie._id, this.updateCategorie).subscribe(res => {
      console.log(res.json());
      this.updateCategorie = null;
      this.ngOnInit();
    });
  }

}
