import Link from 'next/link'
import { Box } from 'lucide-react'

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 rounded-md text-foreground focus-visible:outline-2 focus-visible:outline-offset-4"
      aria-label="Reality Concept 3D — página inicial"
    >
      <span className="flex size-8 items-center justify-center rounded-md border border-border bg-card">
        <Box className="size-4" strokeWidth={1.5} aria-hidden="true" />
      </span>
      <span className="text-sm font-medium tracking-tight">
        Reality Concept <span className="text-muted-foreground">3D</span>
      </span>
    </Link>
  )
}
