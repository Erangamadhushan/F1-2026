import { useState } from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-4 py-2 bg-black border border-neutral-700 rounded focus:border-red-600 outline-none"
      />
      <button
        type="submit"
        className="bg-[#E10600] px-4 py-2 rounded hover:opacity-90 transition"
      >
        Subscribe
      </button>
    </form>
  );
};

export default NewsletterForm;
