/*global phantom:true WebPage:true console:true*/

/**
 * Super lightweight quick-and-dirty demo of the PhantomJS API.
 * More/less a straight copy/paste from <https://gist.github.com/1491205>
 *
 * More about PhantomJS at <http://www.phantomjs.org/>
 */
var page = new WebPage();
page.onConsoleMessage = function(msg) {
  console.log(msg);
};

console.log('[phantomjs] Loading page...');

page.open(encodeURI('http://blog.founddrama.net/'), function(status){
  if (status !== 'success') {
    console.log('could not retrieve!');
  } else {
    page.evaluate(function(){
      console.log('[phantomjs] Querying for post titles...');
      var list = Array.prototype.slice.call(document.querySelectorAll('h2 > a[rel="bookmark"]'), 0);
      console.log('[phantomjs] ' + list.length + ' post titles:');
      list.forEach(function(el){
        console.log('  ' + el.innerHTML.replace(/<.*?>/g, ''));
      });
    });
  }
  phantom.exit();
});