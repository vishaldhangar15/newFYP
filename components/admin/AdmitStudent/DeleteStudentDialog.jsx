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
import { CircleX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { deleteStudent } from '@/backend/admin';
import toast from 'react-hot-toast';
const DeleteStudentDialog = ({
  id,
  registeredStudents,
  setRegisteredStudents,
}) => {
  const handleSubmit = async () => {
    const data = {
      id: id,
    };
    const res = await deleteStudent(data);
    if (res.status === 200) {
      toast.success(res.message);
      // delete the student from the list
      // console.log('before deletion');
      // console.log(registeredStudents);
      if (registeredStudents) {
        const newList = registeredStudents.filter(
          (student) => student._id !== id
        );
        // console.log('after deletion');
        // console.log(newList);

        setRegisteredStudents(newList);
      }
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">
          <CircleX className="text-red-500" size={20} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete the Student?</AlertDialogTitle>
          <AlertDialogDescription>
            The student will be permenently deleted.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleSubmit}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteStudentDialog;
