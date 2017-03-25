(($r) => {
  if ($r !== undefined) {
    $r.initialize({

      controls: false,

      progress: false,

      fragments: true,

      history: true,

      center: true,

      dependencies: [
        // Cross-browser shim that fully implements classList - https://github.com/eligrey/classList.js/
        { src: 'public/assets/vendors/revealjs/lib/js/classList.js', condition: function() { return !document.body.classList; } },

        // Interpret Markdown in <section> elements
        { src: 'public/assets/vendors/revealjs/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'public/assets/vendors/revealjs/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },

        // Syntax highlight for <code> elements
        { src: 'public/assets/vendors/revealjs/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },

        // Zoom in and out with Alt+click
        { src: 'public/assets/vendors/revealjs/plugin/zoom-js/zoom.js', async: true },

        // Speaker notes
        { src: 'public/assets/vendors/revealjs/plugin/notes/notes.js', async: true },

        // MathJax
        { src: 'public/assets/vendors/revealjs/plugin/math/math.js', async: true }
      ]
    });
  }
})(Reveal);
