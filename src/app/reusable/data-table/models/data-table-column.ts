import {TemplateRef} from "@angular/core";

export class DataTableColumn {
  name: string;
  prop: string;
  // flexGrow: number;
  // minWidth: number;
  // maxWidth: number;
  // width: number;
  resizeable: boolean;
  // comparator
  sortable: boolean;
  draggable: boolean;
  // canAutoResize: boolean;
  // cellTemplate: TemplateRef<any>;
  // headerTemplate: TemplateRef<any>;
  // checkboxable: boolean;
  // headerCheckboxable: boolean;
  headerClass: string | Function;
  // cellClass: string | Function;
  // frozenLeft: boolean;
  // frozenRight: boolean;
  constructor(column: object) {
    Object.assign(this, column);
  }
}
