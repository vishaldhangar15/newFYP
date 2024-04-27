import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { addComplaint } from '@/backend/student';

const ComplaintSection = () => {
  const [complaintTitle, setComplaintTitle] = useState('');
  const [complaintDescription, setComplaintDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Do something with the collected data, e.g., send it to a server
    const formData = {
      title: complaintTitle,
      description: complaintDescription,
    };
    console.log(formData); // For demonstration, log the collected data
    if (complaintTitle === '' || complaintDescription === '') {
      toast.error('Please fill all the fields');
      return;
    }
    // setting complaint title lenght to be 5
    if (complaintTitle.length < 5) {
      toast.error('Complaint title should be atleast 5 characters');
      return;
    }
    // description length ot be 10
    if (complaintDescription.length < 10) {
      toast.error('Complaint description should be atleast 10 characters');
      return;
    }

    const res = await addComplaint(formData);
    // console.log(res)

    if (res.status === 200) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
    // Reset form fields
    setComplaintTitle('');
    setComplaintDescription('');
  };

  return (
    <div className=" flex flex-col ">
      <div className={cn('text-center font-extrabold  text-5xl  m-10')}>
        Having Any Issu ? Let us Know
      </div>
      <div className="flex items-center justify-center">
        <div className="md:m-12">
          <Card className=" md:w-[450px] w-[370px] ">
            <CardHeader>
              <CardTitle>Complaint</CardTitle>
              <CardDescription>Drop your comment below </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Complaint Title</Label>
                    <Input
                      value={complaintTitle}
                      onChange={(e) => setComplaintTitle(e.target.value)}
                      id="name"
                      placeholder="Name of your project"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label>Complaint Description</label>
                    <Textarea
                      alue={complaintDescription}
                      onChange={(e) => setComplaintDescription(e.target.value)}
                      placeholder="Type your message here."
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button onClick={handleSubmit}>Submmit</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ComplaintSection;
