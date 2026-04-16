import { useEffect } from "react";

interface PageSEOOptions {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
  schema?: object | object[];
}

const BASE_URL = "https://indoinvestorinfraworld.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

export function usePageSEO({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
  schema,
}: PageSEOOptions) {
  useEffect(() => {
    // ── Title ──
    document.title = title;

    // ── Helper ──
    const setMeta = (selector: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        const attr = selector.match(/\[(.+?)=/)?.[1];
        const val = selector.match(/="(.+?)"/)?.[1];
        if (attr && val) el.setAttribute(attr, val);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    // ── Meta ──
    setMeta('meta[name="description"]', description);
    setMeta('meta[name="robots"]', noIndex ? "noindex, nofollow" : "index, follow");

    // ── Canonical ──
    const canonicalURL = canonical
      ? `${BASE_URL}${canonical}`
      : `${BASE_URL}${window.location.pathname}`;
    setLink("canonical", canonicalURL);

    // ── Open Graph ──
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', canonicalURL);
    setMeta('meta[property="og:image"]', ogImage);
    setMeta('meta[property="og:type"]', "website");
    setMeta('meta[property="og:site_name"]', "Indo Investor Infra World");
    setMeta('meta[property="og:locale"]', "en_IN");

    // ── Twitter ──
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]', ogImage);
    setMeta('meta[name="twitter:card"]', "summary_large_image");

    // ── Page schema ──
    if (schema) {
      const id = "page-schema-ld";
      let el = document.getElementById(id);
      if (!el) {
        el = document.createElement("script");
        el.id = id;
        (el as HTMLScriptElement).type = "application/ld+json";
        document.head.appendChild(el);
      }
      el.textContent = JSON.stringify(Array.isArray(schema) ? schema : [schema]);
    }

    return () => {
      // cleanup page-level schema on unmount
      document.getElementById("page-schema-ld")?.remove();
    };
  }, [title, description, canonical, ogImage, noIndex, schema]);
}
