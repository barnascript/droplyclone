"use client";

import styles from "./Navbar.module.scss";
import { arrow_down, logo } from "../../exports/icons";
import { Button } from "../../exports/mini_components";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleDropDown, setToggleDropDown] = useState(false);

  const path = usePathname();
  const pathname = path.slice(1);

  console.log(pathname);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div className={styles.wrapper}>
      {/* THE PARENT CONTAINER */}
      <div className={`sw ${styles.container}`}>
        {/* Desktop Navbar */}
        <div className={styles.desktop_container}>
          {/* Desktop Logo */}
          <Link href="/" className={styles.logo}>
            <Image src={logo} alt="logo" />
          </Link>
          {/* Desktop Links */}
          <div className={styles.desktop_links}>
            <Link
              smooth="true"
              href="/about"
              className={`p-default ${
                pathname === "about"
                  ? ` ${styles.link} ${styles.active}`
                  : styles.link
              }`}
            >
              About
            </Link>
            <Link scroll={false} href="/#mainblock">
              WhyDroply
            </Link>
            {/* How Droply Works link*/}
            <a
              smooth="true"
              className={`p-default ${
                pathname === "individual" || pathname === "merchant"
                  ? ` ${styles.how_droply_works} ${styles.active}`
                  : styles.how_droply_works
              }`}
              onClick={() => setToggleDropDown(!toggleDropDown)}
            >
              <span>How Droply Works</span>
              <Image src={arrow_down} alt="arrow_down" />
            </a>
            {/* How Droply Works Dropdown */}
            <div
              className={
                !toggleDropDown ? styles.dropdown : styles.dropdown_visible
              }
            >
              {/* Individual Page*/}
              <Link
                smooth="true"
                href="/individual"
                className={`p-default ${styles.individual}`}
                onClick={() => setToggleDropDown(!toggleDropDown)}
              >
                Individual
              </Link>
              {/* Merchant Page*/}
              <Link
                smooth="true"
                href="/merchant"
                className={`p-default ${styles.merchant}`}
                onClick={() => setToggleDropDown(!toggleDropDown)}
              >
                Merchant
              </Link>
            </div>

            {/* Other Links */}
            <Link
              smooth="true"
              href="/faqs"
              className={`p-default ${
                pathname === "faqs"
                  ? ` ${styles.link} ${styles.active}`
                  : styles.link
              }`}
            >
              FAQS
            </Link>
            <Link
              smooth="true"
              href="/contact"
              className={`p-default ${
                pathname === "contact"
                  ? ` ${styles.link} ${styles.active}`
                  : styles.link
              }`}
            >
              Contact
            </Link>
          </div>
          {/* Auth Buttons */}
          <div className={styles.buttons}>
            {/* Sign Up */}
            <Button
              button_text="Sign up"
              button_bgColor="var(--palatinate-blue)"
              button_color="white"
              paddingInline="24px"
              height="33px"
            />
            {/* Login */}
            <Button
              button_text="Login"
              button_bgColor="var(--eerie-black)"
              button_color="white"
              paddingInline="24px"
              height="33px"
            />
          </div>
        </div>
      </div>
      {/* Mobile Wrapper */}
      <div className={styles.mobile_wrapper}>
        {/* Mobile Container */}
        <div className={`sw ${styles.mobile_container}`}>
          {/* Mobile Navigation */}
          <div className={styles.mobile_nav}>
            {/* Mobile Logo */}
            <Link href="/">
              <Image src={logo} alt="logo" className={styles.logo} />
            </Link>
            {/* Mobile Navbar and Tablet Navbar Buttons and Hamburger */}
            <div className={styles.button_and_controls}>
              <div className={styles.buttons}>
                {/* Mobile Sign Up */}
                <Button
                  button_text="Sign up"
                  button_bgColor="var(--palatinate-blue)"
                  button_color="white"
                  paddingInline="24px"
                  height="33px"
                />
                {/* Mobile Login */}
                <Button
                  button_text="Login"
                  button_bgColor="var(--eerie-black)"
                  button_color="white"
                  paddingInline="24px"
                  height="33px"
                />
              </div>
              {/* Mobile and Tablet Hamburger */}
              <div className={styles.controls} onClick={handleToggleMenu}>
                <div
                  className={
                    !toggleMenu ? styles.bar_one : styles.bar_one_slant
                  }
                ></div>
                <div
                  className={
                    !toggleMenu ? styles.bar_two : styles.bar_two_slant
                  }
                ></div>
                <div
                  className={
                    !toggleMenu ? styles.bar_three : styles.bar_three_slant
                  }
                ></div>
              </div>
            </div>
          </div>
          {/* Mobile Links Dropdown */}
          <div
            className={
              toggleMenu
                ? styles.mobile_links_container_visible
                : styles.mobile_links_container
            }
          >
            <div className={styles.mobile_links}>
              {/* About */}
              <Link
                href="/about"
                className={`p-default ${styles.link}`}
                onClick={handleToggleMenu}
              >
                About
              </Link>
              {/* Why Droply */}
              <Link href="#" onClick={handleToggleMenu}>
                Why Droply
              </Link>
              {/* FAQS */}
              <Link href="/faqs" onClick={handleToggleMenu}>
                FAQS
              </Link>
              {/* Contact Us*/}
              <Link href="/contact" onClick={handleToggleMenu}>
                Contact Us
              </Link>
              {/*Droply for Individuals */}
              <Link href="/individual" onClick={handleToggleMenu}>
                Droply for Individuals
              </Link>
              {/* Individuals Login */}
              <Link href="/individual" onClick={handleToggleMenu}>
                Individuals Login
              </Link>
              {/* Merchant Login */}
              <Link href="/merchant" onClick={handleToggleMenu}>
                Merchant Login
              </Link>
              {/* Droply for Business */}
              <Link href="#" onClick={handleToggleMenu}>
                Droply for Businessess
              </Link>
            </div>
            {/* Mobile Dropdown Buttons */}
            <div className={styles.buttons}>
              <button className={styles.mobile_blue_button}>Sign Up</button>
              <button className={styles.mobile_black_button}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
