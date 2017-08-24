import { ContactsService } from './../contacts.service';
import { Contact } from './../models/contact';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "trm-contacts-detail-view",
    templateUrl: "./contacts-detail-view.component.html",
    styleUrls: ["./contacts-detail-view.component.css"]
})
export class ContactsDetailViewComponent implements OnInit {

    contact: Contact;

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private contactService: ContactsService,
    ) {}

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
                    console.log(error)
                }
            );
    }

    navigateToEditor() {
        this.router.navigate(['edit'], {
            relativeTo:this.activatedRoute
        });
    }

    navigateToList() {
        this.router.navigate(['/']);
    }
}
