import { Component } from '@angular/core';

@Component({
  selector: 'app-department',
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
