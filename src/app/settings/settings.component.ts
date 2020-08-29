import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { SettingsService } from "../domain/settings.service";

@Component({
    selector: "Settings",
    templateUrl: "./settings.component.html"
})
export class SettingsComponent implements OnInit {

    constructor(private settings: SettingsService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.settings.agregar("Setting 1");
        this.settings.agregar("Setting 2");
        this.settings.agregar("Setting 3");
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
