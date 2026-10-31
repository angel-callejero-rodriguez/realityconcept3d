import type { Metadata } from "next";

// Endereço principal do site. O domínio sem "www" redireciona para este (308 na Vercel),
// por isso é este que o Google deve indexar.
export const SITE_URL = "https://www.realityconcept3d.com";
export const SITE_NAME = "Reality Concept 3D";
export const CONTACT_EMAIL = "rodriguez@realityconcept3d.com";

// Páginas públicas que entram no sitemap. As demos privadas (/demo/...) ficam de fora.
export const PUBLIC_PAGES = ["/", "/contacto", "/creditos", "/privacidade", "/termos", "/cookies"];

const SOCIAL_IMAGE = {
  url: "/images/social-cover.jpg",
  width: 1200,
  height: 630,
  alt: "Reality Concept 3D — Do ecrã. Para a vida.",
};

// Metadados de cada página: canonical, Open Graph e Twitter próprios.
// O Next.js substitui o openGraph do layout em vez de o juntar, por isso a imagem vai sempre aqui.
export function pageMetadata({
  path,
  title,
  description,
}: {
  path: string;
  title?: string;
  description: string;
}): Metadata {
  const socialTitle = title ? `${title} | ${SITE_NAME}` : "Reality Concept 3D — Do ecrã. Para a vida.";
  return {
    ...(title && { title }),
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "pt_PT",
      type: "website",
      images: [SOCIAL_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [SOCIAL_IMAGE.url],
    },
  };
}
