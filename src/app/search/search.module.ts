import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//es necesario xq este modulo va utilizar routerLink
import { RouterModule } from '@angular/router';
//components
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, RouterModule],
  exports: [SidebarComponent],
})
export class SearchModule {}
