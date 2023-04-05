import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './page/admin-page/admin-page.component';
import { AdminFormComponent } from './components/admin-form/admin-form.component';

@NgModule({
  declarations: [AdminPageComponent, AdminFormComponent],
  imports: [CommonModule],
})
export class AdminModule {}
