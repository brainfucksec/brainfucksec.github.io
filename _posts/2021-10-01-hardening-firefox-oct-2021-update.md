---
layout: post
title: "Hardening Firefox - October 2021 Update"
date: 2021-10-01
---

<br>

This is my personal configuration for **hardening Mozilla Firefox while maintaining usability**, plugins are minimized to avoid fingerprinting (yes, installing multiple privacy plugins results in making the browser more unique).

At the time of writing Mozilla Firefox is at version 92.0.1, remember to check the settings at each update.

<br>

## Backup Firefox profile

Before changing the configuration, you should make a backup of the default profile, or create a new profile with the new settings.

To back up your profile, first close Firefox if it is open and then copy the default profile folder to another location, for example on Linux the profile folder is:

`~/.mozilla/firefox/xxxxxxxx.default`

when "xxxxxxxx" is the ID of your profile.

See: [Back up and restore information in Firefox profiles](https://support.mozilla.org/en-US/kb/back-and-restore-information-firefox-profiles)

If you want to create new profile see: [Create, remove or switch Firefox profiles](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles?redirectslug=profile-manager-create-and-remove-firefox-profiles&redirectlocale=en-US) (also, see [Multiple profiles](#multiple-profiles) downward).  You can also use [Firefox Containers](https://support.mozilla.org/en-US/kb/containers) that lets you separate your work, shopping, or personal browsing without having to clear your history, log in and out, or use multiple browsers/profiles. However, remember that containers share the same browser settings and add-ons and you may confuse accounts and activities between them.


## Firefox Preferences

**Download folder location**

* Click on `Edit -> Settings`

* Go to `General -> Files and Applications`, select `Always ask you where to save files`

**Search Engine preferences**

* Go to `Search -> Default Search Engine`, select `DuckDuckGo`, then to `Search -> Search Shortcuts`, select `DuckDuckGo`

* Remove all other search engines


## about:config

On the search bar insert: `about:config`, sets the values for the parameters as follow:

`option` = `value`

**StartUp Settings**

* Disable about:config warning:

    `browser.aboutConfig.showWarning` = `false`

* Disable activity and telemetry on new tab pages:

    `browser.newtabpage.enabled` = `false`

    `browser.newtab.preload` = `false`

    `browser.newtabpage.activity-stream.feeds.telemetry` = `false`

    `browser.newtabpage.activity-stream.telemetry` = `false`

    `browser.newtabpage.activity-stream.feeds.snippets` = `false`

    `browser.newtabpage.activity-stream.feeds.section.topstories` = `false`

    `browser.newtabpage.activity-stream.section.highlights.includePocket` = `false`

    `browser.newtabpage.activity-stream.showSponsored` = `false`

    `browser.newtabpage.activity-stream.feeds.discoverystreamfeed` = `false`

    `browser.newtabpage.activity-stream.showSponsoredTopSites` = `false`

    `browser.newtabpage.activity-stream.default.sites` = `""`

**Geolocation**

* Use Mozilla geolocation service instead of Google if permission is granted:

    `geo.provider.network.url` = `https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%`

* Disable using the OS's geolocation service:

    `geo.provider.ms-windows-location` = `false` (Windows)

    `geo.provider.use_corelocation` = `false` (macOS)

    `geo.provider.use_gpsd` = `false` (Linux)

* Disable region updates:

    `browser.region.network.url` = `""`

    `browser.region.update.enabled` = `false`

**Language / Locale**

* Set language for displaying web pages:

    `intl.accept_languages` = `en-US, en`

    `javascript.use_us_english_locale` = `true` (Hidden Pref)

**Auto-updates and Recommendations**

* Disable auto-INSTALLING Firefox updates:

    `app.update.auto` = `false` (Non-Windows)

    `app.update.background.scheduling.enabled` = `false` (Windows)

* Disable addons recommendations (uses Google Analytics):

    `extensions.getAddons.showPane` = `false` (Hidden Pref)

    `extensions.htmlaboutaddons.recommendations.enabled` = `false`

**Telemetry**

* Disable telemetry:

    `datareporting.healthreport.uploadEnabled` = `false`

    `toolkit.telemetry.unified` = `false`

    `toolkit.telemetry.enabled` = `false` (as default)

    `toolkit.telemetry.server` = `data:,`

    `toolkit.telemetry.archive.enabled` = `false`

    `toolkit.telemetry.newProfilePing.enabled` = `false`

    `toolkit.telemetry.shutdownPingSender.enabled` = `false`

    `toolkit.telemetry.updatePing.enabled` = `false`

    `toolkit.telemetry.bhrPing.enabled` = `false`

    `toolkit.telemetry.firstShutdownPing.enabled` = `false`

    `toolkit.telemetry.coverage.opt-out` = `true` (Hidden Pref)

    `toolkit.coverage.opt-out` = `true` (Hidden Pref)

    `toolkit.coverage.endpoint.base` = `""`

    `browser.ping-centre.telemetry` = `false`

**Studies**

* Disable studies:

    `datareporting.policy.dataSubmissionEnable` = `false`

* Disable normandy/shield:

    `app.normandy.enabled` = `false`

    `app.normandy.api_url` = `""`

**Crash Reports**

* Disable crash reports:

    `breakpad.reportURL` = `""`

    `browser.tabs.crashReporting.sendReport` = `false`

    `browser.crashReports.unsubmittedCheck.enabled` = `false`

    `browser.crashReports.unsubmittedCheck.autoSubmit2` = `false`

**Captive Portal Detection / Network Checks**

* Disable captive portal detection:

    `captivedetect.canonicalURL` = `""`

    `network.captive-portal-service.enabled` = `false`

* Disable network connectivity checks:

    `network.connectivity-service.enabled` = `false`

**Safe Browsing**

* Disable Safe Browsing service:

    `browser.safebrowsing.downloads.remote.enabled` = `false`

    `browser.safebrowsing.downloads.remote.url` = `""`

**Prefetching**

* Disable link prefetching:

    `network.prefetch-next` = `false`

* Disable DNS prefetching:

    `network.dns.disablePrefetch` = `true`

* Disable predictor:

    `network.predictor.enabled` = `false`

**Network**

* Disable IPv6:

    `network.dns.disableIPv6` = `true`

**Search Bar / Autofill**

* Display all parts of the url in the bar:

    `browser.urlbar.trimURLs` = `false`

* Disable form autofill:

    `browser.formfill.enable` = `false`

    `extensions.formautofill.addresses.enabled` = `false`

    `extensions.formautofill.available` = `off`

    `extensions.formautofill.creditCards.available` = `false`

    `extensions.formautofill.creditCards.enabled` = `false`

    `extensions.formautofill.heuristics.enabled` = `false`

    `signon.autofillForms` = `false`

**Cache / Memory**

* Disable disk cache:

    `browser.cache.disk.enable` = `false`

* Disable storing extra session data:

    `browser.sessionstore.privacy_level` = `2`

* Set the minimum interval between session save operations:

    `browser.sessionstore.interval` = `30000`

**Headers / Referers**

* Control when to send a referer:
    * 0=always (default)
    * 1=only if base domains match
    * 2=only if hosts match

    `network.http.referer.XOriginPolicy` = `2`

* Control the amount of information to send:
    * 0=send full URI (default)
    * 1=scheme+host+port+path
    * 2=scheme+host+port

    `network.http.referer.XOriginTrimmingPolicy` = `2`

**WebRTC**

* Disable WebRTC:

    `media.peerconnection.enabled` = `false`

* Limit WebRTC IP leaks if using WebRTC:

    `media.peerconnection.ice.default_address_only` = `true`

    `media.peerconnection.ice.no_host` = `true`

    `media.peerconnection.ice.proxy_only_if_behind_proxy` = `true`

**Cookies**

* Disable 3rd-party cookies and site-data:

    `network.cookie.cookieBehavior` = `1`

    `browser.contentblocking.category` = `custom`

**Shutdown**

* Clear history when Firefox closes:

    `privacy.sanitize.sanitizeOnShutdown` = `true`

    `privacy.clearOnShutdown.cache` = `true`

    `privacy.clearOnShutdown.cookies` = `true`

    `privacy.clearOnShutdown.downloads` = `true`

    `privacy.clearOnShutdown.formdata` = `true`

    `privacy.clearOnShutdown.history` = `true`

    `privacy.clearOnShutdown.offlineApps` = `true`

    `privacy.clearOnShutdown.sessions` = `true`

    `privacy.clearOnShutdown.sitesettings` = `false`

**WebGL (Web Graphics Library)**

* Disable WebGL:

    `webgl.disabled` = `true`

**HTTPS**

* Set "HTTPS-only mode":

    To enable this feature go to `Edit -> Settings -> Privacy & Security -> HTTPS-Only Mode` then select `Enable HTTPS-Only Mode in all windows`


## Add-ons

[uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)

* Install `uBlock Origin`:

    Click on `Add to Firefox`

* Open the plugin settings:

    Click the icon to the right of the search bar then select `Open the dashboard`

* Enable additional blocklists:

    In the dashboard select `Filter lists`, this is my lists selection (you can select your favorite ones):

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

For more information about uBlock usage see the [Wiki](https://github.com/gorhill/uBlock/wiki) on Github.


## DoH (DNS over HTTPS)

Go to `Edit -> Settings -> General -> Network Settings`, click on `Settings`, select `Enable DNS over HTTPS`, in `Use Provider` window, select `Custom` and insert your DoH provider.

You can find some good DNS providers at: [privacyguides.org/providers/dns](https://privacyguides.org/providers/dns/)

For more information about DoH see: [Privacy Guides - DNS definitions](https://privacyguides.org/providers/dns/#dns-definitions)


## Multiple profiles

A good practice is to use multiple profiles for different purposes, e.g. (work, streaming, personal, finance), read [here](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles?redirectslug=profile-manager-create-and-remove-firefox-profiles&redirectlocale=en-US) how to manage profiles in Firefox.


## Browser fingerprinting

When you visit a web page, your browser voluntarily sends information about its configuration, such as available fonts, browser type, and add-ons. If this combination of information is unique, it may be possible to identify and track you without using cookies, you can test your browser to see how unique it is.

These are some sites where you can perform these tests:

[https://coveryourtracks.eff.org/](https://coveryourtracks.eff.org/)

[https://www.amiunique.org/](https://www.amiunique.org/)

[https://browserleaks.com/](https://browserleaks.com/)

More information: [How Unique Is Your Web Browser? Peter Eckersley, EFF.](https://coveryourtracks.eff.org/static/browser-uniqueness.pdf)

## Head

As always, use **your head** to avoid intrusions, browser security depends largely on how you behave online.


## user.js File

If you want you can use the `user.js` file with these ..or with your preferred settings, it is recommended to create a new profile for this purpose.

More information about Firefox user.js:

 * [arkenfox user.js - Wiki](https://github.com/arkenfox/user.js/wiki/1.1-Overview)

 * [User.js file - MozillaZine Knowledge Base](http://kb.mozillazine.org/User.js_file)

This my user.js file with settings of this article. To install it:

1. Create a new file with name `user.js` and copy it in the profile folder, i.e. `~/.mozilla/firefox/xxxxxxxx.my_settings`, where `xxxxxxxx.my_settings` is the name of the new profile for use with the `user.js`.

2. Copy paste the following code:

Note: Remember to edit the file according to your preferences before launching firefox.

```javascript
/***********************************************************
*
* name: user.js
* date: 2021-09-30
* version: 0.1
* maintainer: Brainf+ck
*
* For more information how to use this file see:
* https://github.com/arkenfox/user.js/wiki/1.1-Overview
*
***********************************************************/


/* For detailed information about these entries see:
 * http://kb.mozillazine.org/Firefox_%3A_FAQs_%3A_About%3Aconfig_Entries
 */

/* FORMAT:
 * user_pref("<entry>", <boolean> || "<string/number>" );
 */


/** about:config **/

// disable about:config warning
user_pref("browser.aboutConfig.showWarning", false);

/** StartUp Settings **/

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

/** Geolocation **/

// use Mozilla geolocation service instead of Google if permission is granted
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");

// disable using the OS’s geolocation service
//user_pref("geo.provider.ms-windows-location", false); //Windows
//user_pref("geo.provider.use_corelocation", false); //macOS
user_pref("geo.provider.use_gpsd", false); //Linux

// disable region updates
user_pref("browser.region.network.url", "");
user_pref("browser.region.update.enabled", false);

/** Language / Locale **/

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

/** Telemetry **/

// disable telemetry
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

/** Studies **/

// disable studies
user_pref("datareporting.policy.dataSubmissionEnable", false);

// disable normandy/shield
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

/** Captive Portal Detection / Network Checks **/

// disable captive portal detection
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);

/** Safe Browsing **/

// disable safe browsing service
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");

/** Prefetching **/

// disable link prefetching
user_pref("network.prefetch-next", false);

// disable DNS prefetching
user_pref("network.dns.disablePrefetch", true);

// disable predictor
user_pref("network.predictor.enabled", false);

/** Network **/

// disable IPv6
user_pref("network.dns.disableIPv6", true);

/** Search Bar / Autofill **/

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

/** Cache / Memory **/

// disable disk cache
user_pref("browser.cache.disk.enable", false);

// disable storing extra session data
user_pref("browser.sessionstore.privacy_level", 2);

// set the minimum interval between session save operations
user_pref("browser.sessionstore.interval", 30000);

/** Headers / Referers **/

/* control when to send a referer:
 *    0=always (default)
 *    1=only if base domains match
 *    2=only if hosts match
 */
user_pref("network.http.referer.XOriginPolicy", 2);

/** WebRTC **/

// disable WebRTC
user_pref("media.peerconnection.enabled", false);

// limit WebRTC IP leaks if using it
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);

/** Cookies **/

// disable 3rd-party cookies and site-data
user_pref("network.cookie.cookieBehavior", 1);
user_pref("browser.contentblocking.category", "custom");

/** Shutdown **/

// clear history when Firefox closes
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.sitesettings", true);

/** WebGL (Web Graphics Library) **/

// disable WebGL
user_pref("webgl.disabled", true);
```

---

Credits:

* [arkenfox user.js](https://github.com/arkenfox/user.js)

* [uBlock Origin](https://ublockorigin.com/)

* [Firefox: Privacy Related "about:config" Tweaks](https://privacyguides.org/browsers/#about_config)

* A special thanks goes to Reddit [/r/privacytoolsIO](https://old.reddit.com/r/privacytoolsIO/) and [/r/PrivacyGuides](https://old.reddit.com/r/PrivacyGuides/) communities that helped me to improve this article.

---

