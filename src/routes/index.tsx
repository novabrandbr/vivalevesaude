import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ResultsSection } from "@/components/ResultsSection";
import { DeliveriesSection } from "@/components/DeliveriesSection";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProductsSection />
      <BenefitsSection />
      <ResultsSection />
      <DeliveriesSection />
      <CTASection />
      
      <footer className="border-t border-border px-4 py-6 text-center text-xs text-muted-foreground">
        © 2026 Farma Viva Leve Saúde. Todos os direitos reservados.
      </footer>
    </main>
  );
}
