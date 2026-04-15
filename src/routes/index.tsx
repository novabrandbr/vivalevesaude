import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ResultsSection } from "@/components/ResultsSection";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Farma Viva Leve Saúde - Tirzepatida com os Melhores Preços" },
      { name: "description", content: "Os melhores preços em Tirzepatida do Brasil. Resultados reais com qualidade e segurança. Entre no grupo e receba ofertas exclusivas." },
      { property: "og:title", content: "Farma Viva Leve Saúde - Tirzepatida" },
      { property: "og:description", content: "Transforme seu corpo com acompanhamento e produtos de procedência confiável." },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProductsSection />
      <BenefitsSection />
      <ResultsSection />
      <CTASection />
      
      <footer className="border-t border-border px-4 py-6 text-center text-xs text-muted-foreground">
        © 2026 Farma Viva Leve Saúde. Todos os direitos reservados.
      </footer>
    </main>
  );
}
