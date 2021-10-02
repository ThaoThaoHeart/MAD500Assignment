import { Pipe, PipeTransform } from '@angular/core';
import {Content} from "./helper-files/content-interface";

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(contentList: Content[], type: string): Content[] {
    return contentList.filter(c => c.type == type);
  }

}
