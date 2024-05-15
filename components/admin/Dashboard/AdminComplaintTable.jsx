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

const AdminComplaintTable = ({ complaints }) => {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Sr.No.</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      {complaints ? (
        <TableBody>
          {complaints.map((complaint, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{complaint.title}</TableCell>
              <TableCell>{complaint.description}</TableCell>
              <TableCell>{complaint.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      ) : (
        <div
          className="text-center
      text-2xl"
        >
          No Complaints
        </div>
      )}
    </Table>
  );
};

export default AdminComplaintTable;
