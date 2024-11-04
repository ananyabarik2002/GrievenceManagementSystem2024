import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  departments = [
    { id: 1, name: 'IT' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'Finance' },
    // Add more departments as needed
  ];

  complaints = [
    { id: 1, title: 'Login Issue', description: 'Cannot login to portal', departmentId: 1 },
    { id: 2, title: 'Payroll Delay', description: 'Salary delayed this month', departmentId: 2 },
    { id: 3, title: 'System Error', description: 'Software crash during usage', departmentId: 1 },
    // Add more complaints as needed
  ];

  selectedDepartment?: { id: number; name: string };
  selectedComplaints = [];

  selectDepartment(department: { id: number; name: string }): void {
    this.selectedDepartment = department;
    this.selectedComplaints = this.complaints.filter(
      complaint => complaint.departmentId === department.id
    );
  }
}