export const isActiveLink = ({ href }: { href: string }) =>
  href.replace(/\/$|$/, "/") === window.location.pathname.replace(/\/$|$/, "/")
    ? {
        style: {
          color: "var(--menu-link-color-active)",
        },
      }
    : null
