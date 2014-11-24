HiSRC
=====

### A simple jQuery plugin for adaptive images in responsive web design

A twist on the old school [`LOWSRC` `IMG` attribute](http://www.w3.org/TR/html5/obsolete.html#attr-img-lowsrc), which would render a lower file size image first while a larger file size image would appears in its place later.

Back to the future, we set in the markup and leave the lower file size image.

However, if the HiSRC plugin detects fast network or high resolution, then a high resolution image takes the image's place.

Installing HiSRC
====

* Use [Bower](http://bower.io/search/?q=hisrc)? Type "bower install hisrc" into the command line prompt in your project folder:

`$ bower install hisrc`

* Using [node](https://www.npmjs.org/package/hisrc)? Install HiSRC with by typing "npm install hisrc" into the command line prompt:

`$ npm install hisrc`

* Or you can press "Download ZIP" button on the main GitHub page to get all the files and manually add them to your project.


How the HiSRC jQuery Plugin Works
=====

The browser loads a "mobile first" image with an old-fashion `IMG` `SRC` attribute.

Then the HiSRC jQuery plugin checks if the device has mobile bandwidth (like 3G) and if so leaves the "mobile first" image in place.

If there is a high speed connection *and* the browser supports a device pixel ration greater, then a 2x image takes the place of the "mobile first" image.

If there is a high speed and better resolution, then a 1x image takes the place of the "mobile first" image.

Setting up
=====

Associate jQuery to your web document as well as the HiSRC plugin as well.

In this code example, jQuery is link to Google's CDN and the HiSRC plugin is in the same directory as the web document:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js"></script>
<script src="hisrc.js"></script>
```

Use basic jQuery to pick out which images should be HiSRC'd:

```html
$(document).ready(function(){
  $(".hisrc img").hisrc();
  $(".hisrc img+img").hisrc({
    useTransparentGif: true,
    speedTestUri: '50K.jpg'
  });
})
```

The high-resolution image links should be placed as the value of "data-1x" and "data-2x" in the markup of your web page. Alternatively if you ommit data-1x or data-2x, HiSRC will automatically use the convention of appending "@1x" or "@2x" to the filename. For example cat.png will become cat@1x.png and cat@2x.png.


```html
<h1>HiSRC Images</h1>
    <div class="hisrc">
        <img src="http://placehold.it/200x100.png" data-1x="http://placehold.it/400x200.png" data-2x="http://placehold.it/800x400.png">
        <img src="http://placehold.it/200x100.png" data-1x="http://placehold.it/400x200.png" data-2x="http://placehold.it/800x400.png">
    </div>

<h2>Regular images</h2>
    <img src="http://placehold.it/400x200.png">
    <img src="http://placehold.it/400x200.png">
```


If you know you'll be using HiSRC on a page, you can improve performance by running the network test before the DOM is ready by calling:

```html
$.hisrc.speedTest();
```

HiSRC supports the following options:
=====

Option (default) - description

__useTransparentGif__ (false) - if true the img src will be set to a transparent gif and the actual image will be displayed using CSS to set the background style. This is useful if you want to use media queries in your CSS to further enhance the responsiveness of your site.

__transparentGifSrc__ (data:image/gif;base64,R0lGODlhAQABAIAAAMz/AAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==) - if useTransparentGif is true this value will replace the img src. If you need to support IE6 and IE7 it is recommend you override this will a url to a 1x1 transparent gif.

__minKbpsForHighBandwidth__ (300) - when doing a speed test this is the minimum bandwidth considered to be "high speed"

__speedTestUri__ (50K.jpg) - url used for the speed test. It's recommended to change this.

__speedTestKB__ (50) - this should equal the size of the file specified by speedTestUri so we know how long the download should take.

__speedTestExpireMinutes__ (30) - we cache the speed test results for this ammount of time.

__forcedBandwidth__ (false) - set to 'low' or 'high' to override the speed test. Mostly used for debugging.

__srcIsLowResolution__ (true) - if true then src is a low-res image will be replaced with 1x or 2x. If false, src is a 1x file already and will be replaced with 2x. Use false, if you only have two versions of the image: 1x and 2x.

Attribution
=====

The network speed testing code is from [Adam Bradley's Foresight.js](https://github.com/adamdbradley/foresight.js)


More Resources
=====

* Use Rails? Try [this version](https://github.com/haihappen/hisrc-rails)
* Place images in background of HTML elements and set [`background-size: 100%;`](http://caniuse.com/#search=background-size) to have them scale as the element resizes.
* Use [vector based images](http://caniuse.com/#search=svg) for truly resizable images.
* [Flashpix](http://en.wikipedia.org/wiki/FlashPix) image format that stores multiple resolution versions.
* Do you need a more robust, server-side solution? Try
[Responsive Images](https://github.com/filamentgroup/Responsive-Images). Requires PHP and editing `.htaccess` files

