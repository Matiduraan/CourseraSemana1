import { Injectable } from "@angular/core";

@Injectable()
export class SettingsService {
    private settings: Array<string> = [];

    agregar(s: string){
        this.settings.push(s);
    }

    buscar(){
        return this.settings;
    }
}