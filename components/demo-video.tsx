import { Play } from 'lucide-react'

/**
 * Para inserir o vídeo: coloque o ficheiro em /public/videos/demo.mp4
 * e defina VIDEO_SRC = '/videos/demo.mp4'.
 */
const VIDEO_SRC: string | null = null
const POSTER_SRC = '/images/demo-poster.png'

export function DemoVideo() {
  return (
    <section id="demo" aria-labelledby="demo-title" className="mx-auto max-w-6xl px-6 pb-24">
      <h2 id="demo-title" className="sr-only">
        Vídeo de demonstração
      </h2>
      <div className="rounded-3xl border border-border bg-card/50 p-2 md:p-3">
        <div className="relative aspect-video overflow-hidden rounded-2xl bg-muted">
          {VIDEO_SRC ? (
            <video
              className="size-full object-cover"
              src={VIDEO_SRC}
              poster={POSTER_SRC}
              controls
              playsInline
              preload="metadata"
            >
              O seu navegador não suporta a reprodução de vídeo.
            </video>
          ) : (
            <>
              <img
                src={POSTER_SRC}
                alt="Cliente a visualizar um sofá em Realidade Aumentada na sua sala através do telemóvel"
                className="size-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <span className="flex size-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
                  <Play className="ml-1 size-7 fill-white text-white" aria-hidden="true" />
                </span>
                <span className="text-sm text-white/80">Vídeo de demonstração · 1:30</span>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
