import {Injectable, OnInit} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ContactModel} from '../models/contact.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";

@Injectable()
export class ContactsServices implements OnInit{
contact:ContactModel;
contactForm:FormGroup;
constructor(private http:HttpClient,
            private contactBuilder:FormBuilder,public router:Router ){

}

  ngOnInit(){


  }

  getContacts(motCle:string,page:number,size:number){
  const url = "http://localhost:8080/chercherContact?mc="+motCle+"&page="+page+"&size="+size;
   return  this.http.get<any>(url);
  }





    saveContact(contact:ContactModel){
        const url = "http://localhost:8080/contacts";
        this.http.post(url,contact)
            .subscribe(
                (resp:any)=>{
                    console.log('Enregistrement reussit');
                    this.contact = resp;
                },
                (error)=>{
                    console.log('Echec de l\'enregistrement ');
                }
            );
    }

    /*for update*/

    getContact(id:number){
        const url = "http://localhost:8080/contact/"+id;
        return  this.http.get<any>(url);
    }


    updateContact(contact:ContactModel){
        const url = "http://localhost:8080/contacts/"+contact.id;
        this.http.put(url,contact)
            .subscribe(
                (resp:any)=>{
                    console.log('Enregistrement reussit');
                    this.contact = resp;
                    alert("Mis a jour effectuee");
                    this.router.navigate(['contacts']);
                },
                (error)=>{
                    console.log('Echec de l\'enregistrement ');
                }
            );
    }


    delateContact(id:number){
        const url = "http://localhost:8080/contacts/"+id;
        this.http.delete(url)
            .subscribe(
                (resp:any)=>{
                    //console.log('Enregistrement reussit');
                    //this.contact = resp;
                   // alert("Mis a jour effectuee");
                   // this.router.navigate(['contacts']);

                },
                (error)=>{
                    console.log('Echec de l\'enregistrement ');
                }
            );
    }


    /*fin update*/



}
