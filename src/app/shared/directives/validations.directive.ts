import { Directive, HostListener } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Directive({
  selector: '[appValidations][onlyNumbers]',
})
export class OnlyNumbersValidationsDirective {

  constructor(private sharedService: SharedService){}

  @HostListener('keypress',['$event']) OnlyNumbers(event: KeyboardEvent){
    const key = event.key;
    return this.sharedService.onlyNumber.test(key)
  }

}

@Directive({
  selector: '[appValidations][validUsers]'
})
export class ValidUsersValidationsDirective {

  constructor(private sharedService: SharedService){}

  @HostListener('keypress', ['$event']) ValidUsers(event: KeyboardEvent){
    const key = event.key;
    return this.sharedService.validUser.test(key);
  }
}
