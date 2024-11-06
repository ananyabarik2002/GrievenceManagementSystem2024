import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
  departments = [
    { name: 'Security' },
    { name: 'Transport' },
    { name: 'IT Services' },
    { name: 'Housing' },
    { name: 'Student Affairs' }
  ];
}
