import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {RouterModule, Routes} from'@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import {HttpModule} from'@angular/http';
import {FormsModule, ReactiveFormsModule} from'@angular/forms';
import { CategorieComponent } from './categorie/categorie.component';
import { DocumentComponent } from './document/document.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { ContactComponent } from './contact/contact.component';
import { ResponsableHomeComponent } from './responsable-home/responsable-home.component';
import { ResponsableDocumentComponent } from './responsable-document/responsable-document.component';
import { ResponsableActualiteComponent } from './responsable-actualite/responsable-actualite.component';
import { UserComponent } from './user/user.component';

//toastr
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';
import { CommandeComponent } from './commande/commande.component';
import { CommandeAdminComponent } from './commande-admin/commande-admin.component';
import { AuthGuard } from './auth.guard';
import { RoleGuard } from './role.guard';
import { ListContactComponent } from './list-contact/list-contact.component';
import { ResponsableContactComponent } from './responsable-contact/responsable-contact.component';



const routes : Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'navbar', component : NavbarComponent},
  {path : 'dashboard', component : DashboardComponent, canActivate: [AuthGuard, RoleGuard], data: {roles: ['admin']}},
  {path : 'home', component : HomeComponent, canActivate: [AuthGuard, RoleGuard], data: {roles: ['user']}},
  {path : 'register', component : RegisterComponent},
  {path : 'categorie', component : CategorieComponent, canActivate: [AuthGuard]},
  {path : 'document', component : DocumentComponent, canActivate: [AuthGuard]},
  {path : 'actualite', component : ActualiteComponent, canActivate: [AuthGuard]},
  {path : 'contact', component : ContactComponent},
  {path : 'list-contact', component : ListContactComponent},
  {path : 'user', component : UserComponent, canActivate: [AuthGuard]},
  {path : 'responsable-home', component : ResponsableHomeComponent, canActivate: [AuthGuard, RoleGuard], data: {roles: ['responsable']}},
  {path : 'responsable-document', component : ResponsableDocumentComponent, canActivate: [AuthGuard]},
  {path : 'responsable-actualite', component : ResponsableActualiteComponent, canActivate: [AuthGuard]},
  {path : 'responsable-contact', component : ResponsableContactComponent, canActivate: [AuthGuard]},
  {path : 'document/:iddocument', component : CommandeComponent, canActivate: [AuthGuard]},
  {path : 'demande-document', component : CommandeAdminComponent, canActivate: [AuthGuard]},
  {path: '', pathMatch:'full', redirectTo:'login'}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    CategorieComponent,
    DocumentComponent,
    ActualiteComponent,
    ContactComponent,
    ResponsableHomeComponent,
    ResponsableDocumentComponent,
    ResponsableActualiteComponent,
    UserComponent,
    CommandeComponent,
    CommandeAdminComponent,
    ListContactComponent,
    ResponsableContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    //ngx-toastr
    CommonModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
