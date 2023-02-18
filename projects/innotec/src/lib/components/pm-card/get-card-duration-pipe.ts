import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'getCardDuration',
  pure: true
})
export class GetCardDurationPipe implements PipeTransform {

  transform( duration: number ): string {
    const minutes = Math.floor(duration / 60);
    return minutes + 'min';
  }
}
