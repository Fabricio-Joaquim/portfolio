import { Header, Navbar, Skills } from "@components";

export default function App() {
  return (
    <main className="bg-white dark:bg-slate-800">
      <Navbar />
      <div className="p-4">
        <Header />
        <Skills />
      </div>
    </main>
  );
}
