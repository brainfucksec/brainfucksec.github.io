---
layout: post
title: "Firefox Hardening Guide"
date: 2022-03-21
---

Update: 30 July 2022

<br>

## Table of Contents

* [Introduction](#introduction)
* [Backup Firefox Profile](#backup-firefox-profile)
* [Firefox Preferences](#firefox-preferences)
* [about:config](#aboutconfig)
* [user.js](#userjs)
* [uBlock Origin](#ublock-origin)
* [DoH (DNS over HTTPS)](#doh-dns-over-https)
* [Multiple profiles and Containers](#multiple-profiles-and-containers)
* [Browser Leak Test](#browser-leak-test)
* [Recommendations](#recommendations)
* [Resources](#resources)

<br>

## Introduction

When you visit a web page, your browser voluntarily sends information about its configuration, such as available fonts, browser type, and add-ons. If this combination of information is unique, it may be possible to identify and track you without using cookies.  For more information on Browser Fingerprinting check out these sources:

[How Unique Is Your Web Browser? Peter Eckersley, EFF.](https://coveryourtracks.eff.org/static/browser-uniqueness.pdf)

[Support Mozilla - Firefox's protection against fingerprinting](https://support.mozilla.org/en-US/kb/firefox-protection-against-fingerprinting)

[What is browser fingerprinting? - amiunique.org](https://www.amiunique.org/faq)

In the area of cybersecurity the "100% secure setup" does not exist, what you can do though, is reduce the amount of data collected by entities like Google, Meta, Cloudflare etc. and reduce attack vectors.

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

Notes:

* DuckDuckGo decided to [down-ranks the source of Russian disinformation](https://nitter.unixfox.eu/yegg/status/1501716484761997318?lang=en), everyone is free to have his own opinion about it, for me this is already a form of censorship, I am the one who decides for myself what is disinformation and what is not. Based on my research good alternative search engines are [SearXNG](https://github.com/searxng/searxng) and [MetaGer](https://metager.org/).  To add search engines or restore the default settings, see: [Add or remove a search engine in Firefox](https://support.mozilla.org/en-US/kb/add-or-remove-search-engine-firefox).

* The other Search settings are managed through the [about:config](#aboutconfig) parameters.

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
* Network: DNS, Proxy, IPv6
* Search Bar: Suggestions, Autofill
* Passwords
* Disk Cache / Memory
* HTTPS / SSL/TLS / OSCP / CERTS
* Headers / Referers
* Audio/Video: WebRTC, WebGL, DRM
* Downloads
* Cookies
* UI Features
* Shutdown Settings
* Fingerprinting (RFP)


On the search bar digit: `about:config` and set the parameters as follows:

### StartUp Settings

* Disable about:config warning:

    `browser.aboutConfig.showWarning = false`

* Set startup home page:
    * 0 = blank
    * 1 = home
    * 2 = last visited page
    * 3 = resume previous session

    `browser.startup.page = 1`

    `browser.startup.homepage = "about:home"`

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

    `geo.provider.ms-windows-location = false`  [Windows]

    `geo.provider.use_corelocation = false`     [macOS]

    `geo.provider.use_gpsd = false`             [Linux]

* Disable region updates:

    `browser.region.network.url = ""`

    `browser.region.update.enabled = false`

### Language / Locale

* Set language for displaying web pages:

    `intl.accept_languages = "en-US, en"`

    `javascript.use_us_english_locale = true` [Hidden pref]

### Auto-updates / Recommendations

* Disable auto-installing Firefox updates:

    `app.update.background.scheduling.enabled = false`  [Windows]

    `app.update.auto = false`                           [Non-Windows]


* Disable addons recommendations (uses Google Analytics):

    `extensions.getAddons.showPane = false` [Hidden pref]

    `extensions.htmlaboutaddons.recommendations.enabled = false`

### Telemetry

* Disable telemetry:

    `datareporting.policy.dataSubmissionEnabled = false`

    `datareporting.healthreport.uploadEnabled = false`

    `toolkit.telemetry.enabled = false` [Default: false]

    `toolkit.telemetry.unified = false`

    `toolkit.telemetry.server = "data:,"`

    `toolkit.telemetry.archive.enabled = false`

    `toolkit.telemetry.newProfilePing.enabled = false`

    `toolkit.telemetry.shutdownPingSender.enabled = false`

    `toolkit.telemetry.updatePing.enabled = false`

    `toolkit.telemetry.bhrPing.enabled = false`

    `toolkit.telemetry.firstShutdownPing.enabled = false`

    `toolkit.telemetry.coverage.opt-out = true` [Hidden pref]

    `toolkit.coverage.opt-out = true` [Hidden pref]

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

* Disable safe browsing service:

    `browser.safebrowsing.malware.enabled = false`

    `browser.safebrowsing.phishing.enabled = false`

* Disable list of blocked URI:

    `browser.safebrowsing.blockedURIs.enabled = false`

* Disable fetch of updates:

    `browser.safebrowsing.provider.google4.gethashURL = ""`

    `browser.safebrowsing.provider.google4.updateURL = ""`

    `browser.safebrowsing.provider.google.gethashURL = ""`

    `browser.safebrowsing.provider.google.updateURL = ""`

* Disable checks for downloads:

    `browser.safebrowsing.downloads.enabled = false`

    `browser.safebrowsing.downloads.remote.enabled = false`

    `browser.safebrowsing.downloads.remote.url = ""`

* Disable checks for unwanted software:

    `browser.safebrowsing.downloads.remote.block_potentially_unwanted = false`

    `browser.safebrowsing.downloads.remote.block_uncommon = false`

* Disable bypasses the block of safe browsing with a click for current session:

    `browser.safebrowsing.allowOverride = false`

### Network: DNS, Proxy, IPv6

* Disable link prefetching:

    `network.prefetch-next = false`

* Disable DNS prefetching:

    `network.dns.disablePrefetch = true`

* Disable predictor:

    `network.predictor.enabled = false`

* Disable link-mouseover opening connection to linked server:

    `network.http.speculative-parallel-limit = 0`

* Disable mousedown speculative connections on bookmarks and history:

    `browser.places.speculativeConnect.enabled = false`

* Disable IPv6:

    `network.dns.disableIPv6 = true`

* Disable GIO protocols as a potential proxy bypass vectors:

    `network.gio.supported-protocols = ""` [Hidden pref]

* Remove special permissions for certain mozilla domains:

    `permissions.manager.defaultsUrl = ""`

* Use Punycode in Internationalized Domain Names to eliminate possible spoofing:

    `network.IDN_show_punycode = true`

### Search Bar: Suggestions, Autofill

* Disable search suggestions:

    `browser.search.suggest.enabled = false`

    `browser.urlbar.suggest.searches = false`

* Disable location bar domain guessing:

    `browser.fixup.alternate.enabled = false`

* Display all parts of the url in the bar:

    `browser.urlbar.trimURLs = false`

* Disable location bar making speculative connections:

    `browser.urlbar.speculativeConnect.enabled = false`

* Disable form autofill:

    `browser.formfill.enable = false`

    `extensions.formautofill.addresses.enabled = false`

    `extensions.formautofill.available = "off"`

    `extensions.formautofill.creditCards.available = false`

    `extensions.formautofill.creditCards.enabled = false`

    `extensions.formautofill.heuristics.enabled = false`

*  Disable location bar contextual suggestions:

    `browser.urlbar.quicksuggest.scenario = "history"`

    `browser.urlbar.quicksuggest.enabled = false`

    `browser.urlbar.suggest.quicksuggest.nonsponsored = false`

    `browser.urlbar.suggest.quicksuggest.sponsored = false`

### Passwords

* Disable saving passwords:

    `signon.rememberSignons = false`

* Disable autofill login and passwords:

    `signon.autofillForms = false`

* Disable formless login capture for Password Manager:

    `signon.formlessCapture.enabled = false`

* Hardens against potential credentials phishing:
    * 0 = don't allow sub-resources to open HTTP authentication credentials dialogs
    * 1 = don't allow cross-origin sub-resources to open HTTP authentication credentials dialogs
    * 2 = allow sub-resources to open HTTP authentication credentials dialogs (default)

    `network.auth.subresource-http-auth-allow = 1`

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

* Disable page thumbnail collection

    `browser.pagethumbnails.capturing_disabled = true` [Hidden pref]

### HTTPS / SSL/TLS / OSCP / CERTS

* Enable HTTPS-Only mode in all windows:

    `dom.security.https_only_mode = true`

* Disable sending HTTP request for checking HTTPS support by the server:

    `dom.security.https_only_mode_send_http_background_request = false`

* Display advanced information on Insecure Connection warning pages:

    `browser.xul.error_pages.expert_bad_cert = true`

* Disable TLS1.3 0-RTT (round-trip time):

    `security.tls.enable_0rtt_data = false`

* Set OCSP to terminate the connection when a CA isn't validate:

    `security.OCSP.require = true`

* Disable SHA-1 certificates:

    `security.pki.sha1_enforcement_level = 1`

* Enable strict pinning (PKP (Public Key Pinning)):
    * 0 = disabled
    * 1 = allow user MiTM (i.e. your Antivirus)
    * 2 = strict

    `security.cert_pinning.enforcement_level = 2`

* Enable CRLite
    * 0 = disabled
    * 1 = consult CRLite but only collect telemetry (default)
    * 2 = consult CRLite and enforce both "Revoked" and "Not Revoked" results
    * 3 = consult CRLite and enforce "Not Revoked" results, but defer to OCSP for "Revoked"

    `security.remote_settings.crlite_filters.enabled = true`

    `security.pki.crlite_mode = 2`

### Headers / Referers

* Control when to send a referer:
    * 0 = always (default)
    * 1 = only if base domains match
    * 2 = only if hosts match

    `network.http.referer.XOriginPolicy = 2`

* Control the amount of information to send:
    * 0 = send full URI (default):  https://example.com:8888/foo/bar.html?id=1234
    * 1 = scheme+host+port+path:    https://example.com:8888/foo/bar.html
    * 2 = scheme+host+port:         https://example.com:8888

    `network.http.referer.XOriginTrimmingPolicy = 2`

### Audio/Video: WebRTC, WebGL, DRM

* Disable WebRTC:

    `media.peerconnection.enabled = false`

* Force WebRTC inside the proxy:

    `media.peerconnection.ice.proxy_only_if_behind_proxy = true`

* Force a single network interface for ICE candidates generation:

    `media.peerconnection.ice.default_address_only = true`

* Force exclusion of private IPs from ICE candidates:

    `media.peerconnection.ice.no_host = true`

* Disable WebGL (Web Graphics Library):

    `webgl.disabled = true`

* Disable autoplay of HTML5 media:
    * 0 = allow all
    * 1 = block non-muted media (default)
    * 5 = block all

    `media.autoplay.default = 5`

### Downloads

* Always ask you where to save files:

    `browser.download.useDownloadDir = false`

* Disable adding downloads to system's "recent documents" list:

    `browser.download.manager.addToRecentDocs = false`

### Cookies

* Enable ETP (Enhanced Tracking Protection), ETP strict mode enables Total Cookie Protection (TCP):

    `browser.contentblocking.category = "strict"`

* Enable state partitioning of service workers:

    `privacy.partition.serviceWorkers = true`

### UI Features

* Block popup windows:

    `dom.disable_open_during_load = true`

* Disable Pocket extension:

    `extensions.pocket.enabled = false`

* Disable Screenshots extension:

    `extensions.Screenshots.disabled = true`

* Disable PDJFS scripting:

    `pdfjs.enableScripting = false`

### Shutdown Settings

* Clear history, cookies and site data when Firefox closes:

    `network.cookie.lifetimePolicy = 2`

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

### Fingerprinting (RFP)

* Enable RFP:

    `privacy.resistFingerprinting = true`

* Set new window size rounding max values:

    `privacy.window.maxInnerWidth = 1600`

    `privacy.window.maxInnerHeight = 900`

* Disable mozAddonManager Web API:

    `privacy.resistFingerprinting.block_mozAddonManager = true` [Hidden pref]

* Disable using system colors:

    `browser.display.use_system_colors = false` [Default: false [Non-Windows]]

* Disable showing about:blank page when possible at startup

    `browser.startup.blankWindow = false`

* Disable using system colors:

    `browser.display.use_system_colors = false` [Default: false [Non-Windows]]

## user.js

If you want (is recommended), you can use the `user.js` file with the settings of this guide or with your preferred settings, it is recommended to create a new profile for this purpose.
Before using the file check the entries and modify/add them according to your preferences, don't copy/paste without know what you are doing.

Download the `user.js` template from my [GitHub gist](https://gist.github.com/brainfucksec/68e79da1c965aeaa4782914afd8f7fa2), note that this user.js is configured for Linux systems, so if you use Windows or macOS edit, comment/uncomment the relevant entries according to the instructions listed above.

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

* Built-in:
    * All checked

* Ads:
    * EasyList

* Privacy:
    * AdGuard URL Tracking Protection
    * EasyPrivacy

* Malware Domains:
    * Online Malicious URL Blocklist
    * Phishing URL Blocklist

* Annoyances:
    * Anti-Facebook
    * Fanboy's Annoyance

* Multipurpose:
    * Peter Lowe's Ad and tracking server list
```

For more information about uBlock usage see the [Wiki](https://github.com/gorhill/uBlock/wiki) on GitHub, check the [Blocking mode: Medium mode](https://github.com/gorhill/uBlock/wiki/Blocking-mode:-medium-mode), is very powerful :).

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

## Recommendations:

Take this guide as a starting point and learn about the meaning of the various options, configuring Firefox parameters is a fairly complex topic.
Although I do my best so that there are not, there may be errors or inaccuracies in this guide, so don't blindly copy/paste, and if you find something wrong I invite you to [contact me](https://brainfucksec.github.io/contacts) to fix the problem.
Your security depends not only on technical countermeasures, but also on how you behave online, so search for information, compare them, and **think with you head**.

---

## Resources:

* [arkenfox user.js](https://github.com/arkenfox/user.js)

* [pyllyukko user.js](https://github.com/pyllyukko/user.js/)

* [LibreWolf](https://librewolf.net/)

* [uBlock Origin](https://ublockorigin.com/)

**Thank you guys for your awesome work!**

