import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { Error404Component } from './component/error404/error404.component';

@NgModule({
    declarations:[
        NavbarComponent,
        Error404Component
    ],
    imports:[
        RouterModule.forChild([
            // pagina não encontrada, 404, (quando nada bate)
            {
                path: '**', component: Error404Component
            }
        ])
    ],
    exports:[
        NavbarComponent
    ]
})
export class CoreModule {
}