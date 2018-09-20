import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user/user.component';
import { EditServersComponent } from './servers/edit-servers/edit-servers.component';
import { ServerComponent } from './servers/server/server.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes = [
  { path: '', component: HomeComponent },
  {
    path: 'servers',
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServersComponent }
    ]
  },

  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: ':id/:name',
        component: UserComponent
      }
    ]
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ServersComponent,
    HomeComponent,
    UserComponent,
    EditServersComponent,
    ServerComponent,
    NotFoundComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
