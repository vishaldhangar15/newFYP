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
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { verifyStudent } from '@/backend/admin';
import { useState } from 'react';
import toast from 'react-hot-toast';

const AdmitStudentDialog = ({
  id,
  registeredStudents,
  setRegisteredStudents,
}) => {
  const [roomNo, setRoomNo] = useState('');

  const handleSubmit = async () => {
    if (!roomNo) {
      toast.error('Please enter the room number');
      return;
    }
    const data = {
      roomNo: roomNo,
      id: id,
    };

    const res = await verifyStudent(data);

    if (res.status === 200) {
      toast.success(res.message);
      // delete the student from the list
      const newList = registeredStudents.filter(
        (student) => student._id !== id
      );
      setRegisteredStudents(newList);
      setRoomNo('');
    } else {
      toast.error(res.message);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">
          <CheckCircle className="text-primary" size={20} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Admit Student?</AlertDialogTitle>
          <AlertDialogDescription>
            Pls enter the room number
            <Input
              required={true}
              onChange={(e) => setRoomNo(e.target.value)}
              value={roomNo}
              placeholder="Room Number"
              className="mt-4"
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleSubmit}>Admit</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AdmitStudentDialog;
