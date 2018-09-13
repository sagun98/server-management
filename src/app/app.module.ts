import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { HomeComponent } from './home/home.component';

const appRoutes = [
  { path: '', component: UsersComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'users', component: HomeComponent }
];

@NgModule({
  declarations: [AppComponent, UsersComponent, ServersComponent, HomeComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
