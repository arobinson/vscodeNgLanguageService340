import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'examplePipe'
})
export class ExamplePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return 'This is the example pipe. Value passed in: ' + value;
  }
}
