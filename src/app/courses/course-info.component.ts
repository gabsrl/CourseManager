import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

  course: Course;

  // injenção de dependência para pegar o serviço de Rota Ativada
  // injenção de dep. para nosso serviço de Course também
  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {};

  /**
   * na inicialização do componente, vai usar o serviço para pegar o parametro id da rota.
   */
  ngOnInit(): void {
    this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
      next: course => this.course = course,
      error: err => console.log("Erro", err)
    });
  }

  save(): void {
    this.courseService.save(this.course).subscribe({
      next: course => console.log('Salvo com sucesso', course),
      error: err => console.log("Error", err)
    });
  }
};
