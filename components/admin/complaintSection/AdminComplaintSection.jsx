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
import { Button } from '@/components/ui/button';
const AdminComplaintSection = () => {
  const invoices = [
    {
      invoice: 'INV001',
      paymentStatus: 'Paid',
      totalAmount: '$250.00',
      paymentMethod: 'Credit Card',
    },
    {
      invoice: 'INV002',
      paymentStatus: 'Pending',
      totalAmount: '$150.00',
      paymentMethod: 'PayPal',
    },
    {
      invoice: 'INV003',
      paymentStatus: 'Unpaid',
      totalAmount: '$350.00',
      paymentMethod: 'Bank Transfer',
    },
    {
      invoice: 'INV004',
      paymentStatus: 'Paid',
      totalAmount: '$450.00',
      paymentMethod: 'Credit Card',
    },
    {
      invoice: 'INV005',
      paymentStatus: 'Paid',
      totalAmount: '$550.00',
      paymentMethod: 'PayPal',
    },
    {
      invoice: 'INV006',
      paymentStatus: 'Pending',
      totalAmount: '$200.00',
      paymentMethod: 'Bank Transfer',
    },
    {
      invoice: 'INV007',
      paymentStatus: 'Unpaid',
      totalAmount: '$300.00',
      paymentMethod: 'Credit Card',
    },
  ];

  const [complaints, setComplaints] = useState([]);
  const fetchComplaints = async () => {
    const res = await getComplaints();
    if (res.status === 200) {
      setComplaints(res.data);
    }
  };
  useEffect(() => {
    fetchComplaints();
  }, []);
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
                    <Button variant="outline">
                      <Trash2 size={20} />
                    </Button>
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
