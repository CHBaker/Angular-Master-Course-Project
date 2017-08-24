import { TabsComponent } from './tabs/tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { HttpClientModule } from '@angular/common/http'
import { APP_ROUTES } from './app.routes';
import { ContactsService } from './contacts.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { ContactsAppComponent } from './app.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';

@NgModule({
  declarations: [
      ContactsAppComponent,
      ContactsListComponent,
      ContactDetailComponent,
      ContactsEditorComponent,
      ContactsDetailViewComponent,
      TabComponent,
      TabsComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  bootstrap: [ContactsAppComponent],
  providers: [
      ContactsService
  ]
})
export class ContactsModule {

}
