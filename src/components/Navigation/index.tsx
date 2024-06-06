"use client"

import React, { useEffect, useState } from "react";
import { useWindowScroll } from "@uidotdev/usehooks";

import Title, { Size, Weight } from "../Title";

import utilStyles from "@/app/utilities.module.css";
import styles from "./index.module.css";
import { usePathname } from "next/navigation";
import NavIcon from "../icons/navigation";
import { useNavigation } from "@/context/navigation";

const TABS = ["Experience", "Work", "Contact"]
const HOME = TABS[0]

export function Navigation({ isOpen, openTab, open, toggleOpen }: { isOpen: boolean, openTab: string, open: (tab: string) => void, toggleOpen: () => void }) {
  const [{ x, y }, scrollTo] = useWindowScroll();
  const pathname = usePathname()

  useEffect(() => {
    open(pathname.slice(1))
  }, [pathname])

  return (
    <>
      <div className={`${styles.Navigation} ${utilStyles.Debug}`}>
        <div className={styles.header}>
          <div className={styles.items}>
            {isOpen ? <div></div> : <Title value="Alex Peña." size={Size.Large} weight={Weight.Heavy} gradient />}

            <div className={styles.links}>
              {TABS.map(tab => {
                const path = tab === HOME ? "" : tab.toLowerCase().replace(" ", "-")
                return <Title
                  key={tab}
                  value={tab}
                  href={"/" + path}
                  size={Size.Small}
                  weight={Weight.Heavy}
                  gradient={openTab === path}
                />
              })}
            </div>

            <NavIcon isOpen={isOpen} toggle={toggleOpen} className={styles.hamburger} />
          </div>
          {!isOpen && <Title
            value="Software Engineer"
            size={Size.Small}
            weight={Weight.Heavy}
            className={`${styles.subtext}
            ${!!y && y > 15 ? styles.hide : void 0}`}
            gradient
          />}

          {isOpen && <div className={`${styles.links} ${styles.mobile}`}>
            {TABS.map(tab => {
              const path = tab === HOME ? "" : tab.toLowerCase().replace(" ", "-")
              return <Title
                key={tab}
                value={tab}
                href={"/" + path}
                size={Size.Large}
                weight={Weight.Heavy}
                gradient={openTab === path}
                onClick={toggleOpen}
              />
            })}
          </div>}
        </div>
      </div>
    </>
  );
}

export function NavigationMenu({ openTab, open }: { isOpen: boolean, openTab: string, open: (tab: string) => void }) {
  const pathname = usePathname()

  useEffect(() => {
    open(pathname.slice(1))
  }, [pathname])

  return <div className={styles.menu}>
    {TABS.map(tab => {
      const path = tab === HOME ? "" : tab.toLowerCase().replace(" ", "-")
      return <Title
        key={tab}
        value={tab}
        href={"/" + path}
        size={Size.Large}
        weight={Weight.Heavy}
        gradient={openTab === path}
      />
    })}
  </div>
}