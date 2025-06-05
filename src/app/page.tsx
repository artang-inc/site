import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <main >
      <div>
        <h1>artang</h1>
        <h2>Soluções inteligentes.</h2>
        <p>Estamos construindo...</p>

        {/* Botão com Link */}
        <Link href="/demo">
          <Button className="bg-blue-500 text-white hover:bg-blue-600 mt-4">
            DEMO
          </Button>
        </Link>
      </div>
    </main>
  );
}
