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

const ComplaintSection = () => {
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
                    <Input id="name" placeholder="Name of your project" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label>Complaint Description</label>
                    <Textarea placeholder="Type your message here." />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button>Deploy</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ComplaintSection;
