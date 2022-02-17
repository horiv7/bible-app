import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ErrorMessageModule } from '../shared/errorMessage/errorMessage..module';
import { LoadingModule } from '../shared/loading/loading.module';
import { BiblePartCardComponent } from './biblePartCard/biblePartCard.component';
import { HomeComponent } from './home/home.component';
import { GetBiblePartsService } from './services/getBibleParts.service';
import { GetBiblePartsEffect } from './store/effects/getBibleParts.effect';
import { reducers } from './store/reducer';

const routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    EffectsModule.forFeature([GetBiblePartsEffect]),
    StoreModule.forFeature('bibleParts', reducers),
    FlexLayoutModule,
    LoadingModule,
    ErrorMessageModule,
  ],
  declarations: [HomeComponent, BiblePartCardComponent],
  exports: [],
  providers: [GetBiblePartsService],
})
export class HomeModule {}
