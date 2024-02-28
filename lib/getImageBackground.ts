export default function getImagePath(
  page: string,
  windowWidth: number
): string {
  //responsive background
  return windowWidth < 768
    ? `/assets/${page}/background-${page}-mobile.jpg`
    : windowWidth > 768 && windowWidth < 1024
    ? `/assets/${page}/background-${page}-tablet.jpg`
    : `/assets/${page}/background-${page}-desktop.jpg`;
}
