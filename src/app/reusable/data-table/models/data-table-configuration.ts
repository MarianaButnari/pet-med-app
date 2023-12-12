import {DataTableColumn} from "./data-table-column";

export class DataTableConfiguration {
  itemsPerPage: number;
  columnMode: string;
  pagination: boolean;
  headerHeight: number;
  columns: DataTableColumn[]

  constructor(dataTableConfig: object) {
    Object.assign(this, dataTableConfig);
  }
}
