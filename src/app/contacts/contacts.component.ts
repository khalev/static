import {Component, OnDestroy, OnInit} from '@angular/core';
import {ContactsServices} from '../services/contacts.services';
import {Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ContactModel} from '../models/contact.model';
import {observable} from "rxjs";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit,OnDestroy {
   pageContacts:any;
  contactSubcription:Subscription;
  motCle:string ="";
  pageCourante:number=0;
  size:number=4;
  pages:Array<number>;

  constructor(public contactsService:ContactsServices,
              public http:HttpClient,
              public router:Router) { }

  ngOnInit() {
  this.doSercher();
  }

  onEdit(c:ContactModel){
      this.router.navigate(['/edit-contact',c.id]);
  }

  doSercher(){
    this.contactSubcription = this.contactsService.getContacts(this.motCle,this.pageCourante,this.size).subscribe(
      (resp:any)=>{
        this.pageContacts = resp;
        this.pages = new Array<number>(resp.totalPages);
      },
      (error)=>{
        console.log("Erreur : "+error);
      }
    );
  }

  goToPage(i:number){
    this.pageCourante=i;
    this.doSercher();
  }

  onSubmitSearch(){
    this.doSercher();
  }

  ngOnDestroy(){
   // this.contactSubcription.unsubscribe();
  }
  /*update*/
  onEditContact(id:number){
    this.router.navigate(['edit-contact',id]);
  }
  /*fin update*/

  /*delete*/

  onDeleteContact(c:ContactModel){
    let confirm=window.confirm('Est vous sure ?');
    if(confirm==true){
      this.contactsService.delateContact(c.id)
      this.pageContacts.content.splice(
          this.pageContacts.content.indexOf(c),1
      );

    }


  }


  /*fin delete*/


}
