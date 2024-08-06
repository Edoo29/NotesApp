"use client";

import Link from "next/link";
import { loginAction } from "./actions";
import { useFormState } from "react-dom";

const initialState = {
  error: "",
};

export default function Page() {
  const [state, formAction] = useFormState(loginAction, initialState);
  return (
    <div className="flex flex-col justify-center gap-10 items-center mt-44">
      <h1 className="text-2xl font-bold">Login</h1>
      <form
        action={formAction}
        className="flex flex-col gap-6"
        autoComplete="off"
      >
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input"
        />
        <button className="btn">Continue</button>
        <div className="text-red-600">{state.error}</div>
        <Link className="hover:underline" href="/signup">
          Do not have an account? Register now!
        </Link>
      </form>
    </div>
  );
}
