// components/CustomDataTable/CustomDataTable.tsx

import React from "react";
import {
  DataTable,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
  Pagination,
  TableExpandRow,
  TableExpandedRow,
  TableExpandHeader,
  OverflowMenu,
  OverflowMenuItem,
  Column,
  Content,
  FlexGrid,
  Row,
  Grid,
  StructuredListCell,
  StructuredListWrapper,
  StructuredListHead,
  StructuredListRow,
  StructuredListBody,
} from "@carbon/react";
import { log } from "console";

export default function CustomDataTable(props) {
  // console.log(props.rows);

  return (
    <DataTable
      rows={props.rows}
      headers={props.headers}
      render={({
        rows,
        headers,
        getHeaderProps,
        getExpandHeaderProps,
        getRowProps,
        getExpandedRowProps,
        getTableProps,
        getTableContainerProps,
      }) => (
        <TableContainer
          title="DataTable"
          description="With batch expansion"
          {...getTableContainerProps()}
        >
          <Table {...getTableProps()} aria-label="sample table">
            <TableHead>
              <TableRow>
                <TableExpandHeader
                  enableToggle={true}
                  {...getExpandHeaderProps()}
                />
                {headers.map((header, i) => (
                  <TableHeader
                    {...getHeaderProps({
                      header,
                    })}
                    key={header.key}
                  >
                    {header.header}
                  </TableHeader>
                ))}

                {/* Conditionally render Action column header */}
                {props.action && <TableHeader>Action</TableHeader>}
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row) => (
                <React.Fragment key={row.id}>
                  <TableExpandRow
                    {...getRowProps({
                      row,
                    })}
                    key={row.id}
                  >
                    {row.cells.map((cell, index) => (
                      <TableCell
                        key={index}
                        data-index={index}
                        data-value={cell.value}
                      >
                        {cell.value}
                      </TableCell>
                    ))}

                    {/* // action  */}
                    {props.renderAction && props.renderAction(row)}

                    {/* <TableCell className="cds--table-column-menu">
                      <OverflowMenu size="sm" flipped>
                        <OverflowMenuItem itemText="Stop app" />
                        <OverflowMenuItem itemText="Restart app" />
                        <OverflowMenuItem itemText="Rename app" />
                      </OverflowMenu>
                    </TableCell> */}
                  </TableExpandRow>

                  <TableExpandedRow
                    colSpan={headers.length + 2}
                    className="demo-expanded-td"
                    {...getExpandedRowProps({
                      row,
                    })}
                  >
                    <StructuredListWrapper>
                      <StructuredListHead>
                        <StructuredListRow head>
                          {Object.keys(row).map((key) => {
                            return (
                              <StructuredListCell head data-key={key} key={key}>
                                {key}
                              </StructuredListCell>
                            );
                          })}
                        </StructuredListRow>
                      </StructuredListHead>
                      <StructuredListBody>
                        <StructuredListRow>
                          {Object.keys(row).map((key) => {
                            return (
                              <StructuredListCell head data-key={key} key={key}>
                                {row.id}
                              </StructuredListCell>
                            );
                          })}

                          {/* {row.cells.map((cell, index) => (
                            <>
                              <StructuredListCell>
                                {cell.value}
                              </StructuredListCell>
                            </>
                          ))} */}
                        </StructuredListRow>
                      </StructuredListBody>
                    </StructuredListWrapper>

                    {/* <h6>Expandable row content</h6>
                    <div>Description here</div> */}
                  </TableExpandedRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    />
  );
}

{
  /* <Pagination
            backwardText="Previous page"
            forwardText="Next page"
            itemsPerPageText="Items per page:"
            onChange={() => {}}
            page={1}
            pageSize={10}
            pageSizes={[10, 20, 30, 40, 50]}
            size="md"
            totalItems={103}
          /> */
}
