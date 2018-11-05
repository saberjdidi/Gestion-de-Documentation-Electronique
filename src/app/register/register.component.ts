import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup;
  message = '';
  constructor(private apiService: ApiService, private router:Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      nom : new FormControl('', [Validators.required]),
      prenom : new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required]),

    });
  }
  addRegister(){
    if(this.registerForm.valid){
      this.message = '';
      this.apiService.registerBtn(this.registerForm.value).subscribe(res => {
        console.log(res.json());
        if(res.json()._id){
          this.router.navigateByUrl('/login')
        }
        this.message = res.json().message
      });
    }
  }

}
