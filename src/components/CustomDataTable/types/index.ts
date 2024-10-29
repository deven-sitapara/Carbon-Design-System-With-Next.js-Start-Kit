import { DataTableRow } from "@carbon/react";

export type Header = {
  key: string;
  header: string;
}
// exports header interface

export interface BaseTableItem {
  id: number;
  created_by: string;
  updated_at: string;
}

// Generic type for table data
export type TableData<T extends BaseTableItem> = T[];

 
export type TableDataPros = {
  headers: Header[],
  rows: BaseTableItem[],
}
 
// create a common props with above type 
export type CustomDataTableProps = {
  tableData: TableDataPros, // rows and headers 
  title: string,
  description?: string,
  action?: string,
  renderAction?: (row: DataTableRow<any[]>) => JSX.Element,
  isSortable?: true,
  useZebraStyles?: true,
  size?: 'md'
}