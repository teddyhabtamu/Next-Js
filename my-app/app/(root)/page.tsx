import Hello from "../components/Hello";

export default function Home() {
  console.log("something")
  return (
    <>
      <h1 className="text-3xl text-red-600">Welcome to Next.js</h1>
      <Hello/>
    </>
  );
}
