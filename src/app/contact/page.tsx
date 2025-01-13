"use client";

import HeaderBox from "@/components/HeaderBox";
import Input from "@/components/Input";
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
    <>
      <section className="flex-col items-center w-full p-5 space-y-10 hidden lg:flex">
        <HeaderBox>
          <h1> CONTACT ME</h1>
        </HeaderBox>
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
            className="font-bold text-xl border-x-4 border-black w-3/12 p-4 hover:scale-105 hover:text-xl transition duration-200"
          >
            SUBMIT
          </button>
        </form>
      </section>

      {/* On medium screens */}

      <section className="flex-col items-center w-full p-5 space-y-10 hidden md:flex lg:hidden">
        <HeaderBox>
          <h1> CONTACT ME</h1>
        </HeaderBox>
        <p className="w-4/5 text-justify">
          I’d love to hear from you! Whether you have questions, want to discuss
          potential collaborations, or just want to connect, feel free to reach
          out. I’m always open to new opportunities and discussions.
        </p>

        <form
          className="w-3/5 flex flex-col space-y-10 items-center"
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
            className="font-bold text-xl border-x-4 border-black w-2/5 p-4 hover:scale-105 hover:text-xl transition duration-200"
          >
            SUBMIT
          </button>
        </form>
      </section>

      {/* On smaller screens */}

      <section className="flex-col items-center w-full p-5 space-y-10 flex md:hidden">
        <HeaderBox>
          <h1> CONTACT ME</h1>
        </HeaderBox>
        <p className="w-11/12 text-justify">
          I’d love to hear from you! Whether you have questions, want to discuss
          potential collaborations, or just want to connect, feel free to reach
          out. I’m always open to new opportunities and discussions.
        </p>

        <form
          className="w-4/5 flex flex-col space-y-10 items-center"
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
            className="bg-transparent outline-none border-l-4 border-b-4 border-black p-3 text-lg placeholder:font-bold w-full"
            rows={10}
            name="message"
            placeholder="YOUR MESSAGE*"
            onChange={handleContact}
            value={contact.message}
          />

          <button
            type="submit"
            className="font-bold text-lg border-x-4 border-black w-1/5 px-2 py-4 hover:scale-105 hover:text-xl transition duration-200"
          >
            SUBMIT
          </button>
        </form>
      </section>
    </>
  );
}
