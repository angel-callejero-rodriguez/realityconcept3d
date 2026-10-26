// Demos privadas para lojas. Os tokens NÃO ficam no código (o repo pode ser público):
// vêm da variável de ambiente RC3D_DEMOS na Vercel, por exemplo
//   RC3D_DEMOS={"k7x2...":{"store":"Stylish Club","product":"Mesa de centro","model":"9f3c2a7d1e8b4c6a"}}
// "model" é o id do modelo no rc3d-server (público em models.json ou privado em m/<id>.json).

// "compare" (opcional): linhas "antes / depois" quando a loja já tem 3D, ex.
//   "compare":[{"label":"Tamanho do ficheiro","before":"4,0 MB","after":"1,7 MB"}]
export type Comparison = { label: string; before: string; after: string };
export type Demo = {
  store: string;
  product: string;
  model: string;
  compare?: Comparison[];
};

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
    (demo.compare === undefined ||
      (Array.isArray(demo.compare) && demo.compare.every(isComparison)))
  );
}

export function findDemo(token: string): Demo | null {
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
