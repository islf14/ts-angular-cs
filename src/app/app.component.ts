import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseTableComponent } from "./components/course-table/course-table.component";
import { StudentTableComponent } from "./components/student-table/student-table.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, CourseTableComponent, StudentTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = ""
  courses: boolean = true
  handleChange(){
    this.courses = !this.courses
  }
}
