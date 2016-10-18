import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// for mock data from in memory API 
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; // from core
import { InMemoryDataService, InMemoryDataOverrideService } from './services/in-memory-data.service'; // our data

// components
import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';

// services
import { GetPeopleService } from './services/get-people.service';
import { GetStarwarsService } from './services/get-starwars.service';
import { GetMainMenuService } from './services/get-main-menu.service';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // disable below to allow ALL outside API calls
    InMemoryWebApiModule.forRoot(InMemoryDataOverrideService, {passThruUnknownUrl: true}) 
  ],
  providers: [
    GetPeopleService,
    GetStarwarsService,
    GetMainMenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
