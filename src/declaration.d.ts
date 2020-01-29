declare module "*.css" {
  const content: { [className: string]: string }
  export = content
}

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export = content
}
