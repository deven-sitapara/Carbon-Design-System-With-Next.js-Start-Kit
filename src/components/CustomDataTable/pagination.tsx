"use client";
import React from "react";
import { Pagination } from "@carbon/react";
// pagination.tsx

interface CustomPaginationProps {
  paginationPage: number;
  totalItems: number;
  pageSize: number;
  onChange: (page: { page: number; pageSize: number }) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = (props) => {
  return (
    <>
      <Pagination
        backwardText="Previous page"
        forwardText="Next page"
        itemsPerPageText="Items per page:"
        onChange={(page) => props.onChange(page)}
        page={props.paginationPage}
        pageSize={props.pageSize}
        pageSizes={[10, 20, 30, 40, 50]}
        size="md"
        totalItems={props.totalItems}
      />
    </>
  );
};

export default CustomPagination;
