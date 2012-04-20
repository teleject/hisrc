HiSRC
=====

### A simple jQuery plugin for adaptive images in responsive web design

A twist on the old school [`LOWSRC` `IMG` attribute](http://www.w3.org/TR/html5/obsolete.html#attr-img-lowsrc), which would render a lower file size image first while a larger file size image would appears in its place later. 

Back to the future, we set in the markup and leave the lower file size image.

However, if the HiSRC plugin detects fast network or high resolution, then a high resolution image takes the image's place.

How the HiSRC jQuery Plugin Works
=====

The browser loads a "mobile first" image with an old-fashion `IMG` `SRC` attribute.

Then the HiSRC jQuery plugin checks if the device has mobile bandwidth (like 3G) and if so leaves the "mobile first" image in place.

If there is a high speed connection and the browser supports a device pixel ration greater then one a 2x image is delivered, otherwise a 1x image with better resolution then "mobile first" is delivered.

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
  $(".hisrc img+img").hisrc({ useTransparentGif: true });
})
```

The high-resolution image links should be placed as the value of "data-1x" and "data-2x" in the markup of your web page:


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

__speedTestUri__ (https://s3.amazonaws.com/cdeutsch/50K) - url used for the speed test. It's recommended to change this.

__speedTestKB__ (50) - this should equal the size of the file specified by speedTestUri so we know how long the download should take.

__speedTestExpireMinutes__ (30) - we cache the speed test results for this ammount of time.

__forcedBandwidth__ (false) - set to 'low' or 'high' to override the speed test. Mostly used for debugging.


Attribution
=====

The network speed testing code is from [Adam Bradley's Foresight.js](https://github.com/adamdbradley/foresight.js)


More Resources
=====

* Place images in background of HTML elements and set [`background-size: auto;`](http://caniuse.com/#search=background-size) to have them scale as the element resizes. 
* Use [vector based images](http://caniuse.com/#search=svg) for truly resizable images. 
* [Flashpix](http://en.wikipedia.org/wiki/FlashPix) image format that stores multiple resolution versions. 
* Do you need a more robust, server-side solution? Try 
[Responsive Images](https://github.com/filamentgroup/Responsive-Images). Requires PHP and editing `.htaccess` files

