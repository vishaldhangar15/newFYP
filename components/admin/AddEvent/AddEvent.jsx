import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CalendarIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import toast from 'react-hot-toast';
import { addEvent } from '@/backend/admin';

const AddEvent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [title, setTitle] = useState();
  const [venue, setVenue] = useState('');
  const [other, setOther] = useState('');
  const nextYearDate = new Date();
  nextYearDate.setFullYear(startDate.getFullYear() + 1);
  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(startDate.getDate(), endDate.getDate(), other);
    const Event = {
      from: format(startDate, 'dd-MM-yyyy'),
      to: format(endDate, 'dd-MM-yyyy'),
      title: title,
      venue: venue,
      other: other,
    };

    // check if start date is greater than todays data
    if (
      startDate.getDate() <= new Date().getDate() &&
      startDate.getMonth() <= new Date().getMonth() &&
      startDate.getFullYear() <= new Date().getFullYear()
    ) {
      toast.error('Start data cannot be less than today!');
      return;
    }
    if (
      endDate.getDate() < startDate.getDate() &&
      endDate.getMonth() <= startDate.getMonth() &&
      endDate.getFullYear() <= startDate.getFullYear()
    ) {
      toast.error('End date cannot be less than start date!');
      return;
    }
    console.log(Event);
    const res = await addEvent(Event);

    if (res.status === 200) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };
  return (
    <div className=" flex flex-col ">
      <div className={cn('text-center font-extrabold  text-5xl  m-10')}>
        Add an Event
      </div>
      <div className="flex items-center justify-center">
        <div className="">
          <Card className=" md:w-[450px] w-[370px] ">
            <CardHeader>
              <CardTitle>Event</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">From</Label>
                    {/* calender  */}
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full justify-start text-left font-normal',
                            !startDate && 'text-muted-foreground'
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {startDate ? (
                            format(startDate, 'PPP')
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={startDate}
                          disabled={(date) =>
                            date <= new Date() || date > nextYearDate
                          }
                          onSelect={setStartDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    {/* calender  */}
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label>To</label>
                    {/* calender  */}
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full justify-start text-left font-normal',
                            !endDate && 'text-muted-foreground'
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {endDate ? (
                            format(endDate, 'PPP')
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={endDate}
                          disabled={(date) =>
                            date <= new Date() || date > nextYearDate
                          }
                          onSelect={setEndDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    {/* calender  */}
                  </div>
                  <div>
                    <label>Title</label>
                    <Input
                      required={true}
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div>
                    <label>Venue</label>
                    <Input
                      required={true}
                      value={venue}
                      onChange={(e) => setVenue(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div>
                    <label>Other (optional)</label>
                    <Textarea
                      value={other}
                      onChange={(e) => setOther(e.target.value)}
                    ></Textarea>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button onClick={handleSubmit}>Submit</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
