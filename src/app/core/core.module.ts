import {NgModule} from '@angular/core';

import {RoutingJumpService} from './service/routing-jump.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpService} from './service/http.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [HttpClientModule, SharedModule],
  declarations: [],
  providers: [RoutingJumpService, HttpService]
})
export class CoreModule {
}
