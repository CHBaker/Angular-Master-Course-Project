import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsAppComponent } from './app.component';

import { ContactsListComponent } from './contacts-list/contacts-list.component';

export const APP_ROUTES = [
    { path: '', component: ContactsListComponent},
    { path: 'contacts/:id', component:  ContactsDetailViewComponent},
    { path: 'contacts/:id/edit', component: ContactsEditorComponent},
    { path: '**', redirectTo: '/'}
]
