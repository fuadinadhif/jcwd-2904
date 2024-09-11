"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = { email, password };

    try {
      await fetch("http://localhost:8080/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });

      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          required
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-black"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          required
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="text-black"
        />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
