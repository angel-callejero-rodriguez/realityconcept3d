import type { ModelKind } from "@/components/model-viewer";

// O servidor 3D/AR (repo rc3d-server). Em testes locais pode apontar para outro endereço.
export const RC3D_ORIGIN =
  process.env.NEXT_PUBLIC_RC3D_ORIGIN ?? "https://ar.realityconcept3d.com";

// Cada modelo do site e o id correspondente no registo do servidor (models.json).
export const SERVER_MODEL_ID: Record<ModelKind, string> = {
  atelier: "atelier",
  lounge: "lounge",
  mesa: "mesa-redonda",
  cadeira: "cadeira",
  cadeiracouro: "cadeiracouro",
};

export const MODEL_KINDS = Object.keys(SERVER_MODEL_ID) as ModelKind[];

export function isModelKind(value: string | null): value is ModelKind {
  return value !== null && (MODEL_KINDS as string[]).includes(value);
}

export function viewerUrl(modelId: string) {
  const url = new URL("/", RC3D_ORIGIN);
  url.searchParams.set("modelo", modelId);
  return url.toString();
}
