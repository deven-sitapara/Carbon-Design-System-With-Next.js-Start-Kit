"use client";
import CustomDataTable from "@/components/CustomDataTable/CustomDataTable";
import { Edit } from "@carbon/icons-react";
import {
  ComposedModal,
  Content,
  IconButton,
  ModalBody,
  ModalFooter,
  ModalHeader,
  OverflowMenu,
  OverflowMenuItem,
  Select,
  SelectItem,
  TextInput,
} from "@carbon/react";
import React, { useRef, useState } from "react";
import rowData from "../../../data/file.json";

interface RowData {
  id: number;
  title: string;
  branch: string;
  company: string;
  date: string;
}

interface ModalStateManagerProps {
  renderLauncher: (props: { setOpen: (open: boolean) => void }) => JSX.Element;
  children: (props: {
    open: boolean;
    setOpen: (open: boolean) => void;
  }) => JSX.Element;
}

const ModalStateManager: React.FC<ModalStateManagerProps> = ({
  renderLauncher,
  children,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {renderLauncher({ setOpen })}
      {children({ open, setOpen })}
    </div>
  );
};

const EditButton: React.FC<{ row: RowData }> = ({ row }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <ModalStateManager
      renderLauncher={({ setOpen }) => (
        <IconButton
          kind="ghost"
          size="sm"
          label="Edit File Record"
          ref={buttonRef}
          onClick={() => setOpen(true)}
        >
          <Edit />
        </IconButton>
      )}
    >
      {({ open, setOpen }) => (
        <ComposedModal size="sm" open={open} onClose={() => setOpen(false)}>
          <ModalHeader label="File Module" title={`Edit File #${row.id}`} />
          <ModalBody>
            <p style={{ marginBottom: "1rem" }}>
              Edit File Record #{row.id} with the following data; the Date field
              will be readonly.
            </p>
            <TextInput
              data-modal-primary-focus
              id="title-input"
              labelText="Title of File"
              placeholder="Title of File"
              value={row.title}
              style={{ marginBottom: "1rem" }}
            />
            <Select
              id="branch-select"
              labelText="Branch"
              value={row.branch}
              style={{ marginBottom: "1rem" }}
            >
              {["Rajkot", "Morbi", "Bhavnagar", "Junagadh"].map((branch) => (
                <SelectItem key={branch} value={branch} text={branch} />
              ))}
            </Select>
            <Select
              id="company-select"
              labelText="Company"
              value={row.company}
              style={{ marginBottom: "1rem" }}
            >
              {["HOME FIRST", "ADANI HOUSING FINANCE"].map((company) => (
                <SelectItem key={company} value={company} text={company} />
              ))}
            </Select>
            <TextInput
              readOnly
              id="date-input"
              labelText="Date"
              placeholder="Date"
              value={row.date}
              style={{ marginBottom: "1rem" }}
            />
          </ModalBody>
          <ModalFooter primaryButtonText="Update" secondaryButtonText="Cancel">
            <div></div>
          </ModalFooter>
        </ComposedModal>
      )}
    </ModalStateManager>
  );
};
const FileActionsMenu = (row: any) => {
  const rowObj = convertRowToFlatObject(row);

  return (
    <>
      <EditButton row={rowObj}></EditButton>
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
interface Header {
  key: string;
  header: string;
}

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

function convertRowToFlatObject(row: any): RowData {
  const flatObj: { [key: string]: any } = {};
  row.cells.forEach((cell: { info: { header: string }; value: any }) => {
    flatObj[cell.info.header] = cell.value;
  });

  // Convert id to a number
  return {
    id: Number(flatObj.id) || 0, // default to 0 if id is not present
    title: flatObj.title || "",
    branch: flatObj.branch || "",
    company: flatObj.company || "",
    date: flatObj.date || "",
  };
}
