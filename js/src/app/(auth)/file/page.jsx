"use client";
import CustomDataTable from "@/components/CustomDataTable/CustomDataTable";
import { Edit } from "@carbon/icons-react";
import { ComposedModal, Content, IconButton, ModalBody, ModalFooter, ModalHeader, OverflowMenu, OverflowMenuItem, Select, SelectItem, TextInput, } from "@carbon/react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import rowData from "../../../data/file.json";
const EditButton = ({ row }) => {
    const button = useRef();
    /**
     * Simple state manager for modals.
     */
    const ModalStateManager = ({ renderLauncher: LauncherContent, children: ModalContent, }) => {
        const [open, setOpen] = useState(false);
        useEffect(() => {
            if (open) {
                const modalRoot = document.createElement("div");
                document.body.appendChild(modalRoot);
                return () => {
                    document.body.removeChild(modalRoot); // Cleanup on unmount
                };
            }
        }, [open]);
        return (<>
        {ModalContent &&
                createPortal(<ModalContent open={open} setOpen={setOpen}/>, 
                // button
                // modalRoot
                document.body)}
        {LauncherContent && <LauncherContent open={open} setOpen={setOpen}/>}
      </>);
    };
    return (<ModalStateManager renderLauncher={({ setOpen }) => (<IconButton kind="ghost" size="sm" label="Edit File Record" ref={button} onClick={() => setOpen(true)}>
          <Edit />
        </IconButton>)}>
      {({ open, setOpen }) => (<ComposedModal size="sm" open={open} onClose={() => {
                setOpen(false);
            }}>
          <ModalHeader label="File Module" title={`Edit File #${row.id}`}/>
          <ModalBody>
            <p style={{
                marginBottom: "1rem",
            }}>
              Edit File Record #{row.id} with following data, Date field will be
              readonly.
            </p>
            <TextInput data-modal-primary-focus id="text-input-1" labelText="Title of File" placeholder="Title of File" value={row.title} style={{
                marginBottom: "1rem",
            }}/>
            <Select id="select-1" defaultValue="Rajkot" labelText="Branch" value={row.branch} style={{
                marginBottom: "1rem",
            }}>
              <SelectItem value="Rajkot" text="Rajkot"/>
              <SelectItem value="Morbi" text="Morbi"/>
              <SelectItem value="Bhavnagar" text="Bhavnagar"/>
              <SelectItem value="Junagadh" text="Junagadh"/>
            </Select>

            <Select id="select-1" defaultValue="HOME FIRST" labelText="Compnany" value={row.company} style={{
                marginBottom: "1rem",
            }}>
              <SelectItem value="HOME FIRST" text="HOME FIRST	"/>
              <SelectItem value="ADANI HOUSING FINANCE" text="ADANI HOUSING FINANCE"/>
            </Select>

            <TextInput readOnly={true} id="" labelText="Date" placeholder="Date" value={row.date} style={{
                marginBottom: "1rem",
            }}/>
          </ModalBody>
          <ModalFooter primaryButtonText="Update" secondaryButtonText="Cancel">
            <></>
          </ModalFooter>
        </ComposedModal>)}
    </ModalStateManager>);
};
const FileActionsMenu = (row) => {
    const rowObj = convertRowToFlatObject(row);
    return (<>
      <EditButton row={rowObj}></EditButton>
      <OverflowMenu size="sm" flipped>
        {row.id == 1 && (<OverflowMenuItem itemText="Stop app" data-id={row.id}/>)}
        <OverflowMenuItem itemText="Restart app"/>
        <OverflowMenuItem itemText="Rename app"/>
      </OverflowMenu>
    </>);
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
    return (<>
      <Content about="Main Content">
        {/* <div className="spacing-scale">
          <section className="mb-06">
            <Heading>File</Heading>
          </section>
        </div> */}

        <CustomDataTable title="File" description="Files for internal use " rows={rowData} // Pass only the current rows for display
     headers={headers} action="Action" renderAction={FileActionsMenu}/>
      </Content>
    </>);
}
function convertRowToFlatObject(row) {
    const flatObj = {};
    row.cells.forEach((cell) => {
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
