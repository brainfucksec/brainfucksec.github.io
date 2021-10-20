---
layout: post
title: "Hardening Firefox - v0.7"
date: 2021-10-21
---

Tested on Firefox: `Version 93.0 (Linux)`

<br>

## Table of Contents

* [Introduction](#introduction)
* [Backup Firefox Profile](#backup-firefox-profile)
* [Firefox Preferences](#firefox-preferences)
* [about:config](#aboutconfig)
* [user.js](#userjs)
* [Disabled Options](#disabled-options)
* [Add-ons](#add-ons)
* [DoH (DNS over HTTPS)](#doh-dns-over-https)
* [Multiple profiles and Containers](#multiple-profiles-and-containers)
* [Browser Leak Test](#browser-leak-test)

<br>

## Introduction

When you visit a web page, your browser voluntarily sends information about its configuration, such as available fonts, browser type, and add-ons. If this combination of information is unique, it may be possible to identify and track you without using cookies.  For more information on Browser Fingerprinting check out these excellent sources:

[How Unique Is Your Web Browser? Peter Eckersley, EFF.](https://coveryourtracks.eff.org/static/browser-uniqueness.pdf)

[Support Mozilla - Firefox's protection against fingerprinting](https://support.mozilla.org/en-US/kb/firefox-protection-against-fingerprinting)

[What is browser fingerprinting? - amiunique.org](https://www.amiunique.org/faq)

This is my personal configuration for **hardening Mozilla Firefox while maintaining usability**, this mean that some options that help protect against fingerprinting are not enabled by default, for more information see: [Disabled Options](#disabled-options).

This configuration is for a "day-by-day" browsing, with my Browser I need to work, or study/develop (and listen music and watch movies :), then I try to setup a Browser for better security but without breaking many things, then if you want greater anonymity and privacy see: [Tor Browser](https://www.torproject.org/).

There is no anonymous and 100% secure setup, what you can do though, is reduce the amount of data collected by entities like Google, Facebook etc. etc.. and reduce attack vectors for enhanced security.

## Backup Firefox profile

Before changing the configuration, you should make a backup of the default profile, or create a new profile to be used with the new settings.

To back up your profile, first close Firefox if it is open and then copy the default profile folder to another location, for example on Linux the profile folder is:

`~/.mozilla/firefox/xxxxxxxx.default`

when "xxxxxxxx" is the ID of your profile.

See: [Back up and restore information in Firefox profiles](https://support.mozilla.org/en-US/kb/back-and-restore-information-firefox-profiles)

If you want to create new profile see: [Create, remove or switch Firefox profiles](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles?redirectslug=profile-manager-create-and-remove-firefox-profiles&redirectlocale=en-US) (also, see [Multiple profiles and Containers](#multiple-profiles-and-containers) section.

## Firefox Preferences

**Download folder location**

* Click on `Edit -> Settings`

* Go to `General -> Files and Applications`: select `Always ask you where to save files`

**Search Preferences**

* Go to `Search`:

    * `Default Search Engine`: select `DuckDuckGo`

    * `Search Suggestions`: If you want search suggestions select only `Show search suggestions in address bas results`

        * `Change settings for other address bar suggestions`: uncheck  `Browsing history` and `Contextual suggestions` [1]

    * `Search Shortcuts`: Select `DuckDuckGo`, remove Google, Bing, eBay, Amazon, Wikipedia search engines [2]

[1] Contextual suggestions is a new Firefox feature included in the [93.0 release](https://www.mozilla.org/en-US/firefox/93.0/releasenotes/), when contextual suggestions are enabled, Firefox Suggest uses your city location and search keywords to make contextual suggestions from Firefox and our partners.

[2] Note: You can add/select your favorite search engines or restore the default settings, see: [Add or remove a search engine in Firefox](https://support.mozilla.org/en-US/kb/add-or-remove-search-engine-firefox)

More information:

[Firefox’s address bar has ads now, but you can disable them](https://www.theverge.com/2021/10/7/22715179/firefox-suggest-search-ads-browser)

[Navigate the Web faster with Firefox Suggest](https://support.mozilla.org/en-US/kb/navigate-web-faster-firefox-suggest?as=u&utm_source=inproduct)

## about:config

If you already know these parameters you can go directly to the [user.js](#userjs) section, otherwise I suggest you keep reading.

On the search bar digit: `about:config` and set the parameters as follows:

Note: The parameters are indicated with the format `option = value` for the sake of clarity, see [user.js](#userjs) section for the JavaScript code.

**about:config warning**

* Disable about:config warning:

    `browser.aboutConfig.showWarning = false`

**StartUp Settings**

* Set startup home page:
    * 0=blank
    * 1=home
    * 2=last visited page
    * 3=resume previous session

    `browser.startup.page = 1`

    `browser.startup.homepage = "start.duckduckgo.com"`

* Disable activity and telemetry on new tab pages:

    `browser.newtabpage.enabled = false`

    `browser.newtab.preload = false`

    `browser.newtabpage.activity-stream.feeds.telemetry = false`

    `browser.newtabpage.activity-stream.telemetry = false`

    `browser.newtabpage.activity-stream.feeds.snippets = false`

    `browser.newtabpage.activity-stream.feeds.section.topstories = false`

    `browser.newtabpage.activity-stream.section.highlights.includePocket = false`

    `browser.newtabpage.activity-stream.showSponsored = false`

    `browser.newtabpage.activity-stream.feeds.discoverystreamfeed = false`

    `browser.newtabpage.activity-stream.showSponsoredTopSites = false`

    `browser.newtabpage.activity-stream.default.sites = ""`

**Geolocation**

* Use Mozilla geolocation service instead of Google if permission is granted:

    `geo.provider.network.url = "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%"`

* Disable using the OS's geolocation service:

    `geo.provider.ms-windows-location = false` (Windows)

    `geo.provider.use_corelocation = false` (macOS)

    `geo.provider.use_gpsd = false` (Linux)

* Disable region updates:

    `browser.region.network.url = ""`

    `browser.region.update.enabled = false`

**Language / Locale**

* Set language for displaying web pages:

    `intl.accept_languages = "en-US, en"`

    `javascript.use_us_english_locale = true` (Hidden Pref)

**Auto-updates and Recommendations**

* Disable auto-INSTALLING Firefox updates:

    `app.update.auto = false` (Non-Windows)

    `app.update.background.scheduling.enabled = false` (Windows)

* Disable addons recommendations (uses Google Analytics):

    `extensions.getAddons.showPane = false` (Hidden Pref)

    `extensions.htmlaboutaddons.recommendations.enabled = false`

**Telemetry**

* Disable telemetry:

    `datareporting.policy.dataSubmissionEnabled = false`

    `datareporting.healthreport.uploadEnabled = false`

    `toolkit.telemetry.unified = false`

    `toolkit.telemetry.enabled = false` (as default)

    `toolkit.telemetry.server = "data:,"`

    `toolkit.telemetry.archive.enabled = false`

    `toolkit.telemetry.newProfilePing.enabled = false`

    `toolkit.telemetry.shutdownPingSender.enabled = false`

    `toolkit.telemetry.updatePing.enabled = false`

    `toolkit.telemetry.bhrPing.enabled = false`

    `toolkit.telemetry.firstShutdownPing.enabled = false`

    `toolkit.telemetry.coverage.opt-out = true` (Hidden Pref)

    `toolkit.coverage.opt-out = true` (Hidden Pref)

    `toolkit.coverage.endpoint.base = ""`

    `browser.ping-centre.telemetry = false`

    `beacon.enabled = false`

**Studies**

* Disable studies:

    `app.shield.optoutstudies.enabled = false`

* Disable normandy/shield:

    `app.normandy.enabled = false`

    `app.normandy.api_url = ""`

**Crash Reports**

* Disable crash reports:

    `breakpad.reportURL = ""`

    `browser.tabs.crashReporting.sendReport = false`

    `browser.crashReports.unsubmittedCheck.enabled = false`

    `browser.crashReports.unsubmittedCheck.autoSubmit2 = false`

**Captive Portal Detection / Network Checks**

* Disable captive portal detection:

    `captivedetect.canonicalURL = ""`

    `network.captive-portal-service.enabled = false`

* Disable network connectivity checks:

    `network.connectivity-service.enabled = false`

**Safe Browsing**

* Disable Safe Browsing service:

    `browser.safebrowsing.downloads.remote.enabled = false`

    `browser.safebrowsing.downloads.remote.url = ""`

**Network (DNS / Proxy / IPv6)**

* Disable link prefetching:

    `network.prefetch-next = false`

* Disable DNS prefetching:

    `network.dns.disablePrefetch = true`

* Disable predictor:

    `network.predictor.enabled = false`

* Disable GIO protocols:

    `network.gio.supported-protocols = ""`

* Disable IPv6:

    `network.dns.disableIPv6 = true`

**Search Bar / Autofill**

* Display all parts of the url in the bar:

    `browser.urlbar.trimURLs = false`

* Disable form autofill:

    `browser.formfill.enable = false`

    `extensions.formautofill.addresses.enabled = false`

    `extensions.formautofill.available = "off"`

    `extensions.formautofill.creditCards.available = false`

    `extensions.formautofill.creditCards.enabled = false`

    `extensions.formautofill.heuristics.enabled = false`

    `signon.autofillForms = false`

**Cache / Memory**

* Disable disk cache:

    `browser.cache.disk.enable = false`

* Disable storing extra session data:

    `browser.sessionstore.privacy_level = 2`

* Set the minimum interval between session save operations:

    `browser.sessionstore.interval = 30000`

**Headers / Referers**

* Control when to send a referer:
    * 0 = always (default)
    * 1 = only if base domains match
    * 2 = only if hosts match

    `network.http.referer.XOriginPolicy = 2`

* Control the amount of information to send:
    * 0 = send full URI (default)
    * 1 = scheme+host+port+path
    * 2 = scheme+host+port

    `network.http.referer.XOriginTrimmingPolicy = 2`

**Audio/Video (WebRTC, WebGL)**

* Disable WebRTC:

    `media.peerconnection.enabled = false`

* Limit WebRTC IP leaks if using WebRTC:

    `media.peerconnection.ice.default_address_only = true`

    `media.peerconnection.ice.no_host = true`

    `media.peerconnection.ice.proxy_only_if_behind_proxy = true`

* Disable WebGL:

    `webgl.disabled = true`

**Cookies**

* Disable 3rd-party cookies and site-data:
    * 0 = Accept cookies and site data
    * 1 = (Block) All third-party cookies
    * 2 = (Block) All cookies
    * 3 = (Block) Cookies from unvisited websites
    * 4 = (Block) Cross-site tracking cookies (default)
    * 5 = (Isolate All) Cross-site cookies (TCP: Total Cookie Protection / dFPI: dynamic FPI

    `network.cookie.cookieBehavior = 1`

    `browser.contentblocking.category = "custom"`

**Shutdown**

* Clear history when Firefox closes:

    `privacy.sanitize.sanitizeOnShutdown = true`

    `privacy.clearOnShutdown.cache = true`

    `privacy.clearOnShutdown.cookies = true`

    `privacy.clearOnShutdown.downloads = true`

    `privacy.clearOnShutdown.formdata = true`

    `privacy.clearOnShutdown.history = true`

    `privacy.clearOnShutdown.offlineApps = true`

    `privacy.clearOnShutdown.sessions = true`

    `privacy.clearOnShutdown.sitesettings = false`

**HTTPS**

* Set "HTTPS-only mode":

    To enable this feature go to `Edit -> Settings -> Privacy & Security -> HTTPS-Only Mode` then select `Enable HTTPS-Only Mode in all windows`

## Disabled Options

Compared to other similar configurations such as [pyllyukko](https://github.com/pyllyukko/user.js)  or [arkenfox](https://github.com/arkenfox/user.js) user.js, there are several options disabled, some of these are commented in the various sections of this [user.js](#user.js) file.

These are the options you can activate for greater protection, but they disable some basic functionality like audio/video libraries or other things you need, so be careful.


## user.js

If you want you can use the `user.js` file with these or with your preferred settings, it is recommended to create a new profile for this purpose.

Before using the file check the entries and modify/add them according to your preferences, don't copy/paste without know what you are doing.

More information about Firefox user.js:

 * [arkenfox/user.js - Wiki](https://github.com/arkenfox/user.js/wiki/1.1-Overview)

This my user.js file with settings of this article. To install it:

1. Create a new file with name `user.js` and copy it in the profile folder, i.e. `~/.mozilla/firefox/xxxxxxxx.my_settings`, where `xxxxxxxx.my_settings` is the name of the new profile for use with the `user.js`.

2. Copy paste the following code, also you can download file directly from [here](https://brainfucksec.github.io/uploads/user.js):


```javascript
/*********************************************************************
*
* Mozilla Firefox configuration file `user.js`
*
* name: user.js
* date: 2021-10-21
* version: 0.4.1
* maintainer: Brainf+ck
*
* info: Set preferences for the profile when Firefox start.
* Copy this file on the folder:
* `$HOME/.mozilla/firefox/<profile-ID.name>`
*
* For more information how to use this file see:
* https://github.com/arkenfox/user.js/wiki/1.1-Overview
*
* For "about:config" entries see:
* https://searchfox.org/mozilla-release/source/modules/libpref/init/all.js
*
* OPTION FORMAT:
* user_pref("<entry>", <boolean> || <number> || "<string">);
*
* Note: Commented preferences are those disabled by default,
* some preferences conflict with others if enabled.
* So check what you enable/disable.
*
**********************************************************************/


/***
 * BEGIN SECTIONS
 */

/***
 * about:config warning
 */

// disable about:config warning
user_pref("browser.aboutConfig.showWarning", false);


/***
 * StartUp Settings:
 */

// disable check if Firefox is your default browser
//user_pref("browser.shell.checkDefaultBrowser", false);

// set startup page
// 0=blank, 1=home, 2=last visited page, 3=resume previous session
user_pref("browser.startup.page",  1);
user_pref("browser.startup.homepage", "start.duckduckgo.com");

// if you want only a home blank page
//user_pref("browser.startup.page", 0);
//user_pref("browser.startup.homepage", "about:blank");

// disable activity and telemetry on new tab pages
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.default.sites", "");


/***
 * Geolocation:
 */

// use Mozilla geolocation service instead of Google if permission is granted
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");

// disable using the OS’s geolocation service
//user_pref("geo.provider.ms-windows-location", false); //Windows
//user_pref("geo.provider.use_corelocation", false); //macOS
user_pref("geo.provider.use_gpsd", false); //Linux

// disable region updates
user_pref("browser.region.network.url", "");
user_pref("browser.region.update.enabled", false);


/***
 * Language / Locale:
 */

// set language for displaying web pages:
user_pref("intl.accept_languages", "en-US, en");
user_pref("javascript.use_us_english_locale", true); //Hidden Pref

/** Auto-updates and Recommendations **/

// disable auto-installing Firefox updates
//user_pref("app.update.background.scheduling.enabled", false); //Windows
user_pref("app.update.auto", false); //Non-Windows

// disable addons recommendations (use Google Analytics)
user_pref("extensions.getAddons.showPane", false); //Hidden Pref
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);


/***
 * Telemetry:
 */

// disable telemetry
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.enabled", false); //as default
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true); //Hidden Pref
user_pref("toolkit.coverage.opt-out", true); //Hidden Pref
user_pref("toolkit.coverage.endpoint.base.", "");
user_pref("browser.ping-centre.telemetry", false);

// disable sending additional analytics to web servers
user_pref("beacon.enabled", false);


/***
 * Studies:
 */

// disable studies
user_pref("app.shield.optoutstudies.enabled", false);

// disable normandy/shield
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");


/***
 * Crash Reports
 */

// disable crash reports
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled ", false);
user_pref("browser.crashReports.autoSubmit2 ", false);


/***
 * Captive Portal Detection / Network Checks:
 */

// disable captive portal detection
user_pref("captivedetect.canonicalURL", "")
user_pref("network.captive-portal-service.enabled", false);

// disable network connections checks
user_pref("network.connectivity-service.enabled", false);


/***
 * Safe Browsing:
 */

// disable safe browsing service
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");


/***
 * Network (DNS / Proxy / IPv6):
 */

// disable link prefetching
user_pref("network.prefetch-next", false);

// disable DNS prefetching
user_pref("network.dns.disablePrefetch", true);

// disable predictor
user_pref("network.predictor.enabled", false);

// disable "GIO" protocols as a potential proxy bypass vectors
user_pref("network.gio.supported-protocols", ""); //Hidden pref

// disable IPv6
user_pref("network.dns.disableIPv6", true);


/***
 * Search Bar / Autofill:
 */

// display all parts of the url in the bar
user_pref("browser.urlbar.trimURLs", false);

// disable form autofill
user_pref("browser.formfill.enable", false);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.creditCards.available", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);
user_pref("signon.autofillForms", false);


/***
 * Cache / Memory:
 */

// disable disk cache
user_pref("browser.cache.disk.enable", false);

// disable storing extra session data
user_pref("browser.sessionstore.privacy_level", 2);

// set the minimum interval between session save operations
user_pref("browser.sessionstore.interval", 30000);


/***
 * Headers / Referers:
 */

/*
 * control when to send a referer:
 *    0 = always (default)
 *    1 = only if base domains match
 *    2 = only if hosts match
 */
user_pref("network.http.referer.XOriginPolicy", 2);

/*
 * control amount of information to send:
 *    0 = send full URI (default)
 *    1 = scheme+host+port+path
 *    2 = scheme+host+port
 */
user_pref("network.http.referer.XOriginTrimmingPolicy ", 2);


/***
 * Media / WebRTC:
 */

// disable WebRTC
user_pref("media.peerconnection.enabled", false);

// limit WebRTC IP leaks if using it
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);

// disable autoplay of HTML5 media
//user_pref("media.autoplay.blocking_policy", 2);


/***
 * Cookies:
 */

/*
 * disable 3rd-party cookies and site-data:
 *   0 = Accept cookies and site data
 *   1 = (Block) All third-party cookies
 *   2 = (Block) All cookies
 *   3 = (Block) Cookies from unvisited websites
 *   4 = (Block) Cross-site tracking cookies (default)
 *   5 = (Isolate All) Cross-site cookies (TCP: Total Cookie Protection / dFPI: dynamic FPI
 */
user_pref("network.cookie.cookieBehavior", 1);
user_pref("browser.contentblocking.category", "custom");


/***
 * Shutdown:
 */

// clear history when Firefox closes
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.sitesettings", true);


/***
 * WebGL (Web Graphics Library):
 */

// disable WebGL
user_pref("webgl.disabled", true);


/***
 * Fingerprinting:
 */

/*
 * RFP can cause some website breakage: mainly canvas, use a site
 * exception via the urlbar.
 * RFP also has a few side effects: mainly timezone is UTC0, and
 *  websites will prefer light theme.
 * [1] https://bugzilla.mozilla.org/418986
 *
 * See: https://support.mozilla.org/en-US/kb/firefox-protection-against-fingerprinting
 */
//user_pref("privacy.resistFingerprinting", true);

```

## Add-ons

[uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)

* Install `uBlock Origin`:

    Click on `Add to Firefox`

* Open the plugin settings:

    Click the icon to the right of the search bar then select `Open the dashboard`

* Enable additional blocklists:

    In the dashboard select `Filter lists`, this is my lists selection (you can select your favorite ones):

```text

    My uBlock Origin blocklists:

    * Ads:
        * EasyList

    * Privacy:
        * AdGuard Tracking Protection
        * AdGuard URL Tracking Protection
        * EasyPrivacy

    * Malware Domains:
        * Online Malicious URL Blocklist
        * Spam404

    * Annoyances:
        * Anti-Facebook
        * uBlock filters - Annoyances
```

For more information about uBlock usage see the [Wiki](https://github.com/gorhill/uBlock/wiki) on Github.

## DoH (DNS over HTTPS)

DNS-over-HTTPS, DNS-over-TLS, and DNSCrypt resolvers will not make you anonymous. Using Anonymized DNSCrypt hides only your DNS traffic from your Internet Service Provider. However, using any of these protocols will prevent DNS hijacking, and make your DNS requests harder for third parties to eavesdrop on and tamper with.
For more information about DNS and DoH see: [PrivacyGuides.org - Encrypted DNS Resolvers](https://privacyguides.org/providers/dns/)

If you want to set DoH on Firefox:

Go to `Edit -> Settings -> General -> Network Settings`, click on `Settings`, select `Enable DNS over HTTPS`, in `Use Provider` window, select `Custom` and insert your DoH provider.

## Multiple profiles and Containers

A good practice is to use multiple profiles for different purposes, e.g. (work, streaming, personal, finance), read [here](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles?redirectslug=profile-manager-create-and-remove-firefox-profiles&redirectlocale=en-US) how to manage profiles in Firefox.

In the latest versions of Firefox you can create [Containers](https://support.mozilla.org/en-US/kb/containers), Firefox Multi-Account Containers lets you keep parts of your online life separated into color-coded tabs that preserve your privacy. Cookies are separated by container, allowing you to use the web with multiple identities or accounts simultaneously.

## Browser Leak Tests

There are come resources where you can test your browser to see how unique it is:

[https://coveryourtracks.eff.org/](https://coveryourtracks.eff.org/)

[https://www.amiunique.org/](https://www.amiunique.org/)

[https://browserleaks.com/](https://browserleaks.com/)

[https://arkenfox.github.io/TZP/tzp.html](https://arkenfox.github.io/TZP/tzp.html)

## Use Your Head and Get Informed

As always, use **Your Head** to avoid intrusions, browser security depends largely on how you behave online, but you cannot know how to behave and know the dangers if you do not inform yourself.

---

## Credits:

* [arkenfox user.js](https://github.com/arkenfox/user.js)

* [PrivacyGuides.org](https://privacyguides.org/)

* [uBlock Origin](https://ublockorigin.com/)

* A special thanks goes to Reddit [/r/privacytoolsIO](https://old.reddit.com/r/privacytoolsIO/) and [/r/PrivacyGuides](https://old.reddit.com/r/PrivacyGuides/) communities that helped me to improve this article.


