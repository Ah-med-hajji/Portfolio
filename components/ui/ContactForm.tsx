"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_FORM, CONTACT_SUBJECTS, FORMSPREE_ID } from "@/lib/constants";
import { showToast } from "@/components/ui/Toast";

const fieldClass =
  "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder-gray-500 outline-none transition-colors focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30";
const labelClass = "mb-1.5 block text-sm text-gray-300";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        showToast(CONTACT_FORM.success);
        form.reset();
      } else {
        showToast(CONTACT_FORM.error, "error");
      }
    } catch {
      showToast(CONTACT_FORM.error, "error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-white/5 bg-white/[0.02] p-5 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            {CONTACT_FORM.name.label}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={fieldClass}
            placeholder={CONTACT_FORM.name.placeholder}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            {CONTACT_FORM.email.label}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={fieldClass}
            placeholder={CONTACT_FORM.email.placeholder}
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className={labelClass}>
          {CONTACT_FORM.subject.label}
        </label>
        <select id="subject" name="subject" required className={fieldClass}>
          {CONTACT_SUBJECTS.map((s) => (
            <option key={s.value} value={s.value} className="bg-[#0f1117]">
              {s.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>
          {CONTACT_FORM.message.label}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${fieldClass} resize-y`}
          placeholder={CONTACT_FORM.message.placeholder}
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-full bg-cyan-400 py-3.5 text-sm font-semibold text-[#0f1117] transition-colors hover:bg-cyan-300 disabled:opacity-50"
      >
        {submitting ? CONTACT_FORM.submitting : CONTACT_FORM.submit}
      </button>
    </form>
  );
}
