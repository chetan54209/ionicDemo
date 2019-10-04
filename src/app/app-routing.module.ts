import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)},
  // { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  // { path: 'first', loadChildren: './pages/first/first.module#FirstPageModule' },
  // { path: 'third', loadChildren: './pages/third/third.module#ThirdPageModule' },
  // { path: 'first-with-tabs', loadChildren: './pages/first-with-tabs/first-with-tabs.module#FirstWithTabsPageModule' },
  // { path: 'second', loadChildren: './pages/second/second.module#SecondPageModule' },
  // { path: 'tab1', loadChildren: './pages/tab1/tab1.module#Tab1PageModule' },
  // { path: 'tab2', loadChildren: './pages/tab2/tab2.module#Tab2PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
