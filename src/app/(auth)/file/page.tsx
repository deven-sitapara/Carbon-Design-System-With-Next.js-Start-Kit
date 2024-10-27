"use client";

import React, { useState } from "react";
import _styles from "./page.scss"; // Import the SCSS module for class
import {
  Column,
  Content,
  DataTable,
  Grid,
  Heading,
  Pagination,
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
  TableSlugRow,
} from "@carbon/react";
import CustomDataTable from "@/components/CustomDataTable/CustomDataTable";

export default function FilePage() {
  const [paginationPage, setPaginationPage] = useState(1);

  // Sample header data
  const headers = [
    { key: "id", header: "ID" },
    { key: "name", header: "Name" },
    { key: "rule", header: "Role" },
    { key: "status", header: "Status" },
  ];
  // Sample row data
  const rowData = [
    {
      id: "load-balancer-1",
      name: "Load Balancer 1",
      rule: "Round robin",
      status: "Starting",
      other: "Test",
      example: "22",
    },
    {
      id: "load-balancer-2",
      name: "Load Balancer 2",
      rule: "DNS delegation",
      status: "Active",
      other: "Test",
      example: "22",
    },
    {
      id: "load-balancer-3",
      name: "Load Balancer 3",
      rule: "Round robin",
      status: "Disabled",
      other: "Test",
      example: "22",
    },
    {
      id: "load-balancer-4",
      name: "Load Balancer 4",
      rule: "Round robin",
      status: "Disabled",
      other: "Test",
      example: "22",
    },
    {
      id: "load-balancer-5",
      name: "Load Balancer 5",
      rule: "Round robin",
      status: "Disabled",
      other: "Test",
      example: "22",
    },
    {
      id: "load-balancer-6",
      name: "Load Balancer 6",
      rule: "Round robin",
      status: "Disabled",
      other: "Test",
      example: "22",
    },
    {
      id: "load-balancer-7",
      name: "Load Balancer 7",
      rule: "Round robin",
      status: "Disabled",
      other: "Test",
      example: "22",
    },
  ];

  const paginationPageSize = 5; // Set your desired page size
  const totalItems = rowData.length; // Total items based on static data

  // Calculate the current rows to display based on pagination
  const startIndex = (paginationPage - 1) * paginationPageSize;
  const endIndex = startIndex + paginationPageSize;
  const currentRows = rowData.slice(startIndex, endIndex);

  // Calculate total pages
  const totalPages = Math.ceil(totalItems / paginationPageSize);

  // Dummy function to handle pagination change
  const handlePaginationChange = (event) => {
    setPaginationPage(event.page);
    setPaginationPageSize(event.pageSize);
  };

  return (
    <>
      <Content about="Main Content">
        <div className="spacing-scale">
          <section className="mb-06">
            <Heading>File</Heading>
          </section>
        </div>

        <CustomDataTable
          rows={rowData} // Pass only the current rows for display
          headers={headers}
          page={paginationPage}
          pageSize={paginationPageSize}
          totalItems={totalItems}
          handlePaginationChange={handlePaginationChange}
        />

        {/* <DataTable rows={rows} headers={headers}>
          {({
            rows,
            headers,
            getHeaderProps,
            getRowProps,
            getExpandedRowProps,
            getExpandHeaderProps,
            getTableProps,
            getTableContainerProps,
          }) => (
            <TableContainer
              title="DataTable"
              description="With expansion"
              {...getTableContainerProps()}
            >
              <Table {...getTableProps()} aria-label="sample table">
                <TableHead>
                  <TableRow>
                    <th scope="col" />
                    <TableExpandHeader
                      enableToggle={true}
                      {...getExpandHeaderProps()}
                    />
                    {headers.map((header, i) => (
                      <TableHeader key={i}>{header}</TableHeader>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(rows).map((row, i) => (
                    <React.Fragment key={i}>
                      <TableExpandRow aria-label="a">
                        <TableSlugRow
                          slug={i === 3 || i === 4 || i === 1 ? aiLabel : null}
                        />
                        {Object.entries(row).map((cell, i) => (
                          <TableCell key={i}>{cell}</TableCell>
                        ))}
                      </TableExpandRow>
                      <TableExpandedRow
                        colSpan={headers.length + 2}
                        className="demo-expanded-td"
                      >
                        <h6>Expandable row content</h6>
                        <div>Description here</div>
                      </TableExpandedRow>
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </DataTable>
        <Pagination
          backwardText="Previous page"
          forwardText="Next page"
          itemsPerPageText="Items per page:"
          onChange={() => {}}
          page={1}
          pageSize={10}
          pageSizes={[10, 20, 30, 40, 50]}
          size="md"
          totalItems={103}
        /> */}

        {/* // Grid  */}
      </Content>
    </>
  );
}
