// js/main.js
$(function () {

  /* ---------------------------------------------------------------
     1)  OPTIONAL: replicate Pandoc’s tiny fix so that a <div class=
         "section toc-ignore">…<h2>Heading</h2>… doesn’t get listed.
         Safe to keep even if you don’t currently use toc-ignore.
  ---------------------------------------------------------------- */
  $('div.section.toc-ignore')
      .removeClass('toc-ignore')
      .children('h1,h2,h3,h4,h5')
      .addClass('toc-ignore');

  /* ---------------------------------------------------------------
     2)  Build the sidebar nav
  ---------------------------------------------------------------- */
  $("#TOC").tocify({
      selectors: ".section-title",
      theme:     "bootstrap3",
      context:   ".toc-content",
      hashGenerator: function (text) {
          return text.replace(/[.\\/?&!#<>]/g, '')
                     .replace(/\s/g, '_')
                     .toLowerCase();
      },
      showAndHide:  true,
      scrollTo:     0,
      smoothScroll: true
  });

  /* ---------------------------------------------------------------
     3)  Pandoc helper functions (only run if the script is present)
  ---------------------------------------------------------------- */
  if (typeof window.buildTabsets         === "function")
        window.buildTabsets("TOC");

  if (typeof window.initializeCodeFolding === "function")
        window.initializeCodeFolding(true);
});

/* ---------- simple pill-tabs ------------------------------------- */
$(function () {

  // click on a pill
  $('#portfolioTabs').on('click', 'a', function (e) {
      e.preventDefault();

      const $targetPanel = $($(this).attr('href'));   // #first, #second…

      /* 1 ▸ update pill styling */
      $('#portfolioTabs a').removeClass('active');     // clear all
      $(this).addClass('active');                     // activate clicked

      /* 2 ▸ show / hide panels */
      $('.tab-content').attr('hidden', true);         // hide every panel
      $targetPanel.removeAttr('hidden');              // show the one we need
  });

  /* initialise on page-load – trigger a click on the first pill */
  $('#portfolioTabs a:first').trigger('click');
});
