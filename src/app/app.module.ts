import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TodoAlertsComponent } from './todo-alerts/todo-alerts.component'

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ListComponent,
    TodoAlertsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ListComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
