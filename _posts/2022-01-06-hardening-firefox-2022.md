---
layout: post
title: "Hardening Firefox 2022 - v0.12.0"
date: 2022-01-06
---

Tested on Firefox: `Version 95.0.x (Linux)`

<br>

## Table of Contents

* [Introduction](#introduction)
* [Backup Firefox Profile](#backup-firefox-profile)
* [Firefox Preferences](#firefox-preferences)
* [about:config](#aboutconfig)
* [user.js](#userjs)
* [Disabled Options](#disabled-options)
* [uBlock Origin](#ublock-origin)
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

With this configuration I try to setup a Browser for better security but without breaking many things, then if you want greater anonymity and privacy see: [Tor Browser](https://www.torproject.org/).

In Computer security the "100% secure setup" does not exist, what you can do though, is reduce the amount of data collected by entities like Google, Facebook etc. and reduce attack vectors.

## Backup Firefox profile

Before changing the configuration, you should make a backup of the default profile, or create a new profile to be used with the new settings.

To back up your profile, first close Firefox if it is open and then copy the default profile folder to another location, for example on Linux the profile folder is:

`~/.mozilla/firefox/xxxxxxxx.default`

when "xxxxxxxx" is the ID of your profile.

See: [Back up and restore information in Firefox profiles](https://support.mozilla.org/en-US/kb/back-and-restore-information-firefox-profiles)

If you want to create new profile see: [Create, remove or switch Firefox profiles](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles?redirectslug=profile-manager-create-and-remove-firefox-profiles&redirectlocale=en-US) (also, see [Multiple profiles and Containers](#multiple-profiles-and-containers) section.

## Firefox Preferences

**Search Preferences**

* Go to `Search`:

    * `Default Search Engine`: select `DuckDuckGo`

    * `Search Suggestions`: If you want search suggestions select only `Show search suggestions in address bas results`

        * `Change settings for other address bar suggestions`: uncheck  `Browsing history`

    * `Search Shortcuts`: Select `DuckDuckGo`, remove Google, Bing, eBay, Amazon, Wikipedia search engines

Note: You can add/select your favorite search engines or restore the default settings, see: [Add or remove a search engine in Firefox](https://support.mozilla.org/en-US/kb/add-or-remove-search-engine-firefox)

## about:config

If you already know these parameters you can go directly to the [user.js](#userjs) section, otherwise I suggest you keep reading.

On the search bar digit: `about:config` and set the parameters as follows:

Note: The parameters are indicated with the format `option = value` for the sake of clarity, see [user.js](#userjs) section for the JavaScript code.

### about:config warning

* Disable about:config warning:

    `browser.aboutConfig.showWarning = false`

### StartUp Settings

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

### Geolocation

* Use Mozilla geolocation service instead of Google if permission is granted:

    `geo.provider.network.url = "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%"`

* Disable using the OS's geolocation service:

    `geo.provider.ms-windows-location = false` (Windows)

    `geo.provider.use_corelocation = false` (macOS)

    `geo.provider.use_gpsd = false` (Linux)

* Disable region updates:

    `browser.region.network.url = ""`

    `browser.region.update.enabled = false`

### Language / Locale

* Set language for displaying web pages:

    `intl.accept_languages = "en-US, en"`

    `javascript.use_us_english_locale = true` (Hidden Pref)

### Auto-updates and Recommendations

* Disable auto-INSTALLING Firefox updates:

    `app.update.auto = false` (Non-Windows)

    `app.update.background.scheduling.enabled = false` (Windows)

* Disable addons recommendations (uses Google Analytics):

    `extensions.getAddons.showPane = false` (Hidden Pref)

    `extensions.htmlaboutaddons.recommendations.enabled = false`

### Telemetry

* Disable telemetry:

    `datareporting.policy.dataSubmissionEnabled = false`

    `datareporting.healthreport.uploadEnabled = false`

    `toolkit.telemetry.enabled = false` (Default: false)

    `toolkit.telemetry.unified = false`

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

### Studies

* Disable studies:

    `app.shield.optoutstudies.enabled = false`

* Disable normandy/shield:

    `app.normandy.enabled = false`

    `app.normandy.api_url = ""`

### Crash Reports

* Disable crash reports:

    `breakpad.reportURL = ""`

    `browser.tabs.crashReporting.sendReport = false` (Default: false)

    `browser.crashReports.unsubmittedCheck.autoSubmit2 = false` (Default: false)

### Captive Portal Detection / Network Checks

* Disable captive portal detection:

    `captivedetect.canonicalURL = ""`

    `network.captive-portal-service.enabled = false`

* Disable network connections checks:

    `network.connectivity-service.enabled = false`

### Safe Browsing

* Disable Safe Browsing service:

    `browser.safebrowsing.downloads.remote.enabled = false`

    `browser.safebrowsing.downloads.remote.url = ""`

### Network (DNS / Proxy / IPv6)

* Disable link prefetching:

    `network.prefetch-next = false`

* Disable DNS prefetching:

    `network.dns.disablePrefetch = true`

* Disable predictor:

    `network.predictor.enabled = false`

* Disable IPv6:

    `network.dns.disableIPv6 = true`

* Disable GIO protocols:

    `network.gio.supported-protocols = ""` (Hidden Pref)

* Use Punycode in Internationalized Domain Names to eliminate possible spoofing:

    `network.IDN_show_punycode = true`

### Search Bar: Suggestions / Autofill

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

*  Disable location bar contextual suggestions:

    `browser.urlbar.suggest.quicksuggest.nonsponsored = false`

    `browser.urlbar.suggest.quicksuggest.sponsored = false`

### Disk Cache / Memory

* Disable disk cache:

    `browser.cache.disk.enable = false`

* Disable storing extra session data:
    * 0 = everywhere
    * 1 = unencrypted sites
    * 2 = nowhere

    `browser.sessionstore.privacy_level = 2`

* Disable resuming session from crash:

    `browser.sessionstore.resume_from_crash = false`

### Headers / Referers

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

### Audio/Video (WebRTC, WebGL)

* Disable WebRTC:

    `media.peerconnection.enabled = false`

* Limit WebRTC IP leaks if using WebRTC:

    `media.peerconnection.ice.default_address_only = true`

    `media.peerconnection.ice.no_host = true`

    `media.peerconnection.ice.proxy_only_if_behind_proxy = true`

* Disable WebGL:

    `webgl.disabled = true`

### Downloads

* Always ask you where to save files:

    `browser.download.useDownloadDir = false`

* Disable adding downloads to system's "recent documents" list:

    `browser.download.manager.addToRecentDocs = false`

### Cookies

* Enable ETP (Enhanced Tracking Protection):

    `browser.contentblocking.category = "strict"`

### Shutdown

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

    `privacy.sanitize.timeSpan = 0`

### HTTPS

* Enable HTTPS-Only mode in all windows:

    `dom.security.https_only_mode = true`

* Disable sending HTTP request for checking HTTPS support by the server:

    `dom.security.https_only_mode_send_http_background_request = false`

## Disabled Options

Compared to other similar configurations such as [pyllyukko](https://github.com/pyllyukko/user.js)  or [arkenfox](https://github.com/arkenfox/user.js) user.js, there are several options disabled, some of these are commented in the various sections of this [user.js](#user.js) file.

These are the options you can activate for greater protection, but they disable some basic functionality like audio/video libraries or other things you need, so be careful.

Also I excluded several `default` entries

## user.js

If you want you can use the `user.js` file with these or with your preferred settings, it is recommended to create a new profile for this purpose.

Before using the file check the entries and modify/add them according to your preferences, don't copy/paste without know what you are doing.

More information about Firefox user.js:

 * [arkenfox/user.js - Wiki](https://github.com/arkenfox/user.js/wiki/1.1-Overview)

This my user.js file with settings of this article. To install it:

1. Create a new file with name `user.js` and copy it in the profile folder, i.e. `~/.mozilla/firefox/xxxxxxxx.my_settings`, where `xxxxxxxx.my_settings` is the name of the new profile for use with the `user.js`.

2. Copy paste the following code, also you can download directly my gist [here](https://gist.github.com/brainfucksec/68e79da1c965aeaa4782914afd8f7fa2):


```javascript
/*********************************************************************
*
* Mozilla Firefox configuration file: `user.js`
*
* date: 2022-01-06
* version: 0.7.0_rev1
* maintainer: Brainf+ck
*
* info: Set preferences for the selected profile when Firefox start.
* Copy this file on Firefox Profile folder.  You should create a
* new profile to insert this file:
*
* `$HOME/.mozilla/firefox/<profile-ID.name>`
*
* For more information how to use this file see:
* https://github.com/arkenfox/user.js/wiki/1.1-Overview
*
* For "about:config" entries see:
* https://searchfox.org/mozilla-release/source/modules/libpref/init/all.js
*
* OPTION FORMAT:
* user_pref("<entry>", <boolean> || <number> || "<string>");
*
* NOTE: Commented preferences are those disabled by default, some
* conflict with others if enabled, and some disable some basic
* features like audio/video libraries or other things you need.
* So be careful and check what you enable/disable.
*
**********************************************************************/


/*********************************************************************
 * BEGIN SECTIONS
 *********************************************************************/

/*********************************************************************
 * about:config warning
 *********************************************************************/

// disable about:config warning
user_pref("browser.aboutConfig.showWarning", false);


/*********************************************************************
 * StartUp Settings:
 *********************************************************************/

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


/*********************************************************************
 * Geolocation:
 *********************************************************************/

// use Mozilla geolocation service instead of Google if permission is granted
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");

// disable using the OS’s geolocation service
//user_pref("geo.provider.ms-windows-location", false); //Windows
//user_pref("geo.provider.use_corelocation", false); //macOS
user_pref("geo.provider.use_gpsd", false); //Linux

// disable region updates
user_pref("browser.region.network.url", "");
user_pref("browser.region.update.enabled", false);


/*********************************************************************
 * Language / Locale:
 *********************************************************************/

// set language for displaying web pages:
user_pref("intl.accept_languages", "en-US, en");
user_pref("javascript.use_us_english_locale", true); //Hidden pref


/*********************************************************************
 * Auto-updates and Recommendations
 *********************************************************************/

// disable auto-installing Firefox updates
//user_pref("app.update.background.scheduling.enabled", false); //Windows
user_pref("app.update.auto", false); //Non-Windows

// disable addons recommendations (use Google Analytics)
user_pref("extensions.getAddons.showPane", false); //Hidden pref
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);


/*********************************************************************
 * Telemetry:
 *********************************************************************/

// disable telemetry
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.enabled", false); //Default: false
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true); //Hidden pref
user_pref("toolkit.coverage.opt-out", true); //Hidden pref
user_pref("toolkit.coverage.endpoint.base.", "");
user_pref("browser.ping-centre.telemetry", false);

// disable sending additional analytics to web servers
user_pref("beacon.enabled", false);


/*********************************************************************
 * Studies:
 *********************************************************************/

// disable studies
user_pref("app.shield.optoutstudies.enabled", false);

// disable normandy/shield
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");


/*********************************************************************
 * Crash Reports
 *********************************************************************/

// disable crash reports
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false); //Default: false
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); //Default: false


/*********************************************************************
 * Captive Portal Detection / Network Checks:
 *********************************************************************/

// disable captive portal detection
user_pref("captivedetect.canonicalURL", "")
user_pref("network.captive-portal-service.enabled", false);

// disable network connections checks
user_pref("network.connectivity-service.enabled", false);


/*********************************************************************
 * Safe Browsing:
 *********************************************************************/

// disable safe browsing service
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");


/*********************************************************************
 * Network (DNS / Proxy / IPv6):
 *********************************************************************/

// disable link prefetching
user_pref("network.prefetch-next", false);

// disable DNS prefetching
user_pref("network.dns.disablePrefetch", true);

// disable predictor
user_pref("network.predictor.enabled", false);

// disable IPv6
user_pref("network.dns.disableIPv6", true);

// disable "GIO" protocols as a potential proxy bypass vectors
user_pref("network.gio.supported-protocols", ""); //Hidden pref

// use Punycode in Internationalized Domain Names to eliminate possible spoofing
user_pref("network.IDN_show_punycode", true);


/*********************************************************************
 * Search Bar: Suggestions / Autofill:
 *********************************************************************/

// display all parts of the url in the bar
user_pref("browser.urlbar.trimURLs", false);

// disable form autofill
user_pref("browser.formfill.enable", false);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.creditCards.available", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);
user_pref("signon.autofillForms", false); //login and passwords

// disable location bar contextual suggestions:
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);


/*********************************************************************
 * Disk Cache / Memory:
 *********************************************************************/

// disable disk cache
user_pref("browser.cache.disk.enable", false);

/*
 * disable storing extra session data:
 *    0 = everywhere
 *    1 = unencrypted sites
 *    2 = nowhere
 */
user_pref("browser.sessionstore.privacy_level", 2);

// disable resuming session from crash
user_pref("browser.sessionstore.resume_from_crash", false);


/*********************************************************************
 * Headers / Referers:
 *********************************************************************/

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


/*********************************************************************
 * Audio/Video (WebRTC, WebGL):
 *********************************************************************/

// disable WebRTC
user_pref("media.peerconnection.enabled", false);

// limit WebRTC IP leaks if using it
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);

// disable Web Audio API
//user_pref("dom.webaudio.enabled", false);

// disable WebGL (Web Graphics Library):
user_pref("webgl.disabled", true);

// disable autoplay of HTML5 media
//user_pref("media.autoplay.blocking_policy", 2);

/*********************************************************************
 * Downloads:
 *********************************************************************/

// always ask you where to save files:
user_pref("browser.download.useDownloadDir", false);

// disable adding downloads to system's "recent documents" list
user_pref("browser.download.manager.addToRecentDocs", false);


/*********************************************************************
 * Cookies:
 *********************************************************************/

/*
 * enable ETP (Enhanced Tracking Protection)
 * ETP strict mode enables Total Cookie Protection (TCP)
 */
user_pref("browser.contentblocking.category", "strict");
//user_pref("privacy.partition.serviceWorkers", true); //FF 96+


/*********************************************************************
 * Shutdown:
 *********************************************************************/

// clear history when Firefox closes
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.sitesettings", true);
user_pref("privacy.sanitize.timeSpan", 0);


/*********************************************************************
 * HTTPS:
 *********************************************************************/

// enable HTTPS-Only mode in all windows
user_pref("dom.security.https_only_mode", true);

// disable sending HTTP request for checking HTTPS support by the server
user_pref("dom.security.https_only_mode_send_http_background_request", false);


/*********************************************************************
 * Fingerprinting:
 *********************************************************************/

/*
 * RFP (Resist Fingerptinting):
 *
 *
 * can cause some website breakage: mainly canvas, use a site
 * exception via the urlbar.
 *
 * RFP also has a few side effects: mainly timezone is UTC0, and
 *  websites will prefer light theme.
 * [1] https://bugzilla.mozilla.org/418986
 *
 * See: https://support.mozilla.org/en-US/kb/firefox-protection-against-fingerprinting
 */
//user_pref("privacy.resistFingerprinting", true);

// set new window size rounding max values
//user_pref("privacy.window.maxInnerWidth", 1600);
//user_pref("privacy.window.maxInnerHeight", 900);

// disable mozAddonManager Web API
//user_pref("privacy.resistFingerprinting.block_mozAddonManager", true); //Hidden pref

// disable using system colors
//user_pref("browser.display.use_system_colors", false); //Default: false (Non-Windows)
```

## uBlock Origin

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
    * EasyPrivacy

* Malware Domains:
    * Online Malicious URL Blocklist

* Annoyances:
    * Fanboy's Annoyance

* Multipurpose:
    * Peter Lowe's Ad and tracking server list
```

For more information about uBlock usage see the [Wiki](https://github.com/gorhill/uBlock/wiki) on GitHub, check the [Blocking mode: Medium mode](https://github.com/gorhill/uBlock/wiki/Blocking-mode:-medium-mode) is very powerful :).

## DoH (DNS over HTTPS)

DNS-over-HTTPS, DNS-over-TLS, and DNSCrypt resolvers will not make you anonymous. Using Anonymized DNSCrypt hides only your DNS traffic from your Internet Service Provider. However, using any of these protocols will prevent DNS hijacking, and make your DNS requests harder for third parties to eavesdrop on and tamper with.
For more information about DNS and DoH see: [Wikipedia - DNS over HTTPS](https://en.wikipedia.org/wiki/DNS_over_HTTPS)

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

## Resources:

* [arkenfox user.js](https://github.com/arkenfox/user.js)

* [uBlock Origin](https://ublockorigin.com/)

