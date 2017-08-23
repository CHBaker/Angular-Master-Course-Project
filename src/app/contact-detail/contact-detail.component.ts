import { Observable } from 'rxjs/observable';
import { Contact } from './../models/contact';
import { ContactsService } from './../contacts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'trm-contact-detail',
    templateUrl: './contact-detail.component.html',
    styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

    contact: Contact;

    constructor(private activatedRoute: ActivatedRoute, private contactService: ContactsService) { }

    ngOnInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.getContact(id);
    }

    getContact(id: string) {
        this.contactService.getContact(id)
            .subscribe(
                (response) => {
                    this.contact = response;
                },
                (error) => {
                    console.log(error);
                }
        );
    }

}
