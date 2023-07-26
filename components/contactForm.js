import { useState } from "react";
import Container from "./container";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    content: "",
  });

  const [error, setError] = useState("");

  const onChange = (e) => {
    setForm({ ...form, [`${e.target.id}`]: e.target.value });
  };

  const sendQuestion = async () => {
    const res = await fetch("/api/send-mail", {
      method: "POST",
      body: JSON.stringify(form),
    });
    const result = await res.json();
    setError(result.message);
  };

  return (
    <Container>
      <div className="flex flex-col items-center justify-center w-full max-w-4xl gap-5 mx-auto text-white bg-[#47C1BF] px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Send us your question and information?
          </h2>
        </div>
        <input
          id="name"
          value={form.name}
          onChange={onChange}
          className="w-full inline-block py-3 mx-auto text-lg font-medium text-center text-[#47C1BF] bg-white rounded-md px-7 lg:px-10 lg:py-5 "
          placeholder="Name"
        />
        <input
          id="email"
          value={form.email}
          onChange={onChange}
          className="w-full inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 "
          placeholder="Email"
        />
        <textarea
          id="content"
          value={form.content}
          onChange={onChange}
          className="w-full inline-block py-3 mx-auto text-lg font-medium text-sm text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 "
          placeholder="Your message"
        />
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <button
            onClick={sendQuestion}
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-[#47C1BF] bg-white rounded-md px-7 lg:px-10 lg:py-5 "
          >
            {error ? error : "Send question"}
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ContactForm;
