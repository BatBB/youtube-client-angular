import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './page/admin-page/admin-page.component';
import { AdminFormComponent } from './components/admin-form/admin-form.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [AdminPageComponent, AdminFormComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
