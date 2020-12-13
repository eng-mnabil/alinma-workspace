import { NgModule } from '@angular/core';
import { AlinmaGlobalComponent } from './alinma-global.component';
import { ButtonComponent } from './components/button/button.component';
import {CommonModule} from "@angular/common"



@NgModule({
  declarations: [AlinmaGlobalComponent, ButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [AlinmaGlobalComponent, ButtonComponent]
})
export class AlinmaGlobalModule { }
