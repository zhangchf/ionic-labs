import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePage } from "./home.page";
import { ComponentsPageModule } from '../components/components.module';
import { OthersPageModule } from '../others/others.module';

const routes: Routes = [
  {
    path: "",
    component: HomePage,
    children: [
      {
        path: "",
        redirectTo: "components",
        pathMatch: "full"
      },
      {
        path: "components",
        loadChildren: "../components/components.module#ComponentsPageModule"
      },
      {
        path: "others",
        loadChildren: "../others/others.module#OthersPageModule"
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
