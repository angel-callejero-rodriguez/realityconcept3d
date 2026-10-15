'use client'

import { useEffect, useId, useState } from 'react'
import { Armchair, Box, X } from 'lucide-react'

const models = [
  {
    id: 'cadeira',
    name: 'Cadeira',
    description: 'Visualize a peça em 3D e experimente-a em Realidade Aumentada.',
    file: 'cadeira.glb',
    icon: Armchair,
  },
  {
    id: 'mesa',
    name: 'Mesa de Centro',
    description: 'Analise as proporções da mesa e as texturas realistas aplicadas à superfície. Experimente num espaço amplo',
    file: 'mesa.glb',
    icon: Box,
  },
]

export function TryModels() {
  const [openModel, setOpenModel] = useState<(typeof models)[number] | null>(null)
  const titleId = useId()

  useEffect(() => {
    if (!openModel) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenModel(null)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [openModel])

  return (
    <section
      id="modelos"
      aria-labelledby="modelos-title"
      className="border-t border-border py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm text-muted-foreground">Modelos 3D</p>
          <h2
            id="modelos-title"
            className="mt-3 text-balance font-semibold text-4xl leading-tight tracking-tight md:text-5xl"
          >
            Experimente alguns dos nossos modelos.
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
            Abra o visualizador e veja como os seus clientes podem explorar cada peça em 3D e em
            Realidade Aumentada, diretamente no browser.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {models.map((model) => (
            <li
              key={model.id}
              className="flex flex-col rounded-2xl border border-border bg-card/50 p-8"
            >
              <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-background">
                <model.icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h3 className="mt-8 text-xl font-medium tracking-tight">{model.name}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{model.description}</p>
              <button
                type="button"
                onClick={() => setOpenModel(model)}
                className="mt-8 inline-flex h-11 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
              >
                Ver em 3D
              </button>
            </li>
          ))}
        </ul>
      </div>

      {openModel ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm md:p-8"
          onClick={() => setOpenModel(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative flex max-h-[calc(100dvh-2rem)] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex shrink-0 items-center justify-between gap-4 border-b border-border px-5 py-4">
              <div className="flex items-center gap-2">
                <Box className="size-4 text-muted-foreground" aria-hidden="true" />
                <h3 id={titleId} className="font-medium tracking-tight">
                  {openModel.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setOpenModel(null)}
                className="flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="size-5" />
                <span className="sr-only">Fechar visualizador</span>
              </button>
            </div>
            <iframe
              src={`https://ar.realityconcept3d.com/?modelo=${openModel.file}`}
              title={`Visualizador 3D — ${openModel.name}`}
              width="100%"
              height="500"
              className="block h-[min(500px,calc(100dvh-7rem))] w-full border-0"
              allow="xr-spatial-tracking"
            />
          </div>
        </div>
      ) : null}
    </section>
  )
}
