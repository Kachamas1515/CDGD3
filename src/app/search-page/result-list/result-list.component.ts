import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})

export class ResultListComponent implements OnInit {

  @Input()
  data = [];
  constructor(private empService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.empService.hello();
  }

  gotoEdit(row) {
    this.empService.selectedEmployee = row;
    this.router.navigateByUrl('/edit');
  }

  delete(row) {
    this.empService.deleteEmployeeById(row.employeeId).pipe(
      switchMap(_ => this.empService.getEmployee(null))
    ).subscribe();
  }
  //end
}
