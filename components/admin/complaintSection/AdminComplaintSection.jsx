import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from '@/components/ui/table';
import { Trash2 } from 'lucide-react';

import { getComplaints } from '@/backend/admin';
import { useEffect, useState } from 'react';

import DeleteComplaintDialog from './DeleteComplaintDialog';
const AdminComplaintSection = () => {
  const [complaints, setComplaints] = useState([]);
  const fetchComplaints = async () => {
    const res = await getComplaints();
    if (res.status === 200) {
      setComplaints(res.data);
    }
  };
  useEffect(() => {
    fetchComplaints();
  }, [complaints.length]);
  // console.log(complaints);

  return (
    <div>
      <div className="text-3xl font-bold text-center">Complaint</div>
      <div className="md:px-16">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Sr.No.</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
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
                  <TableCell className="flex justify-end text-red-500">
                    <DeleteComplaintDialog
                      id={complaint._id}
                      setComplaints={setComplaints}
                      complaints={complaints}
                    />
                  </TableCell>
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
      </div>
    </div>
  );
};

export default AdminComplaintSection;
