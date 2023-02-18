import {Pipe, PipeTransform} from '@angular/core';
import {formatDate} from "@angular/common";

@Pipe({
  name: 'getCardTime',
  pure: true
})
export class GetCardTimePipe implements PipeTransform {

  transform( time : Date ): string {
    return formatDate(time,'HH:mm', navigator.language);
  }
}
