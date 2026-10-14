import Link from "next/link";
import { profile } from "@/data/site";

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <Link href="/" className="nav-name">{profile.name}</Link>
        <nav aria-label="Main">
          <Link href="/#work">Work</Link>
          <Link href="/#about">About</Link>
          <Link href="/#toolkit">Toolkit</Link>
          <a href={profile.resume} target="_blank" rel="noopener">Resume</a>
          <Link href="/#contact" className="nav-cta">Say hello</Link>
        </nav>
      </div>
    </header>
  );
}
