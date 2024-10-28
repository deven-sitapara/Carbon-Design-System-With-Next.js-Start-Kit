"use client";
import _styles from "./page.scss"; // Import the SCSS module for class
import {
  Content,
  Heading,
  IconButton,
  OverflowMenu,
  OverflowMenuItem,
} from "@carbon/react";
import CustomDataTable from "@/components/CustomDataTable/CustomDataTable";
import rowData from "../../../data/file.json";
import { Edit, View } from "@carbon/icons-react";

const FileActionsMenu = (row) => {
  return (
    <>
      <IconButton kind="ghost" size="sm" label="label">
        {/* <View /> */}
        <Edit />
      </IconButton>
      <OverflowMenu size="sm" flipped>
        {row.id == 1 && (
          <OverflowMenuItem itemText="Stop app" data-id={row.id} />
        )}
        <OverflowMenuItem itemText="Restart app" />
        <OverflowMenuItem itemText="Rename app" />
      </OverflowMenu>
    </>
  );
};

export default function FilePage() {
  // Sample header data
  const headers = [
    { key: "id", header: "ID" },
    { key: "title", header: "Title" },
    { key: "branch", header: "Branch" },
    { key: "company", header: "Company" },
    { key: "date", header: "Date" },
    // { key: "created_by", header: "created_by" },
  ];

  return (
    <>
      <Content about="Main Content">
        {/* <div className="spacing-scale">
          <section className="mb-06">
            <Heading>File</Heading>
          </section>
        </div> */}

        <CustomDataTable
          title="File"
          description="Files for internal use "
          rows={rowData} // Pass only the current rows for display
          headers={headers}
          action="Action"
          renderAction={FileActionsMenu}
        />
      </Content>
    </>
  );
}
