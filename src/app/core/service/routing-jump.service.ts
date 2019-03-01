import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class RoutingJumpService {

  constructor(private router: Router) {

  }

  jumping(path: string) {
    this.router.navigate([path]);
  }

}
