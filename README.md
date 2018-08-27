# Like a Genie from the Lamp:

### Headless JavaScript Testing with Jasmine and PhantomJS

Example code to accompany my presentation on using [Jasmine](https://jasmine.github.io/)
and [PhantomJS](http://phantomjs.org/) for lightning-fast JavaScript unit tests,
a talk that was given at the 2012 [VT Code Camp](http://vtcodecamp.org/).

**Abstract:**

> Jasmine is a mature BDD test framework for JavaScript, and though powerful
> and feature-rich in its own right, you are often still shackled to a browser
> window to conduct your tests. Tools like Selenium WebDriver make automated
> testing possible, but they are difficult to set up, cumbersome to use, and
> worst of all slow. Wouldn't it be nice if you could execute your tests as
> part of your build? And have those tests before completed in seconds? With
> PhantomJS ("the headless WebKit") that wish has come true. In this talk we
> will introduce the Jasmine BDD test framework, introduce PhantomJS, and
> demonstrate how to execute your Jasmine tests in PhantomJS for lightning
> fast results.

### Running the Code

* Download/install [PhantomJS](http://phantomjs.org/); make sure it's on your `PATH`.
* Checkout this repository; `cd` into the repo and run these commands:
  * `git submodule init`
  * `git submodule update`
* From within the repo:
  * `phantomjs lib/jasmine-reporters/test/phantomjs-testrunner.js $(pwd)/test/all-tests-spec.htm`

### Resources

* [Slides from the talk](http://www.slideshare.net/founddrama/like-a-genie-from-a-lamp-headless-javascript-unit-testing-with-jasmine-and-phantomjs)
  * also: [rate me on SpeakerRate](http://speakerrate.com/talks/16421-like-a-genie-from-the-lamp-headless-javascript-testing-with-jasmine-and-phantomjs)
* blog post redux at blog.founddrama.net: [headless JavaScript unit testing with Jasmine and PhantomJS](http://blog.founddrama.net/2012/09/headless-javascript-testing-with-jasmine-and-phantomjs/)
* [Jasmine](https://jasmine.github.io/)
  * Rebecca Murphey's [jQuery Testing with Jasmine (screencast)](http://vimeo.com/20457625)
* [PhantomJS](http://phantomjs.org/)
  * [Google Groups forum](https://groups.google.com/forum/#!forum/phantomjs)
* [larrymyers/jasmine-reporters](https://github.com/larrymyers/jasmine-reporters)
* [jcarver989/phantom-jasmine](https://github.com/jcarver989/phantom-jasmine)
  (*An alternative test runner.*)
* Ben Cherry's [Writing Testable JavaScript](http://www.adequatelygood.com/2010/7/Writing-Testable-JavaScript)
