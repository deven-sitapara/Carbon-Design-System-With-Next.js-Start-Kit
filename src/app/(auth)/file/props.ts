import { FileItem } from "@/app/types/file";
import { BaseTableItem, CustomDataTableProps, Header, TableDataPros } from "@/components/CustomDataTable/types";
import { DataTableRow } from "@carbon/react";

export function getDataTableProps(_headers:Header[],_rows: FileItem[],_renderAction: (row: DataTableRow<any[]>) => JSX.Element) : CustomDataTableProps{

    const tableData : TableDataPros = {
        headers: _headers,
        rows: _rows
    };
    const customDataTableProps: CustomDataTableProps = {
        tableData,
        title: "Files Table",
        description: "List of files",
        renderAction : _renderAction,
        isSortable: true,
        useZebraStyles: true,
        size: 'md'
    };
    
    return customDataTableProps;
}
