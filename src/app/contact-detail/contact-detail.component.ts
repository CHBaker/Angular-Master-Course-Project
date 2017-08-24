import { Contact } from './../models/contact';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'trm-contact-detail',
    templateUrl: './contact-detail.component.html',
    styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent {

    @Input() contact: Contact;
    @Output() edit = new EventEmitter<void>();
    @Output() back = new EventEmitter<void>();

}
