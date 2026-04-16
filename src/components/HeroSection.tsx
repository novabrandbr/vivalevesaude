import logo from "@/assets/logo-viva-leve.png";
import produtos from "@/assets/produtos-tirzepatida.png";
import heroBg from "@/assets/hero-bg-products.png";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-between overflow-hidden px-4 py-6 text-center">
      {/* Background image — subtle, soft */}
      <img src={heroBg} alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-15 blur-[2px]" width={1920} height={1080} />
      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-background/80 to-background/95" />
      {/* Vignette edges */}
      <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 150px 60px rgba(0,0,0,0.7)' }} />

      <div className="relative flex w-full max-w-md flex-1 flex-col items-center justify-center gap-3">
        <img
          src={logo}
          alt="Farma Viva Leve Saúde"
          className="h-16 w-16 rounded-full object-contain sm:h-20 sm:w-20"
        />

        <div className="inline-flex items-center gap-1.5 rounded-full border border-highlight/30 bg-highlight/10 px-3 py-1 text-xs font-semibold text-highlight">
          🔥 Promoção exclusiva – Tirzepatida
        </div>

        <h1 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          <span className="text-gradient-brand">Resultados Reais</span>
          <br />
          <span className="text-foreground">com Qualidade e Segurança</span>
        </h1>

        <p className="max-w-xs text-sm text-muted-foreground">
          <span className="font-bold text-gradient-fire">Os melhores preços do Brasil em tirzepatida</span>
          <br />
          Transforme seu corpo com procedência confiável
        </p>

        <div className="w-full max-w-xs overflow-hidden rounded-xl border border-brand-teal/20">
          <img
            src={produtos}
            alt="Produtos Tirzepatida"
            className="h-auto w-full object-cover"
          />
        </div>

        <a
          href="https://chat.whatsapp.com/JlcGVqe22TFIzBkaFyew61"
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-cta glow-cta animate-pulse-slow inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-base font-bold text-cta-foreground transition-all hover:scale-105 sm:text-lg"
        >
          👉 ENTRAR NO GRUPO AGORA
        </a>

        <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] text-muted-foreground sm:text-xs">
          <span>⚡ Vagas limitadas</span>
          <span className="text-border">·</span>
          <span>🔥 Alta demanda diária</span>
          <span className="text-border">·</span>
          <span>🔒 Compra segura</span>
        </div>
      </div>
    </section>
  );
}
