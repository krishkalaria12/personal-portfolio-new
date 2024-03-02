"use client";
import { RegisterForm } from "@/components/contact/register-form";
import Image from "next/image";
import { TextRevealCard } from "@/components/ui/text-reveal-card";

function ContactSection() {
  return (
    <div className="mx-auto py-4">
      <TextRevealCard
        text="Send me a message"
        revealText="Feel Free to Contact "
        className="mx-auto"
      ></TextRevealCard>
      <div className="flex items-center py-4 justify-between">
        <RegisterForm />
        <div>
          <Image
            src={"/undraw-contact.svg"}
            className="pointer-events-none"
            width={400}
            height={500}
            alt="Contact Photo"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
