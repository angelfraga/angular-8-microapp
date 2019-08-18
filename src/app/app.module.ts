import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app/app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmptyComponent } from './empty/empty.component';
import { LoginComponent } from './login/login.component';
import { AppRootComponent } from './app-root/app-root.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    EmptyComponent,
    AppRootComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent,
        children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: 'home', component: HomeComponent },
          { path: '**', component: EmptyComponent }
        ]
      },
      { path: 'login', component: LoginComponent },
      { path: '**', redirectTo: '' }
    ], { useHash: true })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppRootComponent]
})
export class AppModule { }
