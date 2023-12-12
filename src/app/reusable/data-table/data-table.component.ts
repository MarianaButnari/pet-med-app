import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ColumnMode, NgxDatatableModule} from "@swimlane/ngx-datatable";
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";
import {ReusableModule} from "../reusable.module";
import {DataTableConfiguration} from "./models/data-table-configuration";
import {TranslateModule} from "@ngx-translate/core";
import {DataTableColumn} from "./models/data-table-column";

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, NgxDatatableModule, NgbPagination, TranslateModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent<T> implements OnChanges {
  @Input() dataTableConfiguration!: DataTableConfiguration;
  columns: DataTableColumn[];
  rows: T[];
  page: number;
  pageSize: number;
  ColumnMode = ColumnMode;

  ngOnChanges(changes: SimpleChanges): void {
    const dataChanges = changes['dataTableConfiguration']?.currentValue;
    if (dataChanges) {
      this.initDataTable(dataChanges);
    }
  }

  private initDataTable(data: DataTableConfiguration): void {
    this.columns = data.columns.map(column => new DataTableColumn(column));
    this.pageSize = data.itemsPerPage;
  }
}
