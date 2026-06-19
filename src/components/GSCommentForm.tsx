import { useState } from "react";

interface CommentFormProps {
  postSlug: string;
}

export default function GSCommentForm({ postSlug }: CommentFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    const payload = {
      token: import.meta.env.PUBLIC_GAS_TOKEN,
      form_type: "comment",
      post_slug: postSlug,
      name: formData.get("name"),
      email: formData.get("email"),
      website: formData.get("website") || "",
      comment: formData.get("comment"),
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
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input type="hidden" name="post_slug" value={postSlug} />
      <textarea
        name="comment"
        rows={6}
        placeholder="Type here..."
        className="w-full border border-border p-3 text-base focus:outline-none focus:border-primary transition-colors resize-y bg-[#fafafa]"
        required
      ></textarea>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          name="name"
          type="text"
          placeholder="Name*"
          className="border border-border p-3 text-base focus:outline-none focus:border-primary transition-colors bg-[#fafafa]"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email*"
          className="border border-border p-3 text-base focus:outline-none focus:border-primary transition-colors bg-[#fafafa]"
          required
        />
        <input
          name="website"
          type="url"
          placeholder="Website"
          className="border border-border p-3 text-base focus:outline-none focus:border-primary transition-colors bg-[#fafafa]"
        />
      </div>

      <div className="flex items-center gap-2 mb-2 mt-2">
        <input type="checkbox" id="save-info" name="save-info" className="accent-primary w-3.5 h-3.5" />
        <label htmlFor="save-info" className="text-[13px] text-[#4b5563]">
          Save my name, email, and website in this browser for the next time I comment.
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`bg-primary text-white font-medium text-base px-6 py-2.5 w-fit hover:bg-[#005a66] transition-colors mt-2${
          isSubmitting ? " opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {isSubmitting ? "Posting..." : "Post Comment »"}
      </button>

      {status === "success" && (
        <p className="mt-2 text-[13px] text-primary">
          Your comment has been submitted successfully.
        </p>
      )}
      {status === "error" && (
        <p className="mt-2 text-[13px] text-red-500">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
