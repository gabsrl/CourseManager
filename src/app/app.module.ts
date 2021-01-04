import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StartComponent } from './shared/component/star/star.component';
import { ReplacePipe } from './shared/pipe/replace.pipe';
import { CourseInfoComponent } from './courses/course-info.component';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CourseModule,
    CoreModule,
    // requisicoes http
    HttpClientModule,
    // trabalhando com rotas; definindo roteamento da aplicação
    RouterModule.forRoot([
      // arays de (objetos de) rotas
      // raiz
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
