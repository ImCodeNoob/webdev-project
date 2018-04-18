import { Component, OnInit } from '@angular/core';
import {User} from '../../../../models/user.model.client';
import {Router} from '@angular/router';
import {SharedService} from '../../../../services/shared.service';
import {UserService} from '../../../../services/user.service.client';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  user: User;
  students: User[] = [];

  constructor(private router: Router,
              private sharedService: SharedService,
              private userService: UserService) { }

  deleteUser(userId) {
    return this.userService.deleteUserInServer(userId).subscribe(
      () => {
        this.router.navigate(['/admin/student']);
        this.ngOnInit();
      }
    );
  }


  ngOnInit() {
    this.user = this.sharedService.user;

    this.userService.findAllStudents().subscribe(
      (students: User[]) => {
        this.students = students;
      });
  }

}
