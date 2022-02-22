import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { HeaderComponent } from './components/header/header.component';
import { reducers } from './store/reducer';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('title', reducers)],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: [],
})
export class HeaderModule {}
