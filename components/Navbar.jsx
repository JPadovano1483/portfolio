import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-1 text-white p-5 rounded-full shadow-md max-w-4xl mx-auto">
      <ul className="flex space-x-4">
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar