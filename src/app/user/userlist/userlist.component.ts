import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  constructor(private router: Router) {
  }
  userList = []
  dataSource: any = [];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns = ['slno', 'name', 'gender', 'email', 'username', 'password', 'dob', 'phone']
  getUserList = () => {
    let userData = JSON.parse(localStorage.getItem('userList'));
    this.userList = userData;
    this.dataSource = new MatTableDataSource(this.userList);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit() {
    this.getUserList();
  }
  addUser = () => {
    this.router.navigate(['user/add-user'])
  }
}
