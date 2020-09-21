import { Component, OnInit } from '@angular/core';
import {ContactsServices} from '../services/contacts.services';
import {FormGroup} from '@angular/forms';
import {ContactModel} from '../models/contact.model';
import {Router} from '@angular/router';
import {Subject, Subscription} from 'rxjs';
@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  contact:ContactModel=new ContactModel();
  mode:number=1

  constructor(public contactsServices:ContactsServices) { }

  ngOnInit() {

  }

  saveContact(){
   this.contactsServices.saveContact(this.contact);
    this.mode = 2;
  }





}
