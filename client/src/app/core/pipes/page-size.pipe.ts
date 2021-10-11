import { Pipe, PipeTransform } from '@angular/core';
import { PageState } from "../store/reducers/page.reducer";

@Pipe({
  name: 'pageSize'
})
export class PageSizePipe implements PipeTransform {

  transform(state: PageState, pageType:string = ''): string {
    const { pageSize } = state
    if(pageSize){
      if(!pageType) return pageSize
      if(pageType !== 'auth' && (pageSize === 'Medium' || pageSize === 'Large' || pageSize === 'XLarge')) return 'flex'
      return 'block'
    }
    return ''
  }

}
