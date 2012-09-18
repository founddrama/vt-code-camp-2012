# Like a Genie from the Lamp:

### Headless JavaScript Testing with Jasmine and PhantomJS

* "Who is this guy?"
  * Rob Friesel - Sr. User Interface Developer at Dealer.com Websystems
  * [@founddrama](https://twitter.com/founddrama)
  * [blog.founddrama.net](http://blog.founddrama.net)
  * [github.com/founddrama](http://github.com/founddrama)
* What are we talking about?
  * "headless JavaScript unit testing"
  * and our toolkit? *Jasmine* and *PhantomJS*
  * ![slide](http://1.bp.blogspot.com/-7_3nwwfN67w/UEP7daaqchI/AAAAAAAAHcE/yxHbGruGe6Y/s1600/GirlOnPhonePic.jpg)
* What problem are we trying to solve?
  ![slide](http://ginisnaturenews.files.wordpress.com/2011/01/crow-hook-basket-tube.jpg?w=640)
  * (reliable) testing for your front-end code
  * "In the beginning..."
    ![slide](http://static1.fjcdn.com/comments/lt+---+His+mother+on+the+computer+_7701be8351b0075a91f1b2913328a923.jpg)
  * "But then we discover unit testing!"
    ![Jasmine code](http://wwwimages.adobe.com/www.adobe.com/content/dam/Adobe/en/devnet/html5/articles/unit-test-javascript-applications-with-jasmine/fig02.jpg)
    ![Jasmine results](http://wwwimages.adobe.com/www.adobe.com/content/dam/Adobe/en/devnet/html5/articles/unit-test-javascript-applications-with-jasmine/fig01.jpg)
    (and/or my own images)
  * "Let's skip the primer on unit testing."
    * (anyone *not* know what unit testing is?)
  * "And of course we can even go all the way to TDD, but let's stay out of that
    discussion today..."
    ![slide](http://diogoosorio.com/public/images/blog/tdd_flow.gif)
* benefits of unit testing
  ![slide](http://farm8.staticflickr.com/7125/7131921511_85a5a7c820_k.jpg)
  [source](http://www.flickr.com/photos/badjonni/7131921511/in/pool-stickfiguresinperil/)
  * Self-explanatory?
  * more confident about the changes you make
  * more confident in the changes *others* make
  * builds business value because you can prove stability
* a brief overview of JS unit testing
  ![slide](http://farm4.staticflickr.com/3207/2751724228_68326fa9e8.jpg)
  * "If you've unit tested in other languages before..."
    * usually a "clear winner"? (your #1 Google search result? and...
      *my totally unscientific survey*)
      * Java: JUnit
      * Groovy: Spock
      * Ruby: RSpec
      * .NET: NUnit
      * Scala: specs
  * JavaScript unit testing landscape? *less clear* [slide: "plastered" w/
    logos and names, like an urban street sign]
    ![street sign covered with stickers](http://www.brooklynstreetart.com/theblog/wp-content/uploads/2010/11/brooklyn-street-art-stickers-jaime-rojo-11-10-web-13.JPG)
    * [Wikipedia's 'Unit testing frameworks'](http://en.wikipedia.org/wiki/List_of_unit_testing_frameworks#JavaScript)
      article has a table that features **35** different unit testing frameworks
      for JavaScript.
      * "to say nothing of:" ["CasperJS", "Google JS Test", "Siesta",
        "Expresso", "Mocha"]
      * "The community doesn't really rally around any one solution..."
        * (depends on what you're doing)
  * **sidebar:** *writing testable JavaScript*
    * no real "testing tradition" in JS (?)
    * JS "traditionally" hard to test
    * "not functional" - dealing w/ browser state etc.
    * "This is a technique proble, not a language problem."
    * JS *can* be carefully crafted (like any other lang)
      * cite: Ben Cherry's [Writing Testable JavaScript](http://www.adequatelygood.com/2010/7/Writing-Testable-JavaScript)
* introduce Jasmine specifically
  * Q\. "Why Jasmine?"
    * (funny) A. "Well, you gotta pick something..."
    * (real) A. "BDD"
  * Q\. "What is BDD?" A. "Behavior Driven Development"
    * testing/dev methodology based loosely on TDD
    * main difference? "natural language" approach
      * tests written as "behaviors" - can/should be written by/with the BA
      * easily converted into tests (write your tests with your BAs)
* demo of Jasmine
  * break from slides; bring up code, tests in browser
* problems with unit-testing front-end code
  * approach is not w/o its problems
  * chief among them? - you're doing it in the browser
    * (so *that's* slow, probably also *manual*)
  * what about automation? continuous integration?
* **sidebar:** there *are* CI solutions (but they're slow)
  * mention: Selenium, WebDriver, Geb (re: in-browser functional tests)
  * mention: BusterJS (as an alternative (but beta))
  * mention: "browser lab"
  * *but* - "Cumbersome, slow, expensive..."
    * most of the time: overkill
* introduce PhantomJS
  ![PhantomJS](http://openclipart.org/image/800px/svg_to_png/lemmling_Cartoon_ghost.png)
  * Q\. "What is PhantomJS?" A. "headless WebKit" (plus explanation)
    * *aside:* you can use it for just about anything...
  * Q\. "How does this help us?"
    1. A\. "Gets you out of the browser refresh game."
    2. A\. "Sets you up for a CI strategy."
  * **sidebar:** reL won't solve all your problems
    * running tests in PhantomJS is like running then "just in Chrome"
      * *except* no an actual "physical" viewport
    * in other words: if you have "pure" JS unit tests, this will run them
      *super fast* (and as part of CI)
    * but not a substitute for robust functional/acceptance testing across
      multiple browsers
    * use in conjunction w/ something like JSHint and your regular QA
  * Q\. "How do you interact with PhantomJS?" A\. (show a "hello world" type
    example and introduce the API)
* "Are you thinking what I'm thinking?"
  ![slide](http://farm3.staticflickr.com/2355/2179856314_f749abdc0d_o.jpg)
  * [credit](http://www.flickr.com/photos/library_of_congress/2179856314/)
* introduce strategy for using PhantomJS to run Jasmine tests
  * toolkit!
    1. Jasmine for tests
    2. PhantomJS as the test environment
    3. Larry Myers `jasmine-reporters` library of extensions
       * see also: `ConsoleRunner` and `JUnitReporter` and `phantomjs-runner`
* demo!
* discussion? / questions?