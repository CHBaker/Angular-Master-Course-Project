import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/takeUntil';

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

    constructor(private contactsService: ContactsService) {}

    trackContact(index: number, contact: Contact) {
        return contact.id;
    }

    ngOnInit() {
        let first$ = this.contactsService.getContacts();

        let later$ = this.terms$
            .debounceTime(400)
            .distinctUntilChanged()
            .switchMap(term => this.contactsService.search(term));

        this.contactList$ = later$.merge(first$.takeUntil(later$));

        // first$   --X--|---
        // later$   -----X---
        // results$ --X--X--
    }
}
