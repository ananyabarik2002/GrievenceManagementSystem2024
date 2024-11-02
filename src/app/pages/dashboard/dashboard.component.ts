import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  userName: string = 'John Doe'; // Replace with dynamic data from API
  totalComplaints: number = 5; // Replace with dynamic data from API
  complaints = [
    { title: 'Complaint 1', status: 'Resolved' },
    { title: 'Complaint 2', status: 'Pending' },
    { title: 'Complaint 3', status: 'In Progress' },
    // Add more as needed
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Fetch user data, complaints, and total count from API
  }

  redirectToNewComplaint(): void {
    this.router.navigate(['/new-complaint']); // Navigate to the new complaint component
  }

  openFeedback(): void {
    // Logic to open feedback form, could be a modal or a new route
    alert('Feedback form coming soon!');
  }
}
