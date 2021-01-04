import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';

@NgModule({
    declarations:[
        NavbarComponent
    ],
    imports:[
        RouterModule
    ],
    exports:[
        NavbarComponent
    ]
})
export class CoreModule {

}