import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReplacePipe } from '../pipe/replace.pipe';
import { StartComponent } from '../star/star.component';
import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
        ReplacePipe,
        StartComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponent
              },
              // uma rota que recebe uma parametro chamado 'id'
              {
                path: 'courses/info/:id', component: CourseInfoComponent
              }
        ])
    ]
})
export class CourseModule {}