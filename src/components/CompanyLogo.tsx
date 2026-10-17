import type { CSSProperties } from "react";

const brands = {
  "Credential Network": { name: "Credential Network", logo: "/company-credential.png", accent: "#087c59", tint: "#f0faf5", surface: "#ffffff", url: "https://credentialnetwork.com/" },
  Stanza: { name: "Stanza", logo: "/company-stanza.png", accent: "#92370f", tint: "#fdf4ed", surface: "#ffffff", url: "https://stanza.legal/" },
  "MSB Bank": { name: "MSB", logo: "/company-msb.svg", accent: "#b83e0a", tint: "#fff5ee", surface: "#ffffff", url: "https://www.msb.com.vn/" },
  KPIM: { name: "KPIM", logo: "/company-kpim.png", accent: "#006d91", tint: "#eef8fc", surface: "#ffffff", url: "https://kpim.vn/" },
  "Auspify Technologies": { name: "Auspify Technologies", logo: "/company-auspify.png", accent: "#096aa4", tint: "#eff8fc", surface: "#ffffff", url: "https://auspify.com/" },
  Gonzaga: { name: "Gonzaga University", logo: "/company-gonzaga.png", accent: "#002f56", tint: "#f0f4fa", surface: "#002f56", url: "https://www.gonzaga.edu/" },
  Petrolimex: { name: "Petrolimex", logo: "/company-petrolimex.webp", accent: "#153c76", tint: "#f1f5fc", surface: "#ffffff", url: "https://www.petrolimex.com.vn/" },
};

function brandFor(company: string) {
  return brands[company.startsWith("Gonzaga University") ? "Gonzaga" : company as keyof typeof brands];
}

export function companyBrandStyle(company: string): CSSProperties {
  const brand = brandFor(company);
  return brand ? { "--company-accent": brand.accent, "--company-tint": brand.tint } as CSSProperties : {};
}

export function CompanyLogo({ company }: { company: string }) {
  const brand = brandFor(company);
  if (!brand) return null;
  return (
    <a
      href={brand.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${brand.name} website`}
      className="company-logo"
      style={{ backgroundColor: brand.surface }}
    >
      <img src={brand.logo} alt={`${brand.name} logo`} data-company={company} loading="lazy" width="112" height="56" />
    </a>
  );
}
