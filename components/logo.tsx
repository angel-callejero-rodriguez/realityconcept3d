import Link from 'next/link'

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 rounded-md text-foreground focus-visible:outline-2 focus-visible:outline-offset-4"
      aria-label="Reality Concept 3D — página inicial"
    >
      <span className="text-base font-medium tracking-tight">
        Reality Concept <span className="text-muted-foreground">3D</span>
      </span>
    </Link>
  )
}
