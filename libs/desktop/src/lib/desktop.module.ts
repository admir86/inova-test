import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { CommonModule as InovaCommonModule } from '@inova-test/common';

@NgModule({
  imports: [CommonModule, InovaCommonModule],
  declarations: [NavigationComponent],
})
export class DesktopModule {}
