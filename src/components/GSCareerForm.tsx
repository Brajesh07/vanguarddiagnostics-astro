import { useState } from "react";

interface FormField {
  label: string;
  type: string;
  id: string;
}

interface GSCareerFormProps {
  fields: readonly FormField[];
}

export default function GSCareerForm({ fields }: GSCareerFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const fileInput = form.querySelector('input[type="file"]') as HTMLInputElement;
    const file = fileInput?.files?.[0];

    let fileData = "";
    let fileName = "";

    if (file) {
      // Convert file to base64 for upload via GAS
      fileData = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.readAsDataURL(file);
      });
      fileName = file.name;
    }

    const payload = {
      token: import.meta.env.PUBLIC_GAS_TOKEN,
      form_type: "career",
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      city: formData.get("city"),
      state: formData.get("state"),
      pincode: formData.get("pin-code"),
      department: formData.get("department"),
      fileData,
      fileName,
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
        form.reset();
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
    <form className="mt-6 text-left" onSubmit={handleSubmit}>
      <div className="grid gap-x-8 gap-y-5 md:grid-cols-2">
        {fields.map((field) => (
          <div key={field.id}>
            <label
              htmlFor={field.id}
              className="mb-1 block text-[13px] text-foreground"
            >
              {field.label}
            </label>
            <input
              id={field.id}
              name={field.id}
              className="h-9 w-full border border-border bg-white px-3 text-[13px] text-[#333333] outline-none focus:border-primary"
              type={field.type}
              required
            />
          </div>
        ))}
      </div>

      <div className="mt-5">
        <label className="mb-1 block text-[13px] text-foreground">
          Resume (PDF, DOC, DOCX)
        </label>
        <input
          className="block w-full border border-border bg-white px-3 py-2 text-[13px] text-[#555555]"
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
        />
      </div>

      <div className="mt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`inline-flex items-center justify-center rounded bg-primary px-6 py-2 text-[13px] font-medium text-white transition-colors hover:bg-[#017d8c]${
            isSubmitting ? " opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>

      {status === "success" && (
        <p className="mt-4 text-[13px] text-primary">
          Your application has been submitted. We will get back to you within two weeks.
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-[13px] text-red-500">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
