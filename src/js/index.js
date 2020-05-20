import Reveal from 'reveal.js';

// import hljs from 'highlight.js/lib/core';
// import javascript from 'highlight.js/lib/languages/javascript';
// import xml from 'highlight.js/lib/languages/xml';
// hljs.registerLanguage('xml', xml);
import 'sass/main.scss';

document.body.innerHTML = `<div class="reveal">
<div class="slides">
    <!--inject:slides-->
    <section><h1>The END</h1></section>
</div>
</div>`;

Reveal.initialize({
  controls: true,
  touch: true,
  slideNumber: 'c/t',
  minScale: 0.2,
  maxScale: 2.0,
  dependencies: [
    { src: 'plugin/highlight/highlight.js', async: true },
    { src: 'plugin/highlight/markdown.js', async: true },
    { src: 'plugin/notes/notes.js', async: true },
  ],
});