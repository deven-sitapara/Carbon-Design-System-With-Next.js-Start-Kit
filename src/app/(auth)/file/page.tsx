"use client";
import CustomDataTable from "@/components/CustomDataTable/index";
import { Content, OverflowMenu, OverflowMenuItem } from "@carbon/react";
import React, { useRef, useState } from "react";
import rowData from "../../../data/file.json";
import { getDataTableProps } from "./props";
import { FileItem } from "@/app/types/file";
import FileActionsMenu from "./components/action";
import {
  CustomDataTableProps,
  Header,
} from "@/components/CustomDataTable/types";

export default function FilePage() {
  // Sample header data
  const headers: Header[] = [
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
        <CustomDataTable
          {...getDataTableProps(headers, rowData, FileActionsMenu)}
        />
      </Content>
    </>
  );
}
