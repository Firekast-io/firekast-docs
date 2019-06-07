//= require ./lib/_energize
//= require ./app/_toc
//= require ./app/_lang

var lastEventAnchor = "";

const sanitizeLink = function(a){
  if((typeof a.href == "string") && !/^#|^\?|(firekast\.io\/docs)|(docs\.firekast\.io)|(localhost:4567)/.test(a.href) ){
    a.target = "_blank"
  }
}

const deepDocLink = function(url){
  return url.search + url.hash
}

const fkio_updateParentWindow = function(){
  window.parent.postMessage('docAnchorUpdated'+'::'+deepDocLink(window.location),"*")
};

const onMessage = function(e){
  var re = /^docAchorRequested::/
  if(re.test(e.data)){
    lastEventAnchor = e.data.replace(re,'');
    window.location.assign(e.detail);  
  }
}


$(function() {
  loadToc($('#toc'), '.toc-link', '.toc-list-h2', 10);
  setupLanguages($('body').data('languages'));
  $('.content').imagesLoaded( function() {
    window.recacheHeights();
    window.refreshToc();
  });
  $('.content a').each(function(i,a){sanitizeLink(a)});
  window.addEventListener("onmessage", onMessage)
});

window.onpopstate = function() {
  activateLanguage(getLanguageFromQueryString());
};
