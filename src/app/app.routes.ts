import {WebpackAsyncRoute} from '@angularclass/webpack-toolkit';
import {RouterConfig} from '@angular/router';
import {Home} from './home';
import {NoContent} from './no-content';

import {DataResolver} from './app.resolver';

export const routes: RouterConfig = [
  {path: '', component: Home},
  {path: 'home', component: Home},
  {path: '**', component: NoContent},
];

// Async load a component using Webpack's require with es6-promise-loader and webpack `require`
// asyncRoutes is needed for our @angularclass/webpack-toolkit that will allow us to resolve
// the component correctly

export const asyncRoutes: AsyncRoutes = {
};


// Optimizations for initial loads
// An array of callbacks to be invoked after bootstrap to prefetch async routes
export const prefetchRouteCallbacks: Array<IdleCallbacks> = [
  // es6-promise-loader returns a function
];
