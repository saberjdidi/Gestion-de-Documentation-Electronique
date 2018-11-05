import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-responsable-actualite',
  templateUrl: './responsable-actualite.component.html',
  styleUrls: ['./responsable-actualite.component.css']
})
export class ResponsableActualiteComponent implements OnInit {

  addForm : FormGroup
  actualite = {};

  constructor(private router:Router, private apiService:ApiService) { }

  ngOnInit() {
    this.addForm = new FormGroup({
      titre : new FormControl(''),
      description : new FormControl('')
    });

    this.apiService.getActualite().subscribe(res => {
      this.actualite = res.json();
    });
  }

  actualiteBtn(){
    if(this.addForm.valid){
      this.apiService.addActualite(this.addForm.value).subscribe(res => {
        console.log(res.json());
        this.ngOnInit();
      });
    }
  }

}
