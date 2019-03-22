import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePage } from "./home.page";

const routes: Routes = [
  {
    path: "home",
    component: HomePage,
    children: [
      {
        path: "components",
        children: [
          {
            path: "",
            loadChildren: "../components/components.module#ComponentsPageModule"
          },
          {
            path: "grid-layout",
            loadChildren: "../grid-layout/grid-layout.module#GridLayoutPageModule"
          }
        ]
      },
      {
        path: "others",
        children: [
          {
            path: "",
            loadChildren: "../others/others.module#OthersPageModule"
          }
        ]
      },
      {
        path: "",
        redirectTo: "/home/components",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/home/components",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
