# Svg Essentials And Animation V2

This repo hosts code/notes taken from the course https://frontendmasters.com/courses/svg-essentials-animation/

<details>
  <summary>SVG Anatomy Overview</summary>

- Stands for Scalable Vector Graphics.
- Crisp on any display.
- One asset that can scale across all devices.
- Less HTTP request to handle.
- Small filesize.
- Easy to animate.
- Easy to make accessible.
- In some situations, svg does a better job than css positioning.
- Platonic Shapes

  1. Think of the viewbox like a piece of graph paper
  2. `<viewbox="0 0 50 100">` attribute values are described as x, y, width and height. [(0, 0) is located top left.]
  3. Stroke is for adding border to SVG shapes.
  4. Circle svgs coords starts at the middle. (cx, cy)
  5. Polygon points attribute is described as x,y,x,y,x,y...
  6. You can scale the viewport using the width with css.

- Elements within the svg can be positioned outside the viewbox and still be in the dom.
- Recommendation: use preserve aspect ratio for layouts.
- `<g></g>` g tag stands for group and is basically like a div for grouping objects.
- path tag: ending with z means there is a closed path, otherwise there will be an open path
- path tags have a `d=""` attribute that starts with the value 'M'.
- `<polyline />` (zigzags) is very similar to polygon and they have a points attribute.
- Path letters

  - M stands for moveTo
  - L stands for lineTo
  - H horizontal line drawn from current position.
  - Vertical line drawn from current position.
  - Z ending path.
  - lowercase letters means absolute positioning.
  - There are other curve commands also. See more at https://css-tricks.com/svg-path-syntax-illustrated-guide/

- Reading on bezier curves. https://www.jasondavies.com/animated-bezier/
- You can plug `<title>` tag within an svg element for a11y purposes.
- `role="presentation"` in svg means to not have screen read all the svg data.
- Additional reading https://www.tpgi.com/using-aria-enhance-svg-accessibility/ and https://css-tricks.com/accessible-svgs/
  </details>
