import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DemoPage() {
  return (
    <div className="container">
      <h2 className="">Bem-vindo à página DEMO 🚀</h2>
      <p>Essa é a nova página.</p>

      <Link href="/">
        <Button className="bg-white text-black mt-4">Voltar para início</Button>
      </Link>
    </div>
  );
}
