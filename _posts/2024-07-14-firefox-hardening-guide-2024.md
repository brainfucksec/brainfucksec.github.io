---
layout: post
title: "Firefox Hardening Guide 2024"
date: 2024-07-14
---

Update: 20 October 2024 - Rev.1 (05:46:13 PM UTC 2024)

## Table of Contents

* [Introduction](#introduction)
* [Backup and create Firefox profile](#backup-and-create-firefox-profile)
* [Search Preferences](#search-preferences)
* [about:config / user.js settings](#aboutconfig--userjs-settings)
* [user.js](#userjs)
* [uBlock Origin](#ublock-origin)
* [DoH (DNS over HTTPS)](#doh-dns-over-https)
* [Multiple profiles and Containers](#multiple-profiles-and-containers)
* [Browser Leak Test](#browser-leak-test)
* [Disclaimer](#disclaimer)
* [Resources](#resources)

<br>

## Introduction

When you visit a web page, your browser voluntarily sends information about its configuration, such as available fonts, browser type, and add-ons. If this combination of information is unique, it may be possible to identify and track you without using cookies.  For more information on Browser Fingerprinting check out these sources:

[Device fingerprint - Wikipedia](https://en.wikipedia.org/wiki/Device_fingerprint)

[What is browser fingerprinting? - amiunique.org](https://www.amiunique.org/faq)

[Support Mozilla - Firefox's protection against fingerprinting](https://support.mozilla.org/en-US/kb/firefox-protection-against-fingerprinting)

**PDF:** [How Unique Is Your Web Browser? Peter Eckersley, EFF.](https://coveryourtracks.eff.org/static/browser-uniqueness.pdf)

In the area of cybersecurity the "100% secure setup" does not exist, what you can do though, is reduce the amount of data collected by "Third Party entities" when you browse the Internet, and reduce attack vectors.

## Backup and create Firefox profile

Before starting the configuration, it's stronlgy recommended to backup the default profile, and create a new profile for the new settings and to use the user.js file

To back up your default profile, first close Firefox if it is open and then copy the default profile folder to another location, the Firefox profile folder is located in the Home of the operating system, for example on Linux you can find it in the following path::

`/home/username/.mozilla/firefox/xxxxxxxx.default`

while on Windows it's located in:

`C:\Users\username\AppData\Roaming\Mozilla\Firefox\Profiles\xxxxxxxx.default`

where "username" is your profile name and "xxxxxxxx" is the ID of your profile.

See: [Back up and restore information in Firefox profiles](https://support.mozilla.org/en-US/kb/back-and-restore-information-firefox-profiles)

For create new profiles see: [Create, remove or switch Firefox profiles](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles?redirectslug=profile-manager-create-and-remove-firefox-profiles&redirectlocale=en-US) also, see [Multiple profiles and Containers](#multiple-profiles-and-containers) section.

## Search Preferences

To change your preferences on the search engines used:

* Go to `Search`:

    * `Default Search Engine`: select `DuckDuckGo`

    * `Search Shortcuts`: select `DuckDuckGo`, remove Google, Bing, eBay, Amazon, Wikipedia search engines

Other good privacy-oriented search engines are:

* [SearXNG](https://github.com/searxng/searxng)
* [MetaGer](https://metager.org/)
* [Ecosia](https://www.ecosia.org/)

To add search engines or restore the default settings, see: [Add or remove a search engine in Firefox](https://support.mozilla.org/en-US/kb/add-or-remove-search-engine-firefox).

The other Search settings are managed through the [about:config](#aboutconfig--userjs-settings) parameters.

## about:config / user.js settings

These are the settings in the `about:config` section and in the [user.js](#userjs) file.
The parameters are divided into sections, see [Index of Sections](#index-of-sections) below, and `[INDEX]` in the `user.js` file.

There are some keywords used in the comments of the user.js file and in this section:

* `[Windows], [Linux] etc.` - The option is valid only for the indicated operating system.
* `[Non-Windows]`           - The option is valid for all operating systems other than Windows.
* `[HIDDEN PREF]`           - Option that must be enabled in order to change its default value or to be used.

NOTE: Settings with default value "false" are not present (with some exceptions for clarity).

### Index of Sections:

* [StartUp Settings](#startup-settings)
* [Geolocation](#geolocation)
* [Language / Locale](#language--locale)
* [Recommendations](#recommendations)
* [Telemetry](#telemetry)
* [Studies](#studies)
* [Crash Reports](#crash-reports)
* [Safe Browsing](#safe-browsing)
* [Network: DNS, Proxy, Network Checks](#network-dns-proxy-network-checks)
* [Search Bar: Suggestions, Autofill, Forms](#search-bar-suggestions-autofill-forms)
* [Passwords](#passwords)
* [Disk Cache / Memory](#disk-cache--memory)
* [HTTPS / SSL/TLS / OSCP / CERTS](#https-ssltls-oscp-certs)
* [Headers / Referers](#headers--referers)
* [Audio/Video: WebRTC, WebGL](#audiovideo-webrtc-webgl)
* [Downloads](#downloads)
* [Cookies](#cookies)
* [UI Features](#ui-features)
* [Extensions](#extensions)
* [Shutdown Settings & Sanitizing](#shutdown-settings--sanitizing)
* [Fingerprinting (RFP)](#fingerprinting-rfp)

### StartUp Settings

* Disable about:config warning

    `browser.aboutConfig.showWarning` = `false`

* Set startup home page
    * 0 = blank
    * 1 = home
    * 2 = last visited page
    * 3 = resume previous session

    `browser.startup.page` = `1`

* Set Home + New Window page
    * about:home = Firefox Home (default)
    * about:blank = custom URL

    `browser.startup.homepage` = `"about:home"`

* Set NEWTAB page
    * true = Firefox Home (default), false = blank page

    `browser.newtabpage.enabled` = `false`

* Disable sponsored content on Firefox Home (Activity Stream)

    `browser.newtabpage.activity-stream.showSponsored` = `false`

    `browser.newtabpage.activity-stream.showSponsoredTopSites` = `false`

* Sponsored shortcuts: clear default topsites

    `browser.newtabpage.activity-stream.default.sites` = `""`

### Geolocation

* Disable using the OS's geolocation service

    `geo.provider.ms-windows-location` = `false`  [Windows]

    `geo.provider.use_corelocation` = `false`     [macOS]

    `geo.provider.use_geoclue` = `false`          [Linux]

### Language / Locale

* Set language for displaying web pages

    `intl.accept_languages` = `"en-US, en"`

    `javascript.use_us_english_locale` = `true` [HIDDEN PREF]

### Recommendations

* Disable recommendation pane in about:addons (use Google Analytics)

    `extensions.getAddons.showPane` = `false` [HIDDEN PREF]

* Disable recommendations in about:addons Extensions and Themes panes

    `extensions.htmlaboutaddons.recommendations.enabled` = `false`

* Disable personalized Extension Recommendations in about:addons

    `browser.discovery.enabled` = `false`

### Telemetry

* Disable new data submission

    `datareporting.policy.dataSubmissionEnabled` = `false`

* Disable Health Reports

    `datareporting.healthreport.uploadEnabled` = `false`

* Disable telemetry

    `toolkit.telemetry.enabled` = `false` [Default: false]

    `toolkit.telemetry.unified` = `false`

    `toolkit.telemetry.server` = `"data:,"`

    `toolkit.telemetry.archive.enabled` = `false`

    `toolkit.telemetry.newProfilePing.enabled` = `false`

    `toolkit.telemetry.shutdownPingSender.enabled` = `false`

    `toolkit.telemetry.updatePing.enabled` = `false`

    `toolkit.telemetry.bhrPing.enabled` = `false` [bhr = Background Hang Reporter]

    `toolkit.telemetry.firstShutdownPing.enabled` = `false`

    `toolkit.telemetry.coverage.opt-out` = `true` [HIDDEN PREF]

    `toolkit.coverage.opt-out` = `true` [HIDDEN PREF]

    `toolkit.coverage.endpoint.base` = `""`

* Disable Firefox Home (Activity Stream) Telemetry

    `browser.newtabpage.activity-stream.feeds.telemetry` = `false`

    `browser.newtabpage.activity-stream.telemetry` = `false`


### Studies

* Disable studies

    `app.shield.optoutstudies.enabled` = `false`

* Disable normandy/shield (telemetry system)
* See: [https://mozilla.github.io/normandy/](https://mozilla.github.io/normandy/hh,s)

    `app.normandy.enabled` = `false`

    `app.normandy.api_url` = `""`

### Crash Reports

* Disable crash reports

    `breakpad.reportURL` = `""`

    `browser.tabs.crashReporting.sendReport` = `false`

### Safe Browsing

* Disable safe browsing service

    `browser.safebrowsing.malware.enabled` = `false`

    `browser.safebrowsing.phishing.enabled` = `false`

* Disable list of blocked URI

    `browser.safebrowsing.blockedURIs.enabled` = `false`

* Disable fetch of updates

    `browser.safebrowsing.provider.google4.gethashURL` = `""`

    `browser.safebrowsing.provider.google4.updateURL` = `""`

    `browser.safebrowsing.provider.google.gethashURL` = `""`

    `browser.safebrowsing.provider.google.updateURL` = `""`

    `browser.safebrowsing.provider.google4.dataSharingURL` = `""`

* Disable checks for downloads

    `browser.safebrowsing.downloads.enabled` = `false`

    `browser.safebrowsing.downloads.remote.enabled` = `false`

    `browser.safebrowsing.downloads.remote.url` = `""`

* Disable checks for unwanted software

    `browser.safebrowsing.downloads.remote.block_potentially_unwanted` = `false`

    `browser.safebrowsing.downloads.remote.block_uncommon` = `false`

* Disable bypasses the block of safe browsing with a click for current session

    `browser.safebrowsing.allowOverride` = `false`

### Network: DNS, Proxy, Network Checks

* Disable link prefetching

    `network.prefetch-next` = `false`

* Disable DNS prefetching

    `network.dns.disablePrefetch` = `true`

    `network.dns.disablePrefetchFromHTTPS` = `true`

* Disable predictor:

    `network.predictor.enabled` = `false`

* Disable link-mouseover opening connection to linked server:

    `network.http.speculative-parallel-limit` = `0`

* Disable mousedown speculative connections on bookmarks and history:

    `browser.places.speculativeConnect.enabled` = `false`

* Disable GIO protocols as a potential proxy bypass vectors:
* See: [https://en.wikipedia.org/wiki/GIO_(software)](https://en.wikipedia.org/wiki/GIO_(software))

    `network.gio.supported-protocols` = `""` [HIDDEN PREF]

* Disable using UNC (Uniform Naming Convention) paths (prevent proxy bypass):

    `network.file.disable_unc_paths` = `true` [HIDDEN PREF]

* Remove special permissions for certain mozilla domains:

    `permissions.manager.defaultsUrl` = `""`

* Use Punycode in Internationalized Domain Names to eliminate possible spoofing:

    `network.IDN_show_punycode` = `true`

* Disable captive portal detection

    `captivedetect.canonicalURL` = `""`

    `network.captive-portal-service.enabled` = `false`

* Disable network connections checks

    `network.connectivity-service.enabled` = `false`

### Search Bar: Suggestions, Autofill, Forms

* Disable location bar making speculative connections:

    `browser.urlbar.speculativeConnect.enabled` = `false`

* Disable location bar contextual suggestions

    `browser.urlbar.quicksuggest.enabled` = `false`

    `browser.urlbar.suggest.quicksuggest.nonsponsored` = `false`

    `browser.urlbar.suggest.quicksuggest.sponsored` = `false`

* Disable live search suggestions:

    `browser.search.suggest.enabled` = `false`

    `browser.urlbar.suggest.searches` = `false`

* Disable urlbar trending search suggestions:

    `browser.urlbar.trending.featureGate` = `false`

* Disable urlbar suggestions:

    `browser.urlbar.addons.featureGate` = `false`

    `browser.urlbar.mdn.featureGate` = `false` [HIDDEN PREF]

* Disable search and form history:

    `browser.formfill.enable` = `false`

* Disable form autofill:

    `extensions.formautofill.addresses.enabled` = `false`

    `extensions.formautofill.creditCards.enabled` = `false`

### Passwords

* Disable saving passwords:

    `signon.rememberSignons` = `false`

* Disable autofill login and passwords:

    `signon.autofillForms` = `false`

* Disable formless login capture for Password Manager:

    `signon.formlessCapture.enabled` = `false`

* Hardens against potential credentials phishing:
    * 0 = don't allow sub-resources to open HTTP authentication credentials dialogs
    * 1 = don't allow cross-origin sub-resources to open HTTP authentication credentials dialogs
    * 2 = allow sub-resources to open HTTP authentication credentials dialogs (default)

    `network.auth.subresource-http-auth-allow` = `1`

### Disk Cache / Memory

* Disable disk cache:

    `browser.cache.disk.enable` = `false`

* Disable media cache from writing to disk in Private Browsing

    `browser.privatebrowsing.forceMediaMemoryCache` = `true`

    `media.memory_cache_max_size` = `65536`

* Disable storing extra session data (cookies, POST data, etc.):
    * 0 = everywhere
    * 1 = unencrypted sites
    * 2 = nowhere

    `browser.sessionstore.privacy_level` = `2`

* Disable resuming session from crash:

    `browser.sessionstore.resume_from_crash` = `false`

* Disable automatic Firefox start and session restore after reboot [Windows]:

    `toolkit.winRegisterApplicationRestart` = `false`

* Disable page thumbnail collection

    `browser.pagethumbnails.capturing_disabled` = `true` [HIDDEN PREF]

* Disable favicons in shortcuts [Windows]:

    `browser.shell.shortcutFavicons` = `false`

* Delete temporary files opened from non-Private Browsing windows with external apps:

    `browser.download.start_downloads_in_tmp_dir` = `true`

    `browser.helperApps.deleteTempFileOnExit` = `true`

### HTTPS (SSL/TLS, OSCP, CERTS)

* Disable TLS1.3 0-RTT (round-trip time):

    `security.tls.enable_0rtt_data` = `false`

* Set OCSP to terminate the connection when a CA isn't validate:

    `security.OCSP.require` = `true`

* Display advanced information on Insecure Connection warning pages:

    `browser.xul.error_pages.expert_bad_cert` = `true`

* HPKP (HTTP Public Key Pinning), Enable strict PKP (Public Key Pinning):
    * 0 = disabled
    * 1 = allow user MiTM (i.e. your Antivirus)
    * 2 = strict

    `security.cert_pinning.enforcement_level` = `2`

* Enable CRLite:
    * 0 = disabled
    * 1 = consult CRLite but only collect telemetry
    * 2 = consult CRLite and enforce both "Revoked" and "Not Revoked" results
    * 3 = consult CRLite and enforce "Not Revoked" results, but defer to OCSP for "Revoked" (default)

    `security.remote_settings.crlite_filters.enabled` = `true`

    `security.pki.crlite_mode` = `2`

* Enable HTTPS-Only mode in all windows:

    `dom.security.https_only_mode` = `true`

* Disable sending HTTP request for checking HTTPS support by the server:

    `dom.security.https_only_mode_send_http_background_request` = `false`

### Headers / Referers

* Control the amount of information to send:
    * 0 = send full URI (default):  https://example.com:8888/foo/bar.html?id=1234
    * 1 = scheme+host+port+path:    https://example.com:8888/foo/bar.html
    * 2 = scheme+host+port:         https://example.com:8888

    `network.http.referer.XOriginTrimmingPolicy` = `2`

### Audio/Video: WebRTC, WebGL

* Force WebRTC inside the proxy:

    `media.peerconnection.ice.proxy_only_if_behind_proxy` = `true`

* Force a single network interface for ICE candidates generation:
* [https://wiki.mozilla.org/Media/WebRTC/Privacy](https://wiki.mozilla.org/Media/WebRTC/Privacy)

    `media.peerconnection.ice.default_address_only` = `true`

* Force exclusion of private IPs from ICE candidates:

    `media.peerconnection.ice.no_host` = `true`

* Disable WebGL (Web Graphics Library):

    `webgl.disabled` = `true`

### Downloads

* Always ask you where to save files:

    `browser.download.useDownloadDir` = `false`

* Disable adding downloads to system's "recent documents" list:

    `browser.download.manager.addToRecentDocs` = `false`

### Cookies

* Enable ETP (Enhanced Tracking Protection), ETP strict mode enables Total Cookie Protection (TCP):

    `browser.contentblocking.category` = `"strict"` [HIDDEN PREF]

### UI Features

* Limit events that can cause a popup:

    `dom.popup_allowed_events` = `click dblclick mousedown pointerdown`

* Disable PDFJS scripting:

    `pdfjs.enableScripting` = `false`

* Enable Containers and show the UI settings:
* [https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers ](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers )

    `privacy.userContext.enabled` = `true`

    `privacy.userContext.ui.enabled` = `true`

### Extensions

* Limit allowed extension directories:
    * 1 = profile
    * 2 = user
    * 4 = application
    * 8 = system
    * 16 = temporary
    * 31 = all
    * The pref value represents the sum: e.g. 5 would be profile and application directories.

    `extensions.enabledScopes` = `5` [HIDDEN PREF]

* Display always the installation prompt of 3rd party extension:

    `extensions.postDownloadThirdPartyPrompt` = `false`

### Shutdown Settings & Sanitizing

* Clear history, cookies and site data when Firefox closes:

    `privacy.sanitize.sanitizeOnShutdown` = `true`

    `privacy.clearOnShutdown.cookies` = `true` [Cookies]

    `privacy.clearOnShutdown.offlineApps` = `true` [Site data]

    `privacy.clearOnShutdown_v2.cookiesAndStorage` = `true` [Cookies, Site data, Active Logins]

* Set Time range to clear for "Clear Data" and "Clear History":
    * 0 = everything
    * 1 = last hour
    * 2 = last two hours
    * 3 = last four hours
    * 4 = today
    * NOTE: Values 5 (last 5 minutes) and 6 (last 24 hours) are not listed in the dropdown
    * which will display a blank value, and are not guaranteed to wok

    `privacy.sanitize.timeSpan` = `0`

### Fingerprinting (RFP)

* Enable RFP:

    `privacy.resistFingerprinting` = `true`

* Increase the size of new RFP windows for better usability:

    `privacy.window.maxInnerWidth` = `1600`

    `privacy.window.maxInnerHeight` = `900`

    `privacy.resistFingerprinting.letterboxing` = `false`

* Disable mozAddonManager Web API:

    `privacy.resistFingerprinting.block_mozAddonManager` = `true`

* Disable using system colors:

    `browser.display.use_system_colors` = `false` [Default: false] [Non-Windows]

* Set all open window methods to abide by "browser.link.open_newwindow":

    `browser.link.open_newwindow.restriction` = `0`

## user.js

The easiest way to handle Firefox parameters is to use the `user.js` file, it's strongly recommended to create a new profile for this purpose. See: [Backup and create Firefox profile](#backup-and-create-firefox-profile) section at the beginning of this guide.
Before using the file check the entries and modify/add them according to your preferences, don't copy/paste without know what you are doing.

Download the `user.js` template from my [GitHub gist](https://gist.github.com/brainfucksec/68e79da1c965aeaa4782914afd8f7fa2), note that this user.js is configured for Linux systems, so if you use Windows or macOS edit, comment/uncomment the relevant entries according to the instructions listed above, see notes at: [about:config / user.js settings](#aboutconfig--userjs-settings) section.

More information about Firefox user.js:

 * [mozillaZine - User.js file](https://kb.mozillazine.org/User.js_file)

 * [arkenfox/user.js - Wiki](https://github.com/arkenfox/user.js/wiki/1.1-Overview)

## uBlock Origin

* Install [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/):

    Click on `Add to Firefox`

* Open the plugin settings:

    Click the icon to the right of the search bar then select `Open the dashboard`

* Enable additional blocklists:

    In the dashboard select `Filter lists`, this is my lists selection (you can select your favorite ones):

```text
* Built-in:
    * All checked

* Ads:
    * EasyList

* Privacy:
    * EasyPrivacy
    * AdGuard URL Tracking Protection

* Malware Domains:
    * Online Malicious URL Blocklist
    * Phishing URL Blocklist

* Multipurpose:
    * Peter Lowe's Ad and tracking server list
```

For more information about uBlock usage see the [Wiki](https://github.com/gorhill/uBlock/wiki) on GitHub, check the [Blocking mode: Medium mode](https://github.com/gorhill/uBlock/wiki/Blocking-mode:-medium-mode), is very powerful :).

## DoH (DNS over HTTPS)

DNS-over-HTTPS, DNS-over-TLS, and DNSCrypt resolvers will not make you anonymous. Using Anonymized DNSCrypt hides only your DNS traffic from your Internet Service Provider. However, using any of these protocols will prevent DNS hijacking, and make your DNS requests harder for third parties to eavesdrop on and tamper with.
For more information about DNS and DoH see:

* [Firefox DNS-over-HTTPS](https://support.mozilla.org/en-US/kb/firefox-dns-over-https)
* [Wikipedia - DNS over HTTPS](https://en.wikipedia.org/wiki/DNS_over_HTTPS)

If you want to set DoH on Firefox:

Go to `Edit -> Settings -> Privacy & Security`, in the `DNS over HTTPS` section go to `Enable DNS over HTTPS using:`, select `Max Protection`, then select your preferred DNS provider.

Some good DNS providers are:

* [Mullvad](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls)
* [AdGuard DNS](https://adguard-dns.io/en/public-dns.html)
* [Quad9](https://docs.quad9.net/services/)
* [Control D](https://controld.com/free-dns)
* [NextDNS](https://my.nextdns.io/aa5a24/setup) (Available in default DoH providers)

## Multiple profiles and Containers

A good practice is to use multiple profiles for different purposes, e.g. (work, streaming, personal, finance), read [here](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles?redirectslug=profile-manager-create-and-remove-firefox-profiles&redirectlocale=en-US) how to manage profiles in Firefox.

In the latest versions of Firefox you can create [Containers](https://support.mozilla.org/en-US/kb/containers), Firefox Multi-Account Containers lets you keep parts of your online life separated into color-coded tabs that preserve your privacy. Cookies are separated by container, allowing you to use the web with multiple identities or accounts simultaneously.

## Browser Leak Test

There are come resources where you can test your browser to see how unique it is:

[https://coveryourtracks.eff.org/](https://coveryourtracks.eff.org/)

[https://www.amiunique.org/](https://www.amiunique.org/)

[https://browserleaks.com/](https://browserleaks.com/)

[https://arkenfox.github.io/TZP/tzp.html](https://arkenfox.github.io/TZP/tzp.html)

## Disclaimer:

Take this guide as a starting point and learn about the meaning of the various options, configuring Firefox parameters is a fairly complex topic.
Although I do my best so that there are not, there may be errors or inaccuracies in this guide, so don't blindly copy/paste, and if you find something wrong I invite you to [contact me](https://brainfucksec.github.io/contacts) to fix the problem.
Your security depends not only on technical countermeasures, but also on how you behave online, so search for information, compare them, and **think with you head**.

---

## Resources:

* [arkenfox user.js](https://github.com/arkenfox/user.js)

* [LibreWolf](https://librewolf.net/)

* [uBlock Origin](https://ublockorigin.com/)

***This work would not have been possible without these projects.  Thank you guys for your awesome work!***

<br>
