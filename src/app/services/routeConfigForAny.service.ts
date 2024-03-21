import { InjectionToken } from "@angular/core";
import { RouteConfigForAny } from "./routeConfigForAny";

export const ROUTE_CONFIG_TOKEN = new InjectionToken<RouteConfigForAny>('routeConfigForAny');