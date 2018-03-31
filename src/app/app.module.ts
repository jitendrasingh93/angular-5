import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';

import { routing }        from './app.routing';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AppComponent } from './app.component';
import {SessionServiceService} from "./_services/session-service.service";
import { EditComponent } from './edit/edit.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './shared/header/header.component';
import { HeaderService } from "./_services/header.service";
import { AddUserComponent } from './add-user/add-user.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatIconModule,
} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';






@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    EditComponent,
    UsersComponent,
    HeaderComponent,
    AddUserComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    routing
],
  entryComponents: [DialogComponent],

  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    SessionServiceService,
    HeaderService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },


    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}


