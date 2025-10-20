"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export function ContactForm(): JSX.Element {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Une erreur est survenue.");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Erreur inconnue");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="name">Nom</label>
        <input
          id="name"
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full rounded-md border border-foreground/20 bg-background px-3 py-2 outline-none focus:border-foreground/40"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full rounded-md border border-foreground/20 bg-background px-3 py-2 outline-none focus:border-foreground/40"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
        <textarea
          id="message"
          required
          rows={6}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full rounded-md border border-foreground/20 bg-background px-3 py-2 outline-none focus:border-foreground/40"
        />
      </div>
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-5 py-2 rounded-md bg-foreground text-background text-sm font-medium disabled:opacity-60"
        >
          {status === "loading" ? "Envoi..." : "Envoyer"}
        </button>
        {status === "success" && (
          <span className="text-sm text-green-600">Message envoyé avec succès.</span>
        )}
        {status === "error" && (
          <span className="text-sm text-red-600">{error}</span>
        )}
      </div>
    </form>
  );
}


