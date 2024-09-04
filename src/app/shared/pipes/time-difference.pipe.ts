import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeDifference'
})
export class TimeDifferencePipe implements PipeTransform {
  transform(clickTime: Date | undefined, startTime: Date): string {
    if (!clickTime) {
      return 'Temps inconnu';
    }
    const timeDiff = Math.floor((clickTime.getTime() - startTime.getTime()) / 1000);
    return `${timeDiff} secondes`;
  }
}
