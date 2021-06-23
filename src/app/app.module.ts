import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContainerComponent } from './container/container.component';
import { NoteItemComponent } from './note-item/note-item.component';
import { AddBtnComponent } from './add-btn/add-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NoteItemComponent,
    AddBtnComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
