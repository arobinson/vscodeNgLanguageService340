import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example.component';
import { ExampleDirective } from './example.directive';
import { ExamplePipe } from './example.pipe';

@NgModule({
  declarations: [ExampleComponent, ExampleDirective, ExamplePipe],
  imports: [CommonModule],
  exports: [ExampleComponent, ExampleDirective, ExamplePipe]
})
export class ExampleModule {}
