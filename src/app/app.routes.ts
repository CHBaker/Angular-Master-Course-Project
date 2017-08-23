import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactsAppComponent } from './app.component';

import { ContactsListComponent } from './contacts-list/contacts-list.component';

export const APP_ROUTES = [
    { path: '', component: ContactsListComponent},
    { path: 'contacts/:id', component: ContactDetailComponent },
    { path: 'contacts/:id/edit', component: ContactsEditorComponent},
    { path: '**', redirectTo: '/'}
]
