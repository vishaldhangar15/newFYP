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

import { Button } from '@/components/ui/button';
import { getRegisteredStudents } from '@/backend/admin';
import { useEffect, useState } from 'react';
import AdmitStudentDialog from './AdmitStudentDialog';
import DeleteStudentDialog from './DeleteStudentDialog';
const AdmitStudent = () => {
  const [registeredStudents, setRegisteredStudents] = useState([]);
  const getStudentsData = async () => {
    const res = await getRegisteredStudents();
    if (res.status === 200) {
      setRegisteredStudents(res.data);
    }
  };

  useEffect(() => {
    getStudentsData();
  }, [registeredStudents]);
  return (
    <div>
      <div className=" text-2xl md:text-3xl text-foreground font-extrabold text-center ">
        Newly Reisterred Students
      </div>
      <div className="md:px-16">
        {registeredStudents.length > 0 ? (
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Sr. No.</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Verify</TableHead>
              </TableRow>
            </TableHeader>
            {registeredStudents && (
              <TableBody>
                {registeredStudents.map((obj, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>{`${obj.firstName} ${obj.lastName}`}</TableCell>
                    <TableCell className="flex justify-end gap-4 ">
                      <AdmitStudentDialog
                        id={obj._id}
                        registeredStudents={registeredStudents}
                        setRegisteredStudents={setRegisteredStudents}
                      />
                      <DeleteStudentDialog id={obj._id} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
        ) : (
          <div className="text-center text-foreground font-bold mt-10 ">
            No students found
          </div>
        )}
      </div>
    </div>
  );
};

export default AdmitStudent;
