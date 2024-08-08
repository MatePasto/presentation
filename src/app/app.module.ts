import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { ProfileComponent } from './profile/profile.component'
import { FooterComponent } from './footer/footer.component'
import { IntroComponent } from './intro/intro.component'

@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		ProfileComponent,
        IntroComponent
	],
	imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
