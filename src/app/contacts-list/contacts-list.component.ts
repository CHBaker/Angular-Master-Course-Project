import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { ContactsService } from './../contacts.service';
import { Contact } from './../models/contact';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'trm-contacts-list',
    templateUrl: './contacts-list.component.html',
    styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit{

    contactList$: Observable<Array<Contact>>;
    private terms$ = new Subject<string>();

    constructor(private contactsService: ContactsService) {
        this.contactList$ = this.contactsService.getContacts()
    }

    trackContact(index: number, contact: Contact) {
        return contact.id;
    }

    ngOnInit() {
        this.terms$.debounceTime(400).distinctUntilChanged()
            .subscribe(
                (term) => {
                    this.contactList$ = this.contactsService.search(term);
                }
        );
    }
}
