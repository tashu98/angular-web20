import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousands',
  standalone: true
})
export class ThousandsPipe implements PipeTransform {
  transform(value: number): string {
    return (value / 1000).toFixed(1) + ' tys.';
  }
}
