declare module "*.md" {
  const value: string; // markdown is just a string
  export default value;
}
declare module "*.svg" {
  const content: SVGAElement;
  export default value;
}
