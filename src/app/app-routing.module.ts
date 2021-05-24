import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const homeRoute={
  path:'home',component:HomeComponent//2
}
const loginRoute={
  path:'login',component:LoginComponent//2
}
const aboutRoute={
  path:'about',component:AboutComponent//2

}
// const adminRoute={
//   path:'private',component:PrivateComponent,canActivate:[AdminGuard]//2
// }
const privateRoute={
  path:'gallery',component:GalleryComponent//2
}
const defaultRoute={//2
  path:'**',redirectTo:'home'
}

const routes:Routes=[homeRoute,loginRoute,privateRoute,aboutRoute,defaultRoute];//3

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
