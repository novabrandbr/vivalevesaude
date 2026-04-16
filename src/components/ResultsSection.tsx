import r1 from "@/assets/resultado-1.png";
import r2 from "@/assets/resultado-2.png";
import r3 from "@/assets/resultado-3.png";
import r5 from "@/assets/resultado-5.png";
import rNew1 from "@/assets/resultado-new-1.png";
import rNew2 from "@/assets/resultado-new-2.png";
import rNew3 from "@/assets/resultado-new-3.png";

const results = [
  { img: rNew1, label: "Transformação masculina" },
  { img: rNew2, label: "Resultado impressionante" },
  { img: rNew3, label: "Antes e Depois" },
  { img: r1, label: "Transformação incrível" },
  { img: r2, label: "Antes e Depois" },
  { img: r3, label: "22kg a menos em 2 meses" },
  { img: r5, label: "20kg a menos em 2 meses" },
];

export function ResultsSection() {
  return (
    <section className="gradient-section px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
            Resultados <span className="text-gradient-brand">Comprovados</span>
          </h2>
          <p className="text-muted-foreground">
            Veja as transformações reais dos nossos clientes
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {results.map((r, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-brand-teal/40 hover:shadow-lg hover:shadow-brand-teal/10"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={r.img}
                  alt={r.label}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="px-3 py-2">
                <p className="text-xs font-medium text-muted-foreground sm:text-sm">{r.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
