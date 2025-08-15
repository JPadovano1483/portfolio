import Link from "next/link";

const Navbar = () => {
  const handleScroll = (e, id) => {
    e.preventDefault()
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    } else {
      console.log("here")
    }
  }

  return (
    <nav className="border-1 text-white p-5 rounded-full shadow-md max-w-4xl mx-auto">
      <ul className="flex space-x-4">
        <li>
          <Link href="#about" onClick={(e) => handleScroll(e, "about")}>
            About
          </Link>
        </li>
        <li>
          <Link href="#projects" onClick={(e) => handleScroll(e, "projects")}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar