import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Features",
    templateUrl: "./Features.component.html"
})
export class FeaturesComponent implements OnInit {

    constructor(private router: Router, private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {

    }

    getDevice() {
        let a: string = "No estamos en android";
        if (app.android) {
            a = "Estamos en android";
        }
        return a; 
    }
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    
    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            
            transition: {
                name: "fade"
            }
        });
        
    }
}
