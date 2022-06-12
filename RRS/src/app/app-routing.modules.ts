import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

const routes: Routes = [{path:'login',component:LoginComponent}, 
                        {path: 'register', component:RegisterComponent},
                        {path: 'home', component:DashboardComponent},
                        {path:'', redirectTo:'login', pathMatch:"full"}];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }