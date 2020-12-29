import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  templateUrl: './course-list.component.html'
})
export class  CourseListComponent implements OnInit {

  filteredCourses: Course[];

  // avisando outros devs que essas variáveis devem ser usadas somente dentro do componente atual (CorseListComponent)
  //em outras palavras: "marcando logicamente" os atributos como privadas
  _courses: Course[] = [];
  _filterBy: string;

  //Usando a injenção de dependência CourseService
  constructor(private courseService: CourseService) {};

  ngOnInit(): void {
    // usando o serviço (de CourseService) que injetamos na aplicação
    this._courses = this.courseService.retrieveAll();
    this.filteredCourses = this._courses;
  }


  // filter e get usados para fazer o two-way data bind

  // input
  set filter(value: string) {
    this._filterBy = value;
    //verifica se a string de busca é uma substring de algum curso.
    this.filteredCourses = this._courses.filter((course: Course) => course.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1);
  }

  // leitura
  get filter() {
    return this._filterBy;
  }

}
