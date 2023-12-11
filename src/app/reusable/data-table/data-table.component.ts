import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ColumnMode, NgxDatatableModule} from "@swimlane/ngx-datatable";
import {TableColumn} from "@swimlane/ngx-datatable/lib/types/table-column.type";
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, NgxDatatableModule, NgbPagination],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent {
  ColumnMode = ColumnMode;
  page = 1;
  pageSize = 10
  // @Input() columns!: TableColumn[];
  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' }
  ];
}
