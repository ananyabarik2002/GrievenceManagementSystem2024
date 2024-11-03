import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ComplaintService } from '../../services/complaint.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userName: string = '';
  totalComplaints: number = 0;
  complaints: any[] = [];

  constructor(
    private authService: AuthService,
    private complaintService: ComplaintService
  ) {}

  ngOnInit(): void {
    const userData = this.authService.getUserData();
    this.userName = userData.userName || 'User';

    // Check if userId is not null before calling the service
    if (userData.userId) {
      this.complaintService.getUserComplaints(userData.userId).subscribe(
        response => {
          this.complaints = response.complaints;
          this.totalComplaints = response.totalCount;
        },
        error => {
          console.error('Failed to load complaints', error);
        }
      );
    } else {
      console.error('User ID is null, cannot fetch complaints.');
    }
  }

  redirectToNewComplaint(): void {
    // Redirect to new complaint form
  }

  openFeedback(): void {
    alert('Feedback form coming soon!');
  }
}
