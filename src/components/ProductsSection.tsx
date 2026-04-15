import produtos from "@/assets/produtos-tirzepatida.png";

export function ProductsSection() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
          Nossos Produtos
        </h2>
        <p className="mb-8 text-muted-foreground">
          Tirzepatida de alta qualidade com procedência garantida
        </p>

        <div className="glow-brand overflow-hidden rounded-2xl border border-brand-teal/20 bg-card">
          <img
            src={produtos}
            alt="Produtos Tirzepatida - Lipoless, Lipoland, T.G.15, Tirzec"
            className="w-full object-cover"
          />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { icon: "✔", text: "Alta procura no mercado" },
            { icon: "✔", text: "Qualidade validada" },
            { icon: "✔", text: "Logística rápida" },
            { icon: "✔", text: "Entrega discreta" },
          ].map((item) => (
            <div
              key={item.text}
              className="rounded-xl border border-border bg-secondary/50 px-3 py-3 text-center"
            >
              <span className="mb-1 block text-lg text-primary">{item.icon}</span>
              <span className="text-xs font-medium text-foreground sm:text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
