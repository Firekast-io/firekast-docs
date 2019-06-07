//= require ./lib/_energize
//= require ./app/_toc
//= require ./app/_lang

var lastEventAnchor = "";

const DOC_ANCHOR_UPDATED = "docAnchorUpdated"; // anchor updated after scroll/click in the iframe
const DOC_ANCHOR_REQUESTED = "docAchorRequested"; // parent window is requesting a specific anchor, force iframe navigating to it

const sanitizeLink = function(a){
  if((typeof a.href == "string") && !/^#|^\?|(firekast\.io\/docs)|(docs\.firekast\.io)|(localhost:4567)/.test(a.href) ){
    a.target = "_blank"
  } else {
    a.target = ""
  }
}

const deepDocLink = function(url){
  return url.search + url.hash
}

const fkio_updateParentWindow = function(){
  const e = new CustomEvent(DOC_ANCHOR_UPDATED, {detail: deepDocLink(window.location)});
  window.parent.document.dispatchEvent(e);
};

const onNavRequested = function(e){
  if(!e.detail){ return }
  loc = e.detail;
  lastEventAnchor = e.detail;
  window.location.assign(e.detail);
};

$(function() {
  loadToc($('#toc'), '.toc-link', '.toc-list-h2', 10);
  setupLanguages($('body').data('languages'));
  $('.content').imagesLoaded( function() {
    window.recacheHeights();
    window.refreshToc();
  });
  $('.content a').each(function(i,a){sanitizeLink(a)});
  window.document.addEventListener(DOC_ANCHOR_REQUESTED, onNavRequested);
});

window.onpopstate = function() {
  activateLanguage(getLanguageFromQueryString());
};
