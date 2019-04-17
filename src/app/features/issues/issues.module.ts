import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssuesRoutingModule } from './issues-routing.module';
import { IssuesComponent } from './issues.component';
import { DevelopersComponent } from './containers/developers/developers.component';
import { OverviewComponent } from './containers/overview/overview.component';
import { DeveloperEntryComponent } from './components/developer-entry/developer-entry.component';
import { DeveloperListComponent } from './components/developer-list/developer-list.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';
import { DeveloperListSorterComponent } from './components/developer-list-sorter/developer-list-sorter.component';
import { EffectsModule } from '@ngrx/effects';
import { AppStartUpEffect } from './effects/app-startup.effects';
import { HttpClientModule } from '@angular/common/http';
import { DeveloperEffects } from './effects/developers.effects';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    IssuesComponent,
    DevelopersComponent,
    OverviewComponent,
    DeveloperEntryComponent,
    DeveloperListComponent,
    DeveloperListSorterComponent],
  imports: [
    CommonModule,
    IssuesRoutingModule,
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([AppStartUpEffect, DeveloperEffects]),
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class IssuesModule { }
