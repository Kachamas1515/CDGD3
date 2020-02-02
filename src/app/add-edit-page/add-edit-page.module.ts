import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditPageComponent } from './add-edit-page.component';
import { AddEditFormComponent } from './add-edit-form/add-edit-form.component';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddEditPageComponent, AddEditFormComponent],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule,
    CommonModule,
    PanelModule,
    DropdownModule,
    RadioButtonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    ReactiveFormsModule
  ]
})
export class AddEditPageModule { }
