---
layout: post
title: "Hardening Firefox 2022 - v0.15.0"
date: 2022-01-20
---

Tested on Firefox: `Version 96.0.x (Linux)`

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

    * `Search Shortcuts`: select `DuckDuckGo`, remove Google, Bing, eBay, Amazon, Wikipedia search engines

    * Click on `Change settings for other address bar suggestions`: uncheck `Shortcuts`

Notes:

* The other Search settings are managed through the [about:config](#aboutconfig) parameters.

* You can add/select your favorite search engines or restore the default settings, see: [Add or remove a search engine in Firefox](https://support.mozilla.org/en-US/kb/add-or-remove-search-engine-firefox)

## about:config

The parameters are divided into "Sections" and are indicated with the format `option = value` for the sake of clarity.
You can use the file [user.js](#userjs) to set all the parameters automatically at Firefox startup.

### Sections:

* StartUp Settings
* Geolocation
* Language / Locale
* Auto-updates / Recommendations
* Telemetry
* Studies
* Crash Reports
* Captive Portal Detection / Network Checks
* Safe Browsing
* Network: DNS / Proxy / IPv6
* Search Bar: Suggestions / Autofill
* Disk Cache / Memory
* HTTPS
* Headers / Referers
* Audio/Video (WebRTC, WebGL)
* Downloads
* Cookies
* UI Features
* Shutdown Settings
* Fingerprinting //disabled


On the search bar digit: `about:config` and set the parameters as follows:

### StartUp Settings

* Disable about:config warning:

    `browser.aboutConfig.showWarning = false`

* Set startup home page:
    * 0=blank
    * 1=home
    * 2=last visited page
    * 3=resume previous session

    `browser.startup.page = 1`

    `browser.startup.homepage = "start.duckduckgo.com"`

* Disable Activity Stream on new windows and tab pages:

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

* Disable Normandy/Shield:

    `app.normandy.enabled = false`

    `app.normandy.api_url = ""`

### Crash Reports

* Disable crash reports:

    `breakpad.reportURL = ""`

    `browser.tabs.crashReporting.sendReport = false`

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

### Network: (DNS / Proxy / IPv6)

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

### HTTPS

* Enable HTTPS-Only mode in all windows:

    `dom.security.https_only_mode = true`

* Disable sending HTTP request for checking HTTPS support by the server:

    `dom.security.https_only_mode_send_http_background_request = false`


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

    `privacy.partition.serviceWorkers = true`

* Delete cookies and site data on exit:

    `network.cookie.lifetimePolicy = 2`

### UI Features

* Disable Pocket extension:

    `extensions.pocket.enabled = false`

* Disable Screenshots extension

    `extensions.Screenshots.disabled = true`

### Shutdown Settings

* Clear history, cookies and site data when Firefox closes:

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

## Disabled Options

Compared to other similar configurations such as [pyllyukko](https://github.com/pyllyukko/user.js) or [arkenfox](https://github.com/arkenfox/user.js) user.js.
There are several options disabled, some of these are commented in the various sections of the [user.js](#user.js) file, these are the options you can activate for greater protection, but they disable some basic functionality like audio/video libraries or other things you need, so be careful. Also I excluded the `default` entries.

## user.js

If you want you can use the `user.js` file with the settings of this guide or with your preferred settings, it is recommended to create a new profile for this purpose.
Before using the file check the entries and modify/add them according to your preferences, don't copy/paste without know what you are doing.

Download the `user.js` template from my GitHub gist [here](https://gist.github.com/brainfucksec/68e79da1c965aeaa4782914afd8f7fa2)

More information about Firefox user.js:

 * [mozillaZine - User.js file](https://kb.mozillazine.org/User.js_file)

 * [arkenfox/user.js - Wiki](https://github.com/arkenfox/user.js/wiki/1.1-Overview)

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
    * AdGuard URL Tracking Protection
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

