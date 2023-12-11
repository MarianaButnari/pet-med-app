import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ColumnMode, NgxDatatableModule} from "@swimlane/ngx-datatable";
import {TableColumn} from "@swimlane/ngx-datatable/lib/types/table-column.type";
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";
import {ReusableModule} from "../reusable.module";
import {DataTableConfiguration} from "./models/data-table-configuration";

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, NgxDatatableModule, NgbPagination, ReusableModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent implements OnChanges {
  @Input() dataTableConfiguration!: DataTableConfiguration;
  ColumnMode = ColumnMode;
  page = 1;
  pageSize = 10;
  // @Input() columns!: TableColumn[];
  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' }
  ];

  ngOnChanges(changes: SimpleChanges): void {
    const dataChanges = changes['dataTableConfiguration']?.currentValue;
  }

  private initDataTable(data: any): void {

  }
}
