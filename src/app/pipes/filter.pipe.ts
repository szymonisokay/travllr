import { Pipe, PipeTransform } from '@angular/core';
import { Trip } from '../shared/trip';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Trip[], searchPriceFrom: number, searchPriceTo: number): any[] {
    if (!items) {
      return [];
    }
    if (!searchPriceFrom && !searchPriceTo) {
      return items;
    }

    return Object.values(items).filter(it => {
      return it.price >= searchPriceFrom && it.price <= searchPriceTo;

    });
  }

}
