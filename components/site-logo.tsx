import Image from "next/image";
import Link from "next/link";

type SiteLogoProps = {
  href?: string;
  invert?: boolean;
};

export function SiteLogo({ href = "/", invert = false }: SiteLogoProps) {
  return (
    <Link href={href} className="ppp-logo" aria-label="Pex Pipe Pros home">
      <Image src="/pexpipepros-mark.webp" alt="Pex Pipe Pros logo mark" width={42} height={42} priority />
      <span className="ppp-logo-copy">
        <strong className={invert ? "text-white" : "text-[var(--ppp-ink)]"}>Pex Pipe Pros</strong>
        <span className={invert ? "text-white/70" : "text-[var(--ppp-muted)]"}>Poly B to PEX repipe specialists</span>
      </span>
    </Link>
  );
}
