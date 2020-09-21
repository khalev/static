import { Component, OnInit } from '@angular/core';
import {ContactModel} from '../models/contact.model';
import {ContactsServices} from '../services/contacts.services';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
   mode:number = 1;
   contact:ContactModel=new ContactModel();
   idContact:number;

  constructor(public contactService:ContactsServices,
  activatedRoute:ActivatedRoute,public router:Router ) {

      /*console.log(activatedRoute.snapshot.params['id']);*/
      this.idContact=activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
  this.contactService.getContact(this.idContact)
      .subscribe(data=>{
          this.contact=data;
      },error => {
          console.log(error);
      })
  }


    updateContact(){
      this.contactService.updateContact(this.contact);

    }

}
