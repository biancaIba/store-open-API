import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";

const appRoutes: Routes = [
  { path: "", component: AppComponent, pathMatch: "full" },
];

export const routing = RouterModule.forRoot(appRoutes);