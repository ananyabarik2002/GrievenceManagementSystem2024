import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Department {
  id: number;
  name: string;
}

interface Complaint {
  id: number;
  title: string;
  description: string;
  departmentId: number;
  status: string;
}

@Component({
    selector: 'app-admin-dashboard',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
    totalGrievances = "";
    pendingGrievances = "";
    resolvedGrievances = "";

    departments: Department[] = [
        { id: 1, name: 'IT' },
        { id: 2, name: 'HR' },
        { id: 3, name: 'Finance' }
    ];

    complaints: Complaint[] = [
        { id: 1, title: 'Login Issue', description: 'Cannot login to portal', departmentId: 1, status: 'Pending' },
        { id: 2, title: 'Payroll Delay', description: 'Salary delayed this month', departmentId: 2, status: 'Resolved' },
        { id: 3, title: 'System Error', description: 'Software crash during usage', departmentId: 1, status: 'Pending' }
    ];

    selectedDepartment?: Department;
    selectedComplaints: Complaint[] = [];

    selectDepartment(department: Department): void {
        this.selectedDepartment = department;
        this.selectedComplaints = this.complaints.filter(
            complaint => complaint.departmentId === department.id
        );
    }
}
