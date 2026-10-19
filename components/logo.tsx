import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="brand" aria-label="Reality Concept 3D — início">
      <svg viewBox="0 0 36 40" fill="none" aria-hidden="true">
        <path
          d="M18 2 34 11.2v17.6L18 38 2 28.8V11.2L18 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="m2 11.2 16 9.2 16-9.2M18 20.4V38M10 6.6l16 9.2v8.8l-8 4.6"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
      <span>
        reality concept<span className="brand-sub">3D & AUGMENTED REALITY</span>
      </span>
    </Link>
  );
}
