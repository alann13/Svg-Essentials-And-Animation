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

<details>
  <summary>CSS Animation</summary>

- SVG optimization tool : https://jakearchibald.github.io/svgomg/
- Starting an SVG protip:

  - Put everything in the viewbox first.
  - Whatever doesn't need to be there initially can have it's opacity set to 0.
  - Slowly unveil things as you go.

- Planning animation : pen and paper, storyboards etc.
- For img src, object, embed, background url and iframe, you can only designate animation if inside the SVG.
- For inline, both SVG animation and interaction are supported.
- SVG tag is an html element. Thus, it has a background. We may unintentionally style this background. Something to look out for.
- Background property styling doesn't work for SVG. We use fill and stroke.
- SVG is built for drawing. CSS is built for layouts.
- Transform-Origin is a css property to manipulate the x and y axis as the origin start at top left of the element.
- For SVG animations, javascript works quite well.
</details>

<details>
  <summary>Greensock</summary>

- Animation usage recommendations:

  1. CSS: small sequences and simple interactions.
  2. Start switching from css to another tool once you get more than 3 sequences.
  3. GSAP: awesome for sequencing and complex movement.
  4. React spring/ react-motion for movements that you'd like to look realistic.

- We should not animation with margin, left, top because they cause a repaint. use transform for positioning.
- Hardware acceleration reading: https://css-tricks.com/debugging-css-keyframe-animations/, https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/
- Tweenmax basic syntax `TweenMax .to/.from/.fromTo(htmlElementm, duration, {...options})`
- GSAP cheatsheet: https://github.com/sdras/svg-workshop/blob/master/gsap-cheatsheet.js
- stagger: same sequence repeated after delay for subsequent elements.
- Greensock and D3 play well together.
- Timeline

  1.  Stack tweens.
  2.  Set them a little before and after one another.
  3.  Change their placement in time.
  4.  Group them into scenes.
  5.  Add relative labels.
  6.  Animate the scenes.

- Exercise to do : pick an svg and play with it using gsap.
  </details>
