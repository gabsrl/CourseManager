import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StartComponent } from './shared/component/star/star.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReplacePipe } from './shared/pipe/replace.pipe';
import { Error404Component } from './error404/error404.component';
import { CourseInfoComponent } from './courses/course-info.component';
import { CourseModule } from './courses/course.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    CourseModule,
    // requisicoes http
    HttpClientModule,
    // trabalhando com rotas; definindo roteamento da aplicação
    RouterModule.forRoot([
      // arays de (objetos de) rotas
      // raiz
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      // pagina não encontrada, 404, (quando nada bate)
      {
        path: '**', component: Error404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
