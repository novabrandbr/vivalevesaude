export function CTASection() {
  return (
    <section className="px-4 py-16">
      <div className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl border border-brand-teal/20 bg-card p-8 text-center sm:p-12">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-brand-green/5" />
        
        <div className="relative">
          <h2 className="mb-3 text-2xl font-extrabold text-foreground sm:text-3xl">
            Não perca essa oportunidade!
          </h2>
          <p className="mb-6 text-muted-foreground">
            Grupo com alta demanda diariamente. Apenas administradores oficiais autorizados.
          </p>

          <a
            href="https://chat.whatsapp.com/SEU_LINK_AQUI"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-cta glow-cta animate-pulse-slow inline-flex items-center gap-2 rounded-xl px-8 py-4 text-lg font-bold text-cta-foreground transition-all hover:scale-105"
          >
            👉 ENTRAR NO GRUPO AGORA
          </a>

          <p className="mt-4 text-xs text-muted-foreground">
            🔒 Compra 100% segura · Apenas administradores oficiais autorizados
          </p>
        </div>
      </div>
    </section>
  );
}
