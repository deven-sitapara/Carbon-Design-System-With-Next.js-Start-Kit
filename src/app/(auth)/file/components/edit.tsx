import convertRowToFlatObject from "@/lib/fetchFileData";
import { Edit } from "@carbon/icons-react";
import {
  ComposedModal,
  DataTableRow,
  IconButton,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  TextInput,
} from "@carbon/react";
import React, { useRef, useState } from "react";

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
const EditButton: React.FC<{ row: DataTableRow<any[]> }> = ({ row }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const rowObj = convertRowToFlatObject(row);

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
      {({ open, setOpen }) =>
        rowObj &&
        rowObj.title && (
          <ComposedModal size="sm" open={open} onClose={() => setOpen(false)}>
            <ModalHeader
              label="File Module"
              title={`Edit File #${rowObj.id}`}
            />
            <ModalBody>
              <p style={{ marginBottom: "1rem" }}>
                Edit File Record #{rowObj.id} with the following data; the Date
                field will be readonly.
              </p>
              <TextInput
                data-modal-primary-focus
                id="title-input"
                labelText="Title of File"
                placeholder="Title of File"
                value={rowObj?.title}
                style={{ marginBottom: "1rem" }}
              />
              <Select
                id="branch-select"
                labelText="Branch"
                value={rowObj?.branch}
                style={{ marginBottom: "1rem" }}
              >
                {["Rajkot", "Morbi", "Bhavnagar", "Junagadh"].map((branch) => (
                  <SelectItem key={branch} value={branch} text={branch} />
                ))}
              </Select>
              <Select
                id="company-select"
                labelText="Company"
                value={rowObj?.company}
                style={{ marginBottom: "1rem" }}
              >
                {["HOME FIRST", "ADANI` HOUSING FINANCE"].map((company) => (
                  <SelectItem key={company} value={company} text={company} />
                ))}
              </Select>
              <TextInput
                readOnly
                id="date-input"
                labelText="Date"
                placeholder="Date"
                value={rowObj.date}
                style={{ marginBottom: "1rem" }}
              />
            </ModalBody>
            <ModalFooter
              primaryButtonText="Update"
              secondaryButtonText="Cancel"
            >
              <div></div>
            </ModalFooter>
          </ComposedModal>
        )
      }
    </ModalStateManager>
  );
};

export default EditButton;
