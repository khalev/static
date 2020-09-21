import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {Route, RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContactsComponent } from './contacts/contacts.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {ContactsServices} from './services/contacts.services';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { EditContactComponent } from './edit-contact/edit-contact.component';

 const appRoutes = [
   {path:"home",component:HomeComponent},
   {path:"contacts",component:ContactsComponent},
   {path:"new-contact",component:NewContactComponent},
   {path:"about",component:AboutComponent},
   {path:"",component:HomeComponent},
   {path:"edit-contact/:id",component:EditContactComponent},
   {path:"not-found",component:NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    NewContactComponent,
    AboutComponent,
    NotFoundComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ContactsServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
