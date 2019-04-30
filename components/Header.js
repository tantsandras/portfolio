import Link from 'next/link'
import { LinkStyle } from '../components/styled'
import Navbar from "./Navbar"

const Header = () => (
  <div>
    <Navbar>
    <Link href="/">
        <LinkStyle>Home</LinkStyle>
        </Link>
            <div></div>
            <Link href="/portfolio">
    <LinkStyle>Portfolio</LinkStyle>
    </Link>
        <Link href="#contact">
        <LinkStyle>Contact</LinkStyle>
        </Link>
    </Navbar>
  </div>
)

export default Header