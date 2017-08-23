import { Contact } from './models/contact';
import { HttpClient } from "@angular/common/http";
import { CONTACT_DATA } from "./data/contact-data";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/observable";

interface ContactResponse { item : Contact };
interface ContactsResponse { items : Contact[] };

@Injectable()
export class ContactsService {

    API_ENDPOINT: string = 'http://localhost:4201/api';

    constructor(private httpClient: HttpClient) {}

    getContacts() {
        return this.httpClient.get<ContactsResponse>(`http://localhost:4201/api/contacts`).map(data => data.items);
    }

    getContact(id: string): Observable<Contact> {
        return this.httpClient.get<ContactResponse>(`${this.API_ENDPOINT}/contacts/${id}`).map(data => data.item);
    }

    updateContact(contact: Contact) {
        return this.httpClient.put<ContactResponse>(`${this.API_ENDPOINT}/contacts/${contact.id}`, contact).map(data => data.item);
    }

    search(term: string) {
        return this.httpClient.get<ContactsResponse>(`${this.API_ENDPOINT}/search?text=${term}`).map(data => data.items);
    }
}
