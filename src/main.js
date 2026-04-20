import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown";
import Highlight from "reveal.js/plugin/highlight";

import "reveal.js/plugin/highlight/monokai.css";
import "reveal.js/reveal.css";
import "reveal.js/theme/sky.css";

let deck = new Reveal({
  plugins: [Markdown, Highlight],
  hash: true,
});

deck.initialize();
