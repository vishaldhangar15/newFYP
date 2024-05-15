import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const EventCard = ({ data }) => {
  console.log(data);
  const name = '';
  const student = undefined;
  return (
    <div className="w-[300px]   m-8    font-normal   shadow-lg rounded-lg overflow-hidden">
      <div className=" text-foreground font-extrabold text-3xl text-left m-4  ">
        <spaN>{data?.title}</spaN>
      </div>
      <div className="text-base text-foreground text-left m-4  ">
        <label>From : </label>
        <spaN>{data?.from}</spaN>
      </div>
      <div className="text-base text-foreground text-left m-4  ">
        <label>To : </label>
        <spaN>{data?.to}</spaN>
      </div>
      <div className="text-base text-foreground text-left m-4  ">
        <label>Venue : </label>
        <spaN>{data?.venue}</spaN>
      </div>
      <div className="text-base text-foreground text-left m-4  ">
        <label>Other : </label>
        {/* showing data.ohter if exists otherwise showing none  */}
        <spaN>{data?.other || 'none'}</spaN>
      </div>
    </div>
  );
};

export default EventCard;
