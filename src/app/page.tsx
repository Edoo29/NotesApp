import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex justify-center items-center flex-col mt-64">
        <p className="font-bold text-2xl">Notes App</p>
        <p>Create, edit or delete notes!</p>
      </main>
    </>
  );
}
