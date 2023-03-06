//angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//view imports
import { DropdownComponent } from './view/search/dropdown/dropdown.component';
import { SearchComponent } from './view/search/search.component';
import { TableComponent } from './view/table/table.component';
import { ValueComponent } from './view/search/value/value.component';

//controller imports
import { realPipe } from './controller/pipes/real.pipe';
import { monthPipe } from './controller/pipes/monthRef.pipe';

//app imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationComponent } from './view/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    TableComponent,
    ValueComponent,
    SearchComponent,
    realPipe,
    monthPipe,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
