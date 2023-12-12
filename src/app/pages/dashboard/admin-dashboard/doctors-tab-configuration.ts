import {ColumnMode} from "@swimlane/ngx-datatable";

export const doctorsTabConfiguration = {
  itemsPerPage: 10,
  columnMode: ColumnMode.force,
  pagination: true,
  headerHeight: 100,
  columns: [
    {
      name: 'TABLE.NAME',
      prop: 'name',
      resizeable: false,
      sortable: false,
      draggable: false,
      headerClass: 'p-4',
    }, {
      name: 'TABLE.INSTITUTION',
      prop: 'institution',
      resizeable: false,
      sortable: false,
      draggable: false,
      headerClass: 'p-4',
    }, {
      name: 'TABLE.MED_SPECIALITY',
      prop: 'medSpecialty',
      resizeable: false,
      sortable: false,
      draggable: false,
      headerClass: 'p-4',
    }
  ]
}
