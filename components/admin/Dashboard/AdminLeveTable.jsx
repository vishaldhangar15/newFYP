import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
const AdminLeveTable = ({ registeredStudents }) => {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Sr. No.</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Email</TableHead>
        </TableRow>
      </TableHeader>
      {registeredStudents && (
        <TableBody>
          {registeredStudents.map((obj, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{`${obj.firstName} ${obj.lastName}`}</TableCell>
              <TableCell className="text-right">{obj?.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      )}
    </Table>
  );
};

export default AdminLeveTable;
