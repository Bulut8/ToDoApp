import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DynamicbuttonComponent } from './dynamicbutton/dynamicbutton.component';



@NgModule({
  declarations: [SideMenuComponent,HeaderComponent,FooterComponent, DynamicbuttonComponent],
  imports: [
    CommonModule
  ],
  exports: [SideMenuComponent,HeaderComponent,FooterComponent,DynamicbuttonComponent],
})
export class ComponentsModule { }
