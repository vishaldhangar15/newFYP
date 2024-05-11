import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { deleteComplaint } from '@/backend/admin';
import toast from 'react-hot-toast';
const DeleteComplaintDialog = ({ id, setComplaints, complaints }) => {
  const hadnleClikc = async (id) => {
    const res = await deleteComplaint(id);
    if (res.status === 200) {
      toast.success(res.message);
      // deleting the complaint from the list
      const newList = complaints.filter((complaint) => complaint._id !== id);
      setComplaints(newList);
    } else {
      toast.error(res.message);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">
          <Trash2 size={20} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Do you want ot delete the complaint?
          </AlertDialogTitle>
          <AlertDialogDescription></AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => hadnleClikc(id)}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteComplaintDialog;
