"use client";

import HeaderBox from "@/component/HeaderBox";
import Input from "@/component/Input";
import { useState } from "react";

export default function Contact() {
  type contactInput = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleContact(event: contactInput) {
    const { value, name } = event.target;
    setContact((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  return (
    <section className="flex flex-col items-center w-full p-5 space-y-10">
      <HeaderBox>Contact Me</HeaderBox>
      <p className="w-3/5">
        I’d love to hear from you! Whether you have questions, want to discuss
        potential collaborations, or just want to connect, feel free to reach
        out. I’m always open to new opportunities and discussions.
      </p>

      <form
        className="w-1/2 flex flex-col space-y-10 items-center"
        action="/submit"
        method="POST"
      >
        <Input
          name="name"
          placeholder="ENTER YOUR NAME*"
          value={contact.name}
          onChange={handleContact}
        />
        <Input
          name="email"
          placeholder="ENTER YOUR EMAIL*"
          value={contact.email}
          onChange={handleContact}
        />
        <Input
          name="phone"
          placeholder="PHONE NUMBER*"
          value={contact.phone}
          onChange={handleContact}
        />
        <textarea
          className="bg-transparent outline-none border-l-4 border-b-4 border-black p-3 text-lg font-bold w-full"
          rows={10}
          name="message"
          placeholder="YOUR MESSAGE*"
          onChange={handleContact}
          value={contact.message}
        />

        <button
          type="submit"
          className="font-bold text-xl border-x-4 border-black w-1/5 p-4"
        >
          SUBMIT
        </button>
      </form>
    </section>
  );
}
