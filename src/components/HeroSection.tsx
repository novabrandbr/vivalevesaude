import logo from "@/assets/logo-viva-leve.png";
import produtos from "@/assets/produtos-tirzepatida.png";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-between overflow-hidden px-4 py-6 text-center">
      {/* Background image */}
      <img src={heroBg} alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full object-cover" width={1920} height={1080} />
      {/* Overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-black/30" />

      <div className="relative flex w-full max-w-md flex-1 flex-col items-center justify-center gap-3">
        {/* 1. Logo pequena */}
        <img
          src={logo}
          alt="Farma Viva Leve Saúde"
          className="h-16 w-16 rounded-full object-contain sm:h-20 sm:w-20"
        />

        {/* 2. Micro headline */}
        <div className="inline-flex items-center gap-1.5 rounded-full border border-highlight/30 bg-highlight/10 px-3 py-1 text-xs font-semibold text-highlight">
          🔥 Promoção exclusiva – Tirzepatida
        </div>

        {/* 3. Headline principal */}
        <h1 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          <span className="text-gradient-brand">Resultados Reais</span>
          <br />
          <span className="text-foreground">com Qualidade e Segurança</span>
        </h1>

        {/* 4. Subheadline */}
        <p className="max-w-xs text-sm text-muted-foreground">
          <span className="font-bold text-gradient-fire">Os melhores preços do Brasil em tirzepatida</span>
          <br />
          Transforme seu corpo com procedência confiável
        </p>

        {/* 5. Imagem dos produtos — compacta */}
        <div className="w-full max-w-xs overflow-hidden rounded-xl border border-brand-teal/20">
          <img
            src={produtos}
            alt="Produtos Tirzepatida"
            className="h-auto w-full object-cover"
          />
        </div>

        {/* 6. Botão CTA */}
        <a
          href="https://chat.whatsapp.com/JlcGVqe22TFIzBkaFyew61"
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-cta glow-cta animate-pulse-slow inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-base font-bold text-cta-foreground transition-all hover:scale-105 sm:text-lg"
        >
          👉 ENTRAR NO GRUPO AGORA
        </a>

        {/* 7. Prova rápida */}
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
