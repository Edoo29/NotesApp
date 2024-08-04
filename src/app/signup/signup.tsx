import { signup } from "./actions";
// now, you have to write in the terminal npx drizzle-kit push
// to push in the db
export default async function Page() {
  return (
    <div className="flex flex-col justify-center items-center mt-32">
      <h1>Create an account</h1>
      <form action={signup}>
        <label htmlFor="username">Username</label>
        <input name="username" id="username" />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <br />
        <button>Continue</button>
      </form>
    </div>
  );
}
