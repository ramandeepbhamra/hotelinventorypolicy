import { Inject, Injectable } from '@angular/core';
import { ROUTE_CONFIG_TOKEN } from './routeConfigForAny.service';
import { RouteConfigForAny } from './routeConfigForAny';

@Injectable({
  providedIn: 'any'
})
export class ConfigForAnyService {

  constructor(
    @Inject(ROUTE_CONFIG_TOKEN)
    private couteConfigForAny: RouteConfigForAny
  ) { 
    console.log('ConfigForAnyService Instance....')
    console.log(this.couteConfigForAny)
  }
}
