import {
  DataTableRow,
  StructuredListBody,
  StructuredListCell,
  StructuredListHead,
  StructuredListRow,
  StructuredListWrapper,
} from "@carbon/react";

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

//   return (
//     <StructuredListWrapper>
//       <StructuredListHead>
//         <StructuredListRow head>
//           {Object.entries(row).map(([key, value]) => {
//             return (
//               <StructuredListCell head data-key={key} key={key}>
//                 {key}
//               </StructuredListCell>
//             );
//           })}
//         </StructuredListRow>
//       </StructuredListHead>
//       <StructuredListBody>
//         <StructuredListRow>
//           {Object.entries(row).map(([key, value]) => {
//             return (
//               <StructuredListCell head data-key={key} key={key}>
//                 {value}
//               </StructuredListCell>
//             );
//           })}
//         </StructuredListRow>
//       </StructuredListBody>
//     </StructuredListWrapper>
//   );

export default ExpandedView;
