const tl = new TimelineMax()

// args are as follow: element, duration, options, gap
tl.to('.orange', 1, { x: 750 }).to('.blue', 1, { x: 750 }, '+=1').to('.red', 1, { x: 750 }, '1')
