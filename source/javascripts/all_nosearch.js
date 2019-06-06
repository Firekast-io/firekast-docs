//= require ./lib/_energize
//= require ./app/_toc
//= require ./app/_lang

const doLink = a => {
  if((typeof a.href == "string") && (a.href.charAt(0) != "#")){ a.target = "_blank" };
}

$(function() {
  loadToc($('#toc'), '.toc-link', '.toc-list-h2', 10);
  setupLanguages($('body').data('languages'));
  $('.content').imagesLoaded( function() {
    window.recacheHeights();
    window.refreshToc();
  });
  $('.content a').each((i,a)=>doLink(a))
});

window.onpopstate = function() {
  activateLanguage(getLanguageFromQueryString());
};
