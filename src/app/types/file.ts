import { BaseTableItem, TableData } from "@/components/CustomDataTable/types";

export interface FileItem extends BaseTableItem {
    title: string;
    branch: string;
    company: string;
    date: string;
  }
