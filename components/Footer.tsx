import { Github, Linkedin, Twitter } from "lucide-react"
import { ElementType } from "react"

type NavItem = {
  name: string
  href: string
  Icon: ElementType
}

const navigation: NavItem[] = [
  {
    name: "GitHub",
    href: "https://github.com/your-username",
    Icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/your-username",
    Icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/your-username",
    Icon: Twitter,
  },
]

export default function Footer() {
  return (
    <footer className="py-8 border-t">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-4">
        {/* Socials */}
        <div className="flex space-x-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="sr-only">{item.name}</span>
              <item.Icon aria-hidden="true" className="h-5 w-5" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Raghav. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
