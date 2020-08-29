import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { FeaturesComponent } from "./features.component";
import { TestingComponent } from "./testing.component";

const routes: Routes = [
    { path: "home", component: FeaturesComponent },
    { path: "testing", component: TestingComponent }
] 


@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class FeaturesRoutingModule { }
