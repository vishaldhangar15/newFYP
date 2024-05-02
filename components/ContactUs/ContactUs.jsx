import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactUs = () => {
  return (
    <div>
      <section className="text-foreground body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0 filter  contrast-125 opacity-50"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9734364689693!2d72.85340090866987!3d19.02089215362998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf26c0b2e16d%3A0xc68a71bc4738e61c!2sVJTI%20Hostel%20B!5e0!3m2!1sen!2sin!4v1714647813036!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
            ></iframe>
            <div className="relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Photo booth tattooed prism, portland taiyaki hoodie neutra
                  typewriter
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-primary leading-relaxed">
                  example@email.com
                </a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-foreground text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-foreground">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div className="relative mb-4">
              <label for="name" className="leading-7 text-sm text-foreground">
                Name
              </label>
              <Input type="text" id="name" name="name" />
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-400">
                Email
              </label>
              <Input type="email" id="email" name="email" />
            </div>
            <div className="relative mb-4">
              <label
                for="message"
                className="leading-7 text-sm text-foreground"
              >
                Message
              </label>
              <Textarea id="message" name="message"></Textarea>
            </div>
            <Button>Submit</Button>
            <p className="text-xs text-foreground text-opacity-90 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
