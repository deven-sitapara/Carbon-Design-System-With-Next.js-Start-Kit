// import { FileItem } from "@/app/types/file";
import { DataTableRow, OverflowMenu, OverflowMenuItem } from "@carbon/react";
import EditButton from "./edit";
import convertRowToFlatObject from "@/lib/fetchFileData";

const FileActionsMenu = (row: DataTableRow<any[]>) => {
  //   const rowObj = convertRowToFlatObject(row);

  return (
    <>
      <EditButton row={row}></EditButton>
      <OverflowMenu size="sm" flipped>
        {row.id == "1" && (
          <OverflowMenuItem itemText="Stop app" data-id={row.id} />
        )}
        <OverflowMenuItem itemText="Restart app" />
        <OverflowMenuItem itemText="Rename app" />
      </OverflowMenu>
    </>
  );
};

export default FileActionsMenu;
