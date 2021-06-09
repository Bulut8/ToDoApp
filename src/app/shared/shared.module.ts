import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { ServiceModule } from './services/service.module';



@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    ServiceModule
  ]
})
export class SharedModule { }
