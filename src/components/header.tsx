import Link from "next/link";
import React from 'react'
import { FaSearch } from "react-icons/fa";
import "../style/header.css";

const Header = () => {
  return (
    <div>
      <nav className="navebar">
        <div>
          <h1>
            My Portfolio
          </h1>
        </div>
        <div>
          <ul className="nave-ul">
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="./about">About</Link>
            </li>
            <li >
              <Link href="./contact">Contact</Link>
            </li>
            <li >
              <FaSearch />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default Header;