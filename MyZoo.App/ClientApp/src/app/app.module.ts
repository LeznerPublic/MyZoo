import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimalsComponent } from './animals/animals.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatDialogModule, MatButtonModule, MatFormFieldModule, MatCheckboxModule, MatSelectModule, MatInputModule} from '@angular/material';
import { MatCardModule ,MatIconModule,MatProgressBarModule} from '@angular/material';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StatisticsComponent } from './statistics/statistics.component';

import { ChartistModule } from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';

import { FlexLayoutModule } from '@angular/flex-layout';
import { NewAnimalComponent } from './new-animal/new-animal.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AnimalsComponent,
    StatisticsComponent,
    NewAnimalComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
    ]),
    BrowserAnimationsModule,
    MatTableModule, MatPaginatorModule, MatSortModule, MatDialogModule,MatInputModule,
    MatCardModule,MatIconModule,MatProgressBarModule,MatButtonModule,MatFormFieldModule,MatCheckboxModule,MatSelectModule,
    Ng2SmartTableModule,
    ChartistModule,
    ChartsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
