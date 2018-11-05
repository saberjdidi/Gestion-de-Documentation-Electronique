import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-responsable-contact',
  templateUrl: './responsable-contact.component.html',
  styleUrls: ['./responsable-contact.component.css']
})
export class ResponsableContactComponent implements OnInit {
  addForm : FormGroup;
  constructor(private router:Router, private apiService:ApiService) { }

  ngOnInit() {
    this.addForm = new FormGroup({
      nom : new FormControl(''),
      prenom : new FormControl(''),
      telephone : new FormControl(''),
      message : new FormControl(''),
      email : new FormControl('', [Validators.email, Validators.required]),
    });
  }

  contactBtn(){
    if(this.addForm.valid){
      this.apiService.postContact(this.addForm.value).subscribe(res => {
        console.log(res.json());
        this.ngOnInit()
      });
    }
  }

}
