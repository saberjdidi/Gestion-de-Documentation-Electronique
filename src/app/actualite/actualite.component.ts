import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.css']
})
export class ActualiteComponent implements OnInit {

  addForm : FormGroup;
  actualite = {};
  updateActuality = null;

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
  deleteBtn(id){
    if(confirm('Delete actuality') == true){
      this.apiService.deleteActualite(id).subscribe(res => {
        this.ngOnInit();
      });
    }
  }
  updateActualityBtn(){
    this.apiService.editActualite(this.updateActuality._id, this.updateActuality).subscribe(res => {
      this.updateActuality = null;
      this.ngOnInit();
    });
  }

}
