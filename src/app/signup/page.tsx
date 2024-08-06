"use client";

import Link from "next/link";
import { signupAction } from "./actions";
import { useFormState } from "react-dom";
import { formState } from "./actions";

const initialState: formState = {
  error: "",
};

export default function Page() {
  const [state, formAction] = useFormState(signupAction, initialState);
  return (
    <div className="flex flex-col justify-center gap-10 items-center mt-44">
      <h1 className="text-2xl font-bold">Create an account</h1>
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
        <input
          type="password"
          name="confirm-password"
          placeholder="Confirm password"
          className="input"
        />
        <button className="btn">Continue</button>
        <div className="text-red-600">{state.error}</div>
        <Link className="hover:underline" href="/login">
          Already have an account? Login
        </Link>
      </form>
    </div>
  );
}
