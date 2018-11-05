import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: Http) { }

  loginBtn(form){
    return this.http.post('http://localhost:3000/user/login', form)
  }
  registerBtn(form){
    return this.http.post('http://localhost:3000/user/register', form)
  }
  //api categorie
  addCategorie(form){
    return this.http.post('http://localhost:3000/document/categorie', form)
  }
  getCategorie(){
    return this.http.get('http://localhost:3000/document/categorie')
  }
  deleteCategorie(id){
    return this.http.delete('http://localhost:3000/document/categorie/' + id)
  }
  editCategorie(id, categorie){
    return this.http.put('http://localhost:3000/document/categorie/' + id, categorie)
  }
  //api document
  addDocument(form){
    return this.http.post('http://localhost:3000/document/documents', form)
  }
  getDocument(){
    return this.http.get('http://localhost:3000/document/documents')
  }
  getDocumentById(id){
    return this.http.get('http://localhost:3000/document/documents/' + id)
  }
  deleteDocument(id){
    return this.http.delete('http://localhost:3000/document/documents/' + id)
  }
  editDocument(id, document){
    return this.http.put('http://localhost:3000/document/documents/' + id, document)
  }
  //api actualite
  addActualite(form){
    return this.http.post('http://localhost:3000/document/actualite', form)
  }
  getActualite(){
    return this.http.get('http://localhost:3000/document/actualite')
  }
  deleteActualite(id){
    return this.http.delete('http://localhost:3000/document/actualite/' + id)
  }
  editActualite(id, actualite){
    return this.http.put('http://localhost:3000/document/actualite/' + id, actualite)
  }
  //api users
  getUser(){
    return this.http.get('http://localhost:3000/user/users')
  }
  deleteUser(id){
    return this.http.delete('http://localhost:3000/user/users/'+id)
  }
  editUser(id, user){
    return this.http.put('http://localhost:3000/user/users/'+id, user)
  }
  //api commande
  postCommande(form){
    return this.http.post('http://localhost:3000/commande', form)
  }
  getCommande(){
    return this.http.get('http://localhost:3000/commande')
  }
  getCommandeById(id){
    return this.http.get('http://localhost:3000/commande/' + id)
  }
  deleteCommande(id){
    return this.http.delete('http://localhost:3000/commande/' + id)
  }
  //api contact
  postContact(form){
    return this.http.post('http://localhost:3000/contact', form)
  }
  getContact(){
    return this.http.get('http://localhost:3000/contact')
  }
  deleteContact(id){
    return this.http.delete('http://localhost:3000/contact/' + id)
  }
  editContact(id, contact){
    return this.http.put('http://localhost:3000/contact/' + id, contact)
  }

}
