import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { students } from './mock';
import { Student } from '../../models/student-to';

@Component({
  selector: 'app-student-table',
  imports: [CommonModule],
  templateUrl: './student-table.component.html',
  styleUrl: './student-table.component.css'
})
export class StudentTableComponent implements OnInit {
  public count = 0
  public students?: Student[]
  ngOnInit(): void {
    this.students = students
  }
}
