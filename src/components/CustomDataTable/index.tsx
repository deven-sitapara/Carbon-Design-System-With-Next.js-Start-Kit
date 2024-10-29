"use client";
import {
  DataTable,
  DataTableRow,
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
import { CustomDataTableProps } from "./types";
import ExpandedView from "./expanded";
import CustomPagination from "./pagination";

export default function CustomDataTable(props: CustomDataTableProps) {
  const [paginationPage, setPaginationPage] = useState(1);
  const [paginationPageSize, setPaginationPageSize] = useState(10);

  const totalItems = props.tableData.rows.length; // Total items based on static data

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
      rows={props.tableData.rows.map((row) => ({ ...row, id: String(row.id) }))} // ensures id is a string
      headers={props.tableData.headers}
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
              {/* Table Header  */}
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
                  {props?.action && <TableHeader>Action</TableHeader>}
                </TableRow>
              </TableHead>

              {/* Table Body here  */}
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

            {/* Pagination here  */}
            <CustomPagination
              onChange={(page: { page: number; pageSize: number }) => {
                setPaginationPage(page.page);
                setPaginationPageSize(page.pageSize);
              }}
              paginationPage={paginationPage}
              pageSize={paginationPageSize}
              totalItems={totalItems}
            />
          </TableContainer>
        );
      }}
    />
  );
}
