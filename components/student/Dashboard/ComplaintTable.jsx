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

const ComplaintTable = ({ Complaints }) => {
  // console.log(Complaints);
  return (
    <Table>
      {Complaints ? (
        <TableCaption>A list of your Complaints.</TableCaption>
      ) : (
        <TableCaption>You do not have any recent Complaints.</TableCaption>
      )}
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Sr. No</TableHead>
          <TableHead>Status</TableHead>
          <TableHead> Complaint Title</TableHead>
          <TableHead className="text-right">Complaint Description</TableHead>
        </TableRow>
      </TableHeader>
      {Complaints && (
        <TableBody>
          {Complaints.map((complaint, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{complaint.status}</TableCell>
              <TableCell>{complaint.title}</TableCell>
              <TableCell className="text-right">
                {complaint.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      )}
      <TableFooter>
        <TableRow></TableRow>
      </TableFooter>
    </Table>
  );
};

export default ComplaintTable;
