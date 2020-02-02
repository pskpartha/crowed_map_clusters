import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'header',
  //   loadChildren: () =>
  //     import('./header/header.module').then(m => m.HeaderModule)
  // },
  // {
  //   path: 'footer',
  //   loadChildren: () =>
  //     import('./footer/footer.module').then(m => m.FooterModule)
  // },
  // {
  //   path: 'map',
  //   loadChildren: () => import('./map/map.module').then(m => m.MapModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
