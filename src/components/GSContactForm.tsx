import { useState } from "react";

interface ContactFormProps {
  nameLabel: string;
  emailLabel: string;
  phoneLabel: string;
  messageLabel: string;
  buttonText: string;
}

export default function GSContactForm({
  nameLabel,
  emailLabel,
  phoneLabel,
  messageLabel,
  buttonText,
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    const payload = {
      token: import.meta.env.PUBLIC_GAS_TOKEN,
      form_type: "contact",
      name: formData.get("your-name"),
      email: formData.get("your-email"),
      phone: formData.get("your-phone"),
      message: formData.get("your-message"),
    };

    try {
      const response = await fetch(import.meta.env.PUBLIC_GAS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
        redirect: "follow",
      });
      const data = await response.json();

      if (data.status === "success") {
        setStatus("success");
        (event.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="mt-7 space-y-4" onSubmit={handleSubmit}>
      <label className="block">
        <span className="mb-1 block text-left text-[12px] text-foreground">
          {nameLabel}
        </span>
        <input
          className="h-[36px] w-full border border-[#d4d4d4] bg-[#f4f4f4] px-3 text-[13px] text-[#333333] outline-none focus:border-primary"
          type="text"
          name="your-name"
          required
        />
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-left text-[12px] text-foreground">
            {emailLabel}
          </span>
          <input
            className="h-[36px] w-full border border-[#d4d4d4] bg-[#f4f4f4] px-3 text-[13px] text-[#333333] outline-none focus:border-primary"
            type="email"
            name="your-email"
            required
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-left text-[12px] text-foreground">
            {phoneLabel}
          </span>
          <input
            className="h-[36px] w-full border border-[#d4d4d4] bg-[#f4f4f4] px-3 text-[13px] text-[#333333] outline-none focus:border-primary"
            type="tel"
            name="your-phone"
            required
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1 block text-left text-[12px] text-foreground">
          {messageLabel}
        </span>
        <textarea
          className="min-h-[88px] w-full border border-[#d4d4d4] bg-[#f4f4f4] px-3 py-2 text-[13px] text-[#333333] outline-none focus:border-primary"
          name="your-message"
          required
        ></textarea>
      </label>

      <div className="text-left">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`inline-flex items-center justify-center rounded bg-primary px-4 py-2 text-[12px] font-medium text-white transition-colors hover:bg-[#005a66]${
            isSubmitting ? " opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Sending..." : buttonText}
        </button>
      </div>

      {status === "success" && (
        <p className="mt-2 text-[12px] text-primary">
          Your message has been sent successfully.
        </p>
      )}
      {status === "error" && (
        <p className="mt-2 text-[12px] text-red-600">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
