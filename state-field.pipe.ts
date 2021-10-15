import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stateField'
})
export class StateFieldPipe implements PipeTransform {

  transform(state: any,fieldName: string,index:number=0): any {
    if(state.hasOwnProperty(fieldName)){
      return state[fieldName]
    }else{
      for(let prop in state){
        if (typeof state[prop] === 'object'){
          return this.transform(state[prop],fieldName,++index)
        }
      }
    }
  }
}
