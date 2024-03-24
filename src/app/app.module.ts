import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { registerLocaleData } from '@angular/common';
// https://angular.io/guide/i18n-optional-import-global-variants
import '@angular/common/locales/global/fr';

//https://stackoverflow.com/questions/51857723/en-in-locale-not-working-for-angular-currency-pipe
// import { registerLocaleData } from '@angular/common';
// import localeIn from '@angular/common/locales/en-IN';
// registerLocaleData(localeIn);
// import localeAr from '@angular/common/locales/ar-EG';
// registerLocaleData(localeAr);
// import localeFr from '@angular/common/locales/fr-CA';
// registerLocaleData(localeFr);

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './appConfig/appConfig.service';
import { RequestInterceptor } from './request.interceptor';
import { InitService } from './init.service';
import { AppRoutingModule } from './app-routing.module';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './hover.directive';
import { EmailValidatorDirective } from './emailValidator/email-validator.directive';
import { ROUTE_CONFIG_TOKEN } from './services/routeConfigForAny.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LearingBootstrapModule } from './learing-bootstrap/learing-bootstrap.module';
// import { RoomsModule } from './rooms/rooms.module';

function initFactory(initService: InitService)
{
  return () => initService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    ContainerComponent,
    EmployeeComponent,
    AppNavComponent,
    NotfoundComponent,
    LoginComponent,
    HoverDirective,
    EmailValidatorDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LearingBootstrapModule,
    // RoomsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    FormsModule
  ],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG
    },
    {
      provide: ROUTE_CONFIG_TOKEN,
      useValue: { title : 'Home'}
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [InitService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
