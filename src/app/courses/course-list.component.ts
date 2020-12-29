import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class  CourseListComponent implements OnInit {
  courses: Course[] = [];

  //Usando a injenção de dependência CourseService
  constructor(private courseService: CourseService) {};

  ngOnInit(): void {
    // usando o serviço (de CourseService) que injetamos na aplicação
    this.courses = this.courseService.retrieveAll();
  }
}
