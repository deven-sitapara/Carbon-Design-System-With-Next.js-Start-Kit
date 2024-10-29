// components/CustomDataTable/CustomDataTable.tsx
"use client";
import {
  DataTable,
  DataTableRow,
  Pagination,
  StructuredListBody,
  StructuredListCell,
  StructuredListHead,
  StructuredListRow,
  StructuredListWrapper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableExpandedRow,
  TableExpandHeader,
  TableExpandRow,
  TableHead,
  TableHeader,
  TableRow,
} from "@carbon/react";
import React, { useState } from "react";

interface Header {
  key: string;
  header: string;
}

export default function CustomDataTable({
  title,
  description,
  rows,
  headers,
  action,
  renderAction,
}: {
  title: string;
  description: string;
  rows: {
    id: number;
    title: string;
    branch: string;
    company: string;
    date: string;
    updated_at: string;
    created_by: string;
  }[];
  headers: Header[];
  action: string;
  renderAction: (row: any) => JSX.Element;
}) {
  const [paginationPage, setPaginationPage] = useState(1);
  const [paginationPageSize, setPaginationPageSize] = useState(10);

  const totalItems = rows.length; // Total items based on static data

  const ExpandedView = ({ row }: { row: DataTableRow<any[]> }) => {
    return (
      <StructuredListWrapper>
        <StructuredListHead>
          <StructuredListRow head>
            {row.cells.map((cell) => {
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
            {row.cells.map((cell) => {
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

  const getCurrentPageRows = (rows: DataTableRow<any[]>[]) => {
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
      rows={rows.map((row) => ({ ...row, id: String(row.id) }))} // ensures id is a string
      headers={headers}
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
            title={title ? title : "Data Table"}
            description={description ? description : "With batch expansion"}
            {...getTableContainerProps()}
          >
            <Table {...getTableProps()} aria-label="table">
              <TableHead>
                <TableRow>
                  <TableExpandHeader
                    enableToggle={true}
                    {...getExpandHeaderProps()}
                  />
                  {headers.map((header) => (
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
                  {action && <TableHeader>Action</TableHeader>}
                </TableRow>
              </TableHead>

              <TableBody>
                {currentPageRows.map((row) => (
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
                      {renderAction && (
                        <TableCell className="cds--table-column-menu">
                          {renderAction(row)}
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
              onChange={(page: { page: number; pageSize: number }) => {
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
