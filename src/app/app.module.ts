import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeComponent } from './theme/theme.component';

import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {path:'subject/:id', component: SubjectComponent},
  {path:'subjects', component: SubjectListComponent},
  {path:'', component:ThemeListComponent},
  {path:'**', component:ThemeListComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    SubjectComponent,
    SubjectListComponent,
    ThemeListComponent,
    ThemeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
