import styled from "styled-components"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { Contact } from "./Contact"

const HeaderContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  margin: auto;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 500px;
  justify-content: space-around;
`

const ROUTES = [
  { name: "Home", route: "/" },
  { name: "Skills", route: "/skills" },
  { name: "About", route: "/about" },
]

interface HeaderProps {
  tabs?: {
    name: string
    route: string
  }[]
}

const StyledAtag = styled.a<{ selected: boolean }>`
  color: black;
  ${(props) =>
    props.selected
      ? `
  text-decoration: underline;
  text-underline-offset: 4px;
  `
      : "  text-decoration: none;"}
`

export const Header = (props: HeaderProps) => {
  const tabs = props.tabs || ROUTES
  const router = useRouter()
  const [contactOpen, setContactOpen] = useState(false)
  const openContactModal = (
    evt: React.MouseEvent<HTMLAnchorElement, React.MouseEvent>
  ) => {
    evt.preventDefault()
    setContactOpen(true)
  }
  return (
    <HeaderContainer>
      {tabs.map((tab, index) => {
        return (
          <Link key={index} href={tab.route}>
            <StyledAtag
              selected={router.pathname.endsWith(tab.route)}
              href={tab.route}
            >
              {tab.name}
            </StyledAtag>
          </Link>
        )
      })}
      <StyledAtag
        selected={contactOpen}
        onClick={openContactModal as any}
        href={"/contact"}
      >
        Contact
      </StyledAtag>
      {contactOpen && <Contact onClose={() => setContactOpen(false)} />}
    </HeaderContainer>
  )
}
