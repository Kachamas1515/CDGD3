import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { Validators } from '@angular/forms';
import { ValidateName } from 'src/app/validators/validators';

@Component({
  selector: 'app-add-edit-form',
  templateUrl: './add-edit-form.component.html',
  styleUrls: ['./add-edit-form.component.css']
})
export class AddEditFormComponent implements OnInit {
  departmentSelected;
  genderSelected;
  firstName: string;
  lastName: string;
  addToList = new EventEmitter();
  departmentList = [];
  employeeData;
  // cities = [
  //   { name: 'New York', code: 'NY' },
  //   { name: 'Rome', code: 'RM' },
  //   { name: 'London', code: 'LDN' },
  //   { name: 'Istanbul', code: 'IST' },
  //   { name: 'Paris', code: 'PRS' }
  // ];
  // departmentList = [
  //   {
  //     departmentCode: '001',
  //     departmentName: 'Sale'
  //   },
  //   {
  //     departmentCode: '002',
  //     departmentName: 'IT'
  //   },
  //   {
  //     departmentCode: '003',
  //     departmentName: 'HR'
  //   }
  // ];
  genderList = [
    {
      label: 'Male',
      value: 'M'
    },
    {
      label: 'Female',
      value: 'F'
    }
  ];

  myForm: FormGroup;
  constructor(private empService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      department: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      firstName: new FormControl(null, [
        Validators.required,
        Validators.maxLength(50)
      ]),
      lastName: new FormControl(null, Validators.required)
    });
    this.empService.getDepartment().subscribe(res => {
      console.log(res);
      this.departmentList = res.map(item => {
        return {
          departmentCode: item.departmentCode,
          departmentName: item.departmentName
        };
      });
    });

    // this.myForm.get('firstname').setValue('Johnny');
    // this.myForm.patchValue({
    //   department: { departmentCode: '001' },
    //   gender: 'F'
    // });

    if (this.empService.selectedEmployee) {
      const selectedEmployee = this.empService.selectedEmployee;
      this.empService.getEmployeeById(selectedEmployee.employeeId).subscribe(val => {
        console.log('getEmployeeById', val);
        this.myForm.patchValue({
          ...val,
          department: {
            departmentCode: val.department.departmentCode,
            departmentName: val.department.departmentName
          }
        });
      });
    }
  }

  // addClick(event) { }
  // removeEmpty(obj) {
  //   Object.keys(obj).forEach(key => obj[key] == null && delete obj[key]);
  // }

  submit(formData) {
    if (this.myForm.valid) {
      console.log(formData);
      formData = {...formData , jobTitle: {jobTitleCode: '002'}};

      if (this.employeeData) {
       console.log(formData);
       formData = {...this.employeeData, ...formData};
       this.empService.editEmployee(formData).subscribe(res => {
        this.router.navigate(['search']);
      });
      } else {
        this.empService.addEmployee(formData).subscribe(res => {
          this.router.navigate(['search']);
        });
      }
    } else {
      this.myForm.markAllAsTouched();
    }
  }
}
