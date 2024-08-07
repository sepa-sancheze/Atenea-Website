import { Input } from "@headlessui/react";
import { Textarea } from "@headlessui/react";
import { Button } from "@headlessui/react";

function Contact() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="max-w-md mx-auto space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">
              Get in Touch
            </h2>
            <p className="text-center text-muted-foreground md:text-xl">
              Have a question or need help with your IT services? Fill out the
              form below and we'll get back to you as soon as possible.
            </p>
            <form className="space-y-4">
              <Input type="text" placeholder="Name" className="w-full" />
              <Input type="email" placeholder="Email" className="w-full" />
              <Textarea placeholder="Message" className="w-full" rows={4} />
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
