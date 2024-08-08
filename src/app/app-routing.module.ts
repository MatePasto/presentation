import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { IntroComponent } from './intro/intro.component'
import { ProfileComponent } from './profile/profile.component'

export const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'intro', component: IntroComponent, data: {animation: 'leave'} },
  { path: 'profile', component: ProfileComponent, data: {animation: 'enter'}  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [
  IntroComponent,
  ProfileComponent
]
