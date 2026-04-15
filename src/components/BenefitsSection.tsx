const benefits = [
  { icon: "🎯", title: "Ofertas exclusivas", desc: "Promoções todos os dias no grupo" },
  { icon: "💰", title: "Condições especiais", desc: "Preços diferenciados para revendedores" },
  { icon: "👨‍⚕️", title: "Suporte especializado", desc: "Atendimento direto com especialistas" },
  { icon: "📦", title: "Estoque atualizado", desc: "Atualizações em primeira mão" },
];

export function BenefitsSection() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center text-2xl font-bold text-foreground sm:text-3xl">
          💬 Entre no grupo e receba
        </h2>

        <div className="grid gap-3 sm:grid-cols-2">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-brand-teal/30"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xl">
                {b.icon}
              </span>
              <div>
                <h3 className="font-semibold text-foreground">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
