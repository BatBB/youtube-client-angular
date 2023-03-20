import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderService } from './services/header.service';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, SharedModule],
  providers: [HeaderService],
})
export class CoreModule {}
