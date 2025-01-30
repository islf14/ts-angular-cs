import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { courses } from './mock';
import { Course } from '../../models/course-to';

@Component({
  selector: 'app-course-table',
  imports: [CommonModule],
  templateUrl: './course-table.component.html',
  styleUrl: './course-table.component.css'
})
export class CourseTableComponent implements OnInit {
  public courses?: Course[]
  ngOnInit(): void {
    this.courses = courses
  }
}
