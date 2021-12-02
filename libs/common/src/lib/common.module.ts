import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  imports: [NgCommonModule],
  declarations: [DemoComponent],
  exports: [DemoComponent],
})
export class CommonModule {}
