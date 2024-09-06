import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-center p-4">
      <Image
        src="/images/brand.png"
        alt="Pokémon Logo"
        width={150}
        height={50}
      />
    </header>
  );
}
