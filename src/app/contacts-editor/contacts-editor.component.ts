import { Contact } from './../models/contact';
import { ActivatedRoute, Router } from "@angular/router";
import { ContactsService } from "./../contacts.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "trm-contacts-editor",
  templateUrl: "./contacts-editor.component.html",
  styleUrls: ["./contacts-editor.component.css"]
})
export class ContactsEditorComponent implements OnInit {

    contact: Contact = <Contact>{ address: {}};

    constructor(
        private contactsService: ContactsService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.getContact(id);
    }

    getContact(id) {
        this.contactsService.getContact(id)
            .subscribe(
                (response) => {
                    this.contact = response;
                },
                (error) => {
                    console.log(error);
                }
        );
    }

    cancel(contact) {
        this.router.navigate([`/contacts/`, contact.id]);
    }

    save(contact) {
        this.contactsService.updateContact(contact)
            .subscribe(
                (response) => {
                    this.router.navigate(['/contacts', contact.id]);
                },
                (error) => {
                    console.log(error);
                }
        );
    }
}
