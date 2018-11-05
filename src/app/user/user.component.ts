import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  addForm : FormGroup;
  users = {};
  updateUser = null;
  constructor(private router:Router, private apiService:ApiService, private toastr: ToastrService) { }

  ngOnInit() {
    this.addForm = new FormGroup({
      nom : new FormControl('', [Validators.required]),
      prenom : new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.email, Validators.required]),
      password : new FormControl('', [Validators.required])
    });

    this.apiService.getUser().subscribe(res => {
      this.users = res.json();
      console.log();
    });
  }
  userBtn(){
    if(this.addForm.valid){
      this.apiService.registerBtn(this.addForm.value).subscribe(res => {
        console.log(res.json());
        this.toastr.success('utilisateur ajouté!', 'Toastr fun!');
        this.ngOnInit();
      });
    }
  }
  deleteUser(id){
    if(confirm('Delete User') == true){
      this.apiService.deleteUser(id).subscribe(res => {
        this.toastr.warning('user supprimé', 'Alert!');
        this.ngOnInit();
      });
    }
  }
  updateUserBtn(){
    this.apiService.editUser(this.updateUser._id, this.updateUser).subscribe(res => {
      this.updateUser = null;
      this.toastr.info('user modifié !');
      this.ngOnInit()
    });
  }

}
