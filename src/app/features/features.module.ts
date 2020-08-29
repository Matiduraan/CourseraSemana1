import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { FeaturesRoutingModule } from "./features-routing.module";
import { FeaturesComponent } from "./features.component";
import { TestingComponent } from "./testing.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        FeaturesRoutingModule
    ],
    declarations: [
        FeaturesComponent,
        TestingComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class FeaturesModule { }
