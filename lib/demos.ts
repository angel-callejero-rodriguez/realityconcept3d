import { RC3D_ORIGIN } from "@/lib/rc3d";

// Demos privadas para lojas. Cada demo é um ficheiro no rc3d-server: d/<token>.json
//   {"store":"Stylish Club","product":"Mesa de centro","model":"9f3c2a7d1e8b4c6a"}
// "model" é o id do modelo no servidor (público em models.json ou privado em m/<id>.json).
// Os tokens não ficam neste repo e não há nenhuma lista pública de demos.
// A variável RC3D_DEMOS (mesmo formato, várias demos num JSON) continua a funcionar como alternativa.

// "compare" (opcional): linhas "antes / depois" quando a loja já tem 3D, ex.
//   "compare":[{"label":"Tamanho do ficheiro","before":"4,0 MB","after":"1,7 MB"}]
export type Comparison = { label: string; before: string; after: string };
// "note" (opcional): aviso por baixo do título, ex. quando a demo usa um modelo de exemplo.
export type Demo = {
  store: string;
  product: string;
  model: string;
  note?: string;
  compare?: Comparison[];
};

const TOKEN_PATTERN = /^[a-z0-9]{8,64}$/;

function isComparison(value: unknown): value is Comparison {
  if (!value || typeof value !== "object") return false;
  const row = value as Record<string, unknown>;
  return (
    typeof row.label === "string" &&
    typeof row.before === "string" &&
    typeof row.after === "string"
  );
}

function isDemo(value: unknown): value is Demo {
  if (!value || typeof value !== "object") return false;
  const demo = value as Record<string, unknown>;
  return (
    typeof demo.store === "string" &&
    typeof demo.product === "string" &&
    typeof demo.model === "string" &&
    /^[a-z0-9][a-z0-9-]{0,63}$/.test(demo.model) &&
    (demo.note === undefined || typeof demo.note === "string") &&
    (demo.compare === undefined ||
      (Array.isArray(demo.compare) && demo.compare.every(isComparison)))
  );
}

async function fromServer(token: string): Promise<Demo | null> {
  try {
    const response = await fetch(`${RC3D_ORIGIN}/d/${token}.json`, {
      next: { revalidate: 60 },
    });
    if (!response.ok) return null;
    const demo: unknown = await response.json();
    return isDemo(demo) ? demo : null;
  } catch {
    return null;
  }
}

function fromEnv(token: string): Demo | null {
  let demos: unknown;
  try {
    demos = JSON.parse(process.env.RC3D_DEMOS ?? "{}");
  } catch {
    console.error("RC3D_DEMOS não é JSON válido");
    return null;
  }
  if (!demos || typeof demos !== "object" || !Object.hasOwn(demos, token)) return null;
  const demo = (demos as Record<string, unknown>)[token];
  return isDemo(demo) ? demo : null;
}

export async function findDemo(token: string): Promise<Demo | null> {
  if (!TOKEN_PATTERN.test(token)) return null;
  return (await fromServer(token)) ?? fromEnv(token);
}
