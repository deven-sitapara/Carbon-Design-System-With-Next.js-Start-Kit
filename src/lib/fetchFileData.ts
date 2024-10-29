export default function convertRowToFlatObject(row: any) {
  const flatObj: { [key: string]: any } = {};
  row.cells.forEach((cell: { info: { header: string }; value: any }) => {
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
