---
layout: post
title: "Bromite Android Browser"
date: 2022-08-04
---

<br>

## Table of Contents

* [What is Bromite](#what-is-bromite)
* [Installation](#installation)
* [Configuration](#configuration)
* [System WebView](#systemwebview)
* [Other Android Privacy Browsers](#other-android-privacy-browsers)
* [Resources](#resources)
* [Credits](#credits)

## What is Bromite?

Bromite is a Web Browser for Android, a Chromium fork with ad blocking and privacy enhancements. Obviously it's a "FOSS/FLOSS" project and is an excellent alternative to the default browser or Google Chrome for Android.

Official Website: [https://www.bromite.org/](/https://www.bromite.org)

Source code: [https://github.com/bromite/bromite](https://github.com/bromite/bromite)

## Installation

You can install Bromite in several ways:

* With an [F-Droid client](https://f-droid.org/): This is a recommended way, install F-Droid, or your preferred F-Droid client and add the [Bromite repository](https://www.bromite.org/fdroid), you can then install the application and receive updates.

* The latest release package from the [Bromite website](https://www.bromite.org/) or from [GitHub repository](https://github.com/bromite/bromite/releases), you can then perform the updates directly from the application, see: [https://github.com/bromite/wiki/AutomaticUpdates](https://github.com/bromite/bromite/wiki/AutomaticUpdates)

## Configuration

Bromite requires no special configuration, by default it has everything needed to protect Privacy while browsing, anyway, like all applications it has some limitations, see: [Privacy Limitations](https://github.com/bromite/bromite#privacy-limitations), as always a lot depends on how you use it :)
s
However, let's go to see some interesting settings, also this browser offers the possibility to use the "user scripts", for example you can use these scripts for automatic redirection to alternative privacy frontends for Reddit, Twitter and many other services.

### Settings

In the settings main page we can see all the settings divided in two sections: **Basics** and **Advanced**:

![alt text](uploads/img/posts/bromite-android-browser/01-settings.png)

![alt text](uploads/img/posts/bromite-android-browser/02-settings-advanced.png)

### Search Engine

Under **Search engine** section there are some default search engines you can select, which the defaults are as follows: "_Google, Yahoo, Bing, DuckDuckGo, DuckDuckGo Light, and Ecosia_"

![alt text](uploads/img/posts/bromite-android-browser/03-search-engine.png)

You can also add our favorite search engine which implements [OpenSearch](https://developer.mozilla.org/en-US/docs/Web/OpenSearch), to do so, perform a search with the chosen search engine, after which it will be available in the settings, in the example, I added a [SearXNG](https://searx.space) public instance:

![alt text](uploads/img/posts/bromite-android-browser/04-search-engine-custom.png)

See: [https://github.com/bromite/bromite/wiki/SearchEngines](https://github.com/bromite/bromite/wiki/SearchEngines)

### Privacy and Security

In this section you can make some changes related to Privacy and Security:

![alt text](uploads/img/posts/bromite-android-browser/05-privacy-security.png)

**Clear browsing data** -> Delete temporary files:

![alt text](uploads/img/posts/bromite-android-browser/06-clear-browsing-data.png)

**secure DNS**  -> Enable [DNS over HTTPS (DoH)](https://en.wikipedia.org/wiki/DNS_over_HTTPS), to set up your preferred DoH server, enter the server hostname/provider URL under _Chose another provider -> Custom_:

![alt text](uploads/img/posts/bromite-android-browser/07-secure-dns.png)

**Incognito mode**  -> Enable the [Incognito mode](https://www.mozilla.org/en-US/firefox/browsers/incognito-browser/) with some other settings:

![alt text](uploads/img/posts/bromite-android-browser/08-incognito-mode.png)

**Ad Blocking** -> Enable/disable the built-in [Ad Block feature](https://github.com/bromite/bromite/wiki/AdBlocking) of Bromite:

![alt text](uploads/img/posts/bromite-android-browser/09-adblock.png)

Bromite offers a good default block-list, but other lists can be used or you can create your personalized lists, see: [Bromite Custom Ad Block filters](https://www.bromite.org/custom-filters), [filtrite](https://github.com/xarantolus/filtrite).

In the **Advanced** section you can find very useful settings:

**Homepage** -> Set your preferred Home Page:

![alt text](uploads/img/posts/bromite-android-browser/10-homepage.png)

**Site settings** -> Block/unlock the parameters relating to communication with web sites (cookie settings, camera, microphone etc.):

![alt text](uploads/img/posts/bromite-android-browser/11-site-settings_a.png)

![alt text](uploads/img/posts/bromite-android-browser/12-site-settings_b.png)

Here you can deactivate/activate [JIT and JavaScript](https://hacks.mozilla.org/2017/02/a-crash-course-in-just-in-time-jit-compilers/):

![alt text](uploads/img/posts/bromite-android-browser/13-jit.png)

![alt text](uploads/img/posts/bromite-android-browser/14-javascript.png)

Also you can set up parameters relating to [Timezone override](https://github.com/bromite/bromite/wiki/TimezoneOverride):

![alt text](uploads/img/posts/bromite-android-browser/15-timezone.png)

**User Scripts** -> Bromite offers us the opportunity to upload javascript files to perform automatic operations, files must be inserted in the format: `<name>.user.js`. For example, you can upload a file for redirect social media platforms to their privacy respecting frontends, see: [privacy-redirector](https://github.com/dybdeskarphet/privacy-redirector).

![alt text](uploads/img/posts/bromite-android-browser/16-user-scripts.png)

Note: BE CAREFUL of the files you load, run third-party JavaScript code can be very dangerous, always check the file you are uploading.

See:

[https://github.com/bromite/bromite/wiki/UserScripts](https://github.com/bromite/bromite/wiki/UserScripts)

[https://github.com/bromite/bromite/wiki/UserScripts#security-and-trust-notice](https://github.com/bromite/bromite/wiki/UserScripts#security-and-trust-notice)

[Can JavaScript be used to install malware?](https://security.stackexchange.com/questions/32288/can-javascript-be-used-to-install-malware)

## System WebView

Android uses [Android System WebView (ASW)](https://chromium.googlesource.com/chromium/src/+/HEAD/android_webview/docs/prerelease.md) to display web information in all apps, is a Google Chrome-powered system component and is pre-installed on your device, with Bromite you can replace the default one, the operation is not so simple but you can find detailed instructions in the Bromite wiki: [https://github.com/bromite/bromite/wiki/Installing-SystemWebView](https://github.com/bromite/bromite/wiki/Installing-SystemWebView)

See: [What Is the Android System WebView and What Can You Do With It?](https://geekflare.com/android-system-webview/)

## Other Android Privacy Browsers

Bromite is a great project, however there are other good open source browsers for Android:

[Tor Browser](https://www.torproject.org/download/#android) - Tor Browser for Android.

[Fennec F-Droid](https://f-droid.org/en/packages/org.mozilla.fennec_fdroid/) - Fennec F-Droid is based on the latest Firefox release (codenamed Fenix).

[Mull](https://github.com/divested-mobile/mull-fenix) - A privacy hardened browser, fork of Fennec F-Droid.

[Privacy Browser](https://www.stoutner.com/privacy-browser-android/) - An open source Android web browser focused on user privacy.

[FOSS Browser](https://github.com/scoute-dich/browser) - A fully free (as in freedom) open source Android browser.

[monocles browser](https://codeberg.org/Arne/monocles_browser) - A open source privacy respecting android browser.

[Vanadium](https://github.com/GrapheneOS/Vanadium) - Privacy and security enhanced releases of Chromium for GrapheneOS.

## Resources

Bromite Official Website: [https://www.bromite.org](https://www.bromite.org)

GitHub Project: [https://github.com/bromite/bromite](https://github.com/bromite/bromite)

Bromite FAQ: [https://github.com/bromite/bromite/blob/master/FAQ.md](https://github.com/bromite/bromite/blob/master/FAQ.md)

Bromite wiki: [https://github.com/bromite/bromite/wiki](https://github.com/bromite/bromite/wiki)

## Credits

Chromium Project: [https://www.chromium.org/Home/](https://www.chromium.org/Home/)

GitHub Bromite: [https://github.com/bromite/bromite](https://github.com/bromite/bromite)

GNU General Public License: [https://www.gnu.org/licenses/gpl-3.0.en.html](https://www.gnu.org/licenses/gpl-3.0.en.html)

SearXNG Metasearch engine: [https://github.com/searxng/](https://github.com/searxng/)

## Disclaimer

This is a guide on how to use Bromite Web Browser for Android, I am not part of the team nor am I affiliated in any way with the [Bromite project](https://github.com/bromite/bromite).
