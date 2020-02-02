import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { ResultListComponent } from './result-list/result-list.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { GendePipe } from '../gende.pipe';

@NgModule({
  declarations: [SearchPageComponent, SearchFormComponent, ResultListComponent, GendePipe],
  imports: [
    CommonModule,
    PanelModule,
    DropdownModule,
    RadioButtonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule
  ],
  exports: [SearchPageComponent]
})
export class SearchPageModule { }
