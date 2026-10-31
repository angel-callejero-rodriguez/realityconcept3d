import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    // As demos privadas (/demo/...) não são bloqueadas aqui de propósito: se fossem,
    // o Google não leria o "noindex" dessas páginas e um link partilhado podia aparecer nos resultados.
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
