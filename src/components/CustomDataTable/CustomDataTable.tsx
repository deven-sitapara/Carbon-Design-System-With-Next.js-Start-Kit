// components/CustomDataTable/CustomDataTable.tsx
"use client";
import React, { useState } from "react";
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
  StructuredListCell,
  StructuredListWrapper,
  StructuredListHead,
  StructuredListRow,
  StructuredListBody,
} from "@carbon/react";

export default function CustomDataTable(props) {
  const [paginationPage, setPaginationPage] = useState(1);
  const [paginationPageSize, setPaginationPageSize] = useState(10);

  const totalItems = props.rows.length; // Total items based on static data

  // Calculate the current rows to display based on pagination
  const startIndex = (paginationPage - 1) * paginationPageSize;
  const endIndex = startIndex + paginationPageSize;
  const currentRows = props.rows.slice(startIndex, endIndex);

  // Calculate total pages
  const totalPages = Math.ceil(totalItems / paginationPageSize);

  // Dummy function to handle pagination change
  const handlePaginationChange = (event) => {
    setPaginationPage(event.page);
    setPaginationPageSize(event.pageSize);
  };

  const ExpandedView = ({ row }) => {
    return (
      <StructuredListWrapper>
        <StructuredListHead>
          <StructuredListRow head>
            {row.cells.map((cell, index) => {
              return (
                <StructuredListCell head data-key={cell.id} key={cell.id}>
                  {cell.info.header}
                </StructuredListCell>
              );
            })}
          </StructuredListRow>
        </StructuredListHead>
        <StructuredListBody>
          <StructuredListRow>
            {row.cells.map((cell, index) => {
              return (
                <StructuredListCell head data-key={cell.id} key={cell.id}>
                  {cell.value}
                </StructuredListCell>
              );
            })}
          </StructuredListRow>
        </StructuredListBody>
      </StructuredListWrapper>
    );
  };

  const getCurrentPageRows = (rows) => {
    let lastItemIndex = 0;

    // let { paginationPage, paginationPageSize } = this.state;

    if (paginationPage === 1 || rows.length <= paginationPageSize) {
      lastItemIndex = paginationPageSize;
      setPaginationPage(1);
    } else {
      lastItemIndex = paginationPageSize * paginationPage;
    }
    // If lastItemIndex is larger than rows.length, it wont break
    // It will just go to the end of the array
    return rows.slice((paginationPage - 1) * paginationPageSize, lastItemIndex);
  };

  return (
    <DataTable
      rows={props.rows}
      headers={props.headers}
      render={({
        rows,
        headers,
        getHeaderProps,
        getExpandHeaderProps,
        getExpandedRowProps,
        getTableProps,
        getTableContainerProps,
        getRowProps,
      }) => {
        const currentPageRows = getCurrentPageRows(rows);
        // console.log({ currentPageRows });

        return (
          <TableContainer
            title={props.title ? props.title : "Data Table"}
            description={
              props.description ? props.description : "With batch expansion"
            }
            {...getTableContainerProps()}
          >
            <Table {...getTableProps()} aria-label="table">
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
                {currentPageRows.map((row, index) => (
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
                      {props.renderAction && (
                        <TableCell className="cds--table-column-menu">
                          {props.renderAction(row)}
                        </TableCell>
                      )}
                    </TableExpandRow>

                    <TableExpandedRow
                      colSpan={headers.length + 2}
                      className="demo-expanded-td"
                      {...getExpandedRowProps({
                        row,
                      })}
                    >
                      <ExpandedView row={row}></ExpandedView>
                    </TableExpandedRow>
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
            <Pagination
              backwardText="Previous page"
              forwardText="Next page"
              itemsPerPageText="Items per page:"
              onChange={(page: number, pageSize: number) => {
                // console.log({ page, pageSize });

                setPaginationPage(page.page);
                setPaginationPageSize(page.pageSize);
              }}
              page={paginationPage}
              pageSize={paginationPageSize}
              pageSizes={[10, 20, 30, 40, 50]}
              size="md"
              totalItems={totalItems}
            />
          </TableContainer>
        );
      }}
    />
  );
}
