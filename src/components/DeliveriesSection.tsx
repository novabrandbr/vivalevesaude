import e1 from "@/assets/entrega-1.png";
import e2 from "@/assets/entrega-2.png";
import e3 from "@/assets/entrega-3.png";
import e4 from "@/assets/entrega-4.png";
import e5 from "@/assets/entrega-5.png";

const deliveries = [
  { img: e1, label: "Primeira compra recebida com sucesso" },
  { img: e2, label: "Chegou rápido!" },
  { img: e3, label: "Meu primeiro pedido chegou 🎉" },
  { img: e4, label: "Mais duas pra conta 💪" },
  { img: e5, label: "Primeira compra no grupo – Goiânia" },
];

export function DeliveriesSection() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
            Entregas <span className="text-gradient-brand">Confirmadas</span>
          </h2>
          <p className="text-muted-foreground">
            Clientes reais recebendo seus produtos com rapidez e segurança
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {deliveries.map((d, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-brand-teal/40 hover:shadow-lg hover:shadow-brand-teal/10"
            >
              <div className="overflow-hidden">
                <img
                  src={d.img}
                  alt={d.label}
                  className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="px-3 py-2">
                <p className="text-xs font-medium text-muted-foreground sm:text-sm">{d.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
