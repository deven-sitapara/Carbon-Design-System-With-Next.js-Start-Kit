import { Edit } from "@carbon/icons-react";
import {
  ComposedModal,
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

export default EditButton;
