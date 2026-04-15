import logo from "@/assets/logo-viva-leve.png";

export function HeroSection() {
  return (
    <section className="gradient-hero relative overflow-hidden px-4 pb-12 pt-8 text-center">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-teal/10 blur-[120px]" />
      
      <div className="relative mx-auto max-w-2xl">
        <img
          src={logo}
          alt="Farma Viva Leve Saúde"
          className="mx-auto mb-6 h-32 w-32 rounded-full object-contain sm:h-40 sm:w-40"
        />

        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-highlight/30 bg-highlight/10 px-4 py-1.5 text-sm font-semibold text-highlight">
          🔥 PROMOÇÃO EXCLUSIVA – TIRZEPATIDA 🔥
        </div>

        <h1 className="mb-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          <span className="text-gradient-brand">Resultados Reais</span>
          <br />
          <span className="text-foreground">com Qualidade e Segurança</span>
        </h1>

        <p className="mx-auto mb-2 max-w-lg text-lg font-bold text-gradient-fire sm:text-xl">
          OS MELHORES PREÇOS EM TIRZEPATIDA DO BRASIL!
        </p>

        <p className="mx-auto mb-8 max-w-md text-sm text-muted-foreground sm:text-base">
          Transforme seu corpo com acompanhamento e produtos de procedência confiável.
        </p>

        <a
          href="https://chat.whatsapp.com/SEU_LINK_AQUI"
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-cta glow-cta animate-pulse-slow inline-flex items-center gap-2 rounded-xl px-8 py-4 text-lg font-bold text-cta-foreground transition-all hover:scale-105 sm:text-xl"
        >
          👉 ENTRAR NO GRUPO AGORA
        </a>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground sm:text-sm">
          <span>⚡ Vagas limitadas</span>
          <span className="text-border">|</span>
          <span>🚨 Alta demanda diariamente</span>
          <span className="text-border">|</span>
          <span>🔒 Compra 100% segura</span>
        </div>
      </div>
    </section>
  );
}
