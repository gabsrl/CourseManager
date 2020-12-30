import { NgModule }  from '@angular/core';
import { StartComponent } from './star/star.component';

@NgModule({
    declarations: [
        StartComponent
    ],
    exports: [
        StartComponent
    ]
})
export class StarModule {
}