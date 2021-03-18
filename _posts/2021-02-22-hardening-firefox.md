---
layout: post
title: "Hardening Firefox"
date: 2021-03-18
---

<br>

This is my personal configuration for hardening Mozilla Firefox while maintaining usability, plugins are minimized to avoid fingerprinting (yes, installing multiple privacy plugins results in making the browser more unique).

### Firefox Preferences

Click on `Edit -> Preferences`

Go to `General > Files and Applications`, select `Always ask you where to save files`

Go to `Search > Default Search Engine`, select `DuckDuckGo`

Go to `Search > Search Shortcuts`, select `DuckDuckGo`, remove all other search engines
    
### about:config 

On the search bar insert: `about:config`, sets the values for the parameters as follow:

**StartUp Settings**

* Disable about:config warning:
    
    `browser.aboutConfig.showWarning` = `false`

* Disable activity and telemetry on new tab pages:
 
    `browser.newtabpage.enabled` = `false`
    
    `browser.newtab.preload` = `false`
    
    `browser.newtabpage.activity-stream.feeds.telemetry` = `false` 

    `browser.newtabpage.activity-stream.feeds.snippets` = `false`

    `browser.newtabpage.activity-stream.feeds.section.topstories` = `false`

    `browser.newtabpage.activity-stream.section.highlights.includePocket` = `false`

    `browser.newtabpage.activity-stream.showSponsored` = `false`

    `browser.newtabpage.activity-stream.feeds.discoverystreamfeed` = `false`

    `browser.newtabpage.activity-stream.default.sites` = `""`

**Geolocation**

* Use Mozilla geolocation service instead of Google:

    `geo.provider.network.url` = `https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%`

* Disable using the OS's geolocation service:

    `geo.provider.ms-windows-location` = `false` (Windows)

    `geo.provider.use_corelocation` = `false` (macOS)

    `geo.provider.use_gpsd` = `false` (Linux)

* Disable region updates:

    `browser.region.update.enabled` = `false`

**Language / Locale**

* Set language for displaying web pages:

    `intl.accept_languages` = `en-US, en`

    `javascript.use_us_english_locale` = `true` (Hidden value)

**Firefox Features**

* Disable auto-INSTALLING Firefox updates:

    `app.update.auto` = `false`

* Disable sending the URL of the website where a plugin crashed:

    `dom.ipc.plugins.reportCrashURL` = `false`

* Disable addons recommendations (uses Google Analytics):

    `extensions.getAddons.showPane` = `false` (Hidden value)

    `extensions.htmlaboutaddons.recommendations.enabled` = `false`

* Disable telemetry:

    `toolkit.telemetry.unified` = `false`

    `toolkit.telemetry.enabled` = `false`

    `toolkit.telemetry.server` = `data:,`

    `toolkit.telemetry.archive.enabled` = `false`

    `toolkit.telemetry.newProfilePing.enabled` = `false`

    `toolkit.telemetry.shutdownPingSender.enabled` = `false`

    `toolkit.telemetry.updatePing.enabled` = `false`

    `toolkit.telemetry.bhrPing.enabled` = `false`

    `toolkit.telemetry.firstShutdownPing.enabled` = `false`

    `toolkit.telemetry.coverage.opt-out` = `true` (Hidden value)

    `toolkit.coverage.opt-out` = `true` (Hidden value)

    `toolkit.coverage.endpoint.base` = `""`

* Disable health reports:

    `datareporting.healthreport.uploadEnabled` = `false`

* Disable studies:

    `datareporting.policy.dataSubmissionEnable` = `false`

* Disable crash reports:

    `breakpad.reportURL` = `""`

    `browser.tabs.crashReporting.sendReport` = `false`

    `browser.crashReports.unsubmittedCheck.enabled` = `false`

    `browser.crashReports.unsubmittedCheck.autoSubmit2` = `false`

* Disable captive portal detection:

    `captivedetect.canonicalURL` = `""`

    `network.captive-portal-service.enabled` = `false`

* Disable network connectivity checks:

    `network.connectivity-service.enabled` = `false`

* Disable Safe Browsing service:

    `browser.safebrowsing.downloads.remote.enabled` = `false`

    `browser.safebrowsing.downloads.remote.url` = `""`

**System Add-ons**

* Disable form autofill:

    `extensions.formautofill.addresses.enabled` = `false`

    `extensions.formautofill.available` = `off`

    `extensions.formautofill.creditCards.available` = `false`

    `extensions.formautofill.creditCards.enabled` = `false`

    `extensions.formautofill.heuristics.enabled` = `false`

**Network**

* Disable link prefetching:

    `network.prefetch-next` = `false`

* Disable DNS prefetching:

    `network.dns.disablePrefetch` = `false`

* Disable IPv6:

    `network.dns.disableIPv6` = `true`

**Search / History**

* Disable search and form history:

    `browser.formfill.enable` = `false`

* Disable auto-filling username & password:

    `signon.autofillForms` = `false`

**Cache / Memory**

* Disable disk cache:

    `browser.cache.disk.enable` = `false`

* Disable storing extra session data:

    `browser.sessionstore.privacy_level` = `2`

**Headers / Referers**

* Control when to send a referer:

* 0=always (default), 1=only if base domains match, 2=only if hosts match.

    `network.http.referer.XOriginPolicy` = `2`

* Control the amount of information to send:

* 0=send full URI (default), 1=scheme+host+port+path, 2=scheme+host+port.

    `network.http.referer.XOriginTrimmingPolicy` = `2`

**Audio / Camera / Mic**

* Disable WebRTC:

    `media.peerconnection.enabled` = `false`

* Limit WebRTC IP leaks if using WebRTC:

    `media.peerconnection.ice.default_address_only` = `true`

    `media.peerconnection.ice.no_host` = `true`

    `media.peerconnection.ice.proxy_only_if_behind_proxy` = `true`

* Disable WebGL (Web Graphics Library):

    `webgl.disabled` = `true`

    `webgl.enable-webgl2` = `true`

* Limit WebGL when is used:

    `webgl.min_capability_mode` = `true`

* Disable screensharing:

    `media.getusermedia.screensharing.enabled` = `false`

    `media.getusermedia.browser.enabled` = `false`

    `media.getusermedia.audiocapture.enabled` = `false`

* Disable autoplay of HTML5 media if you interacted with the site:

    `media.autoplay.blocking_policy` = `2`

**Cookies**

* Disable 3rd-party cookies and site-data:

* 0=Accept cookies and site data, 1=(Block) All third-party cookies, 2=(Block) All cookies, 3=(Block) Cookies from unvisited websites, 4=(Block) Cross-site and social media trackers (default).

    `network.cookie.cookieBehavior` = `1`

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

**User-Agent**

* Create new `string` value and assign the preferred user-agent:

    `general.useragent.override` = `Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:87.0) Gecko/20100101 Firefox/87.0`

### Add-ons

[uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search)

* Install `uBlock Origin`:

    Click on `Add to Firefox`

* Open the plugin settings:

    Click the icon to the right of the search bar then select `Open the dashboard`

* Enable additional blocklists:

    In the dashboard select `Filter lists`, then enable the following lists (or your favorite ones):

    * Privacy > select all
    * Malware domains > Spam404
    * Annoyances > uBlock filters - Annoyances
        

[HTTPS Everywhere](https://addons.mozilla.org/en-US/firefox/addon/https-everywhere/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search)

* Open the plugin settings:

    Click the icon to the right of the search bar, enable `Encrypt All Sites Eligible is OFF`

* Alternatively in the latest versions of Firefox you can use the "HTTPS-only mode":

    To enable this feature go to `Edit > Preferences > Privacy & Security > HTTPS-Only Mode` then select `Enable HTTPS-Only Mode in all windows` 

### DoH (DNS over HTTPS)

Go to `Edit > Preferences > General > Network Settings`, click on `Settings`, select `Enable DNS over HTTPS` 

Go to `Use Provider`, select `Custom`, insert your DoH provider

You can find some good DNS providers at: [privacytools.io/dns](https://www.privacytools.io/providers/dns/)

If you use a VPN that has its own DNS servers it is better to use those.

### Multiple profiles

A good practice is to use multiple profiles for different purposes, e.g. (work, streaming, personal, finance), read [here](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles?redirectslug=profile-manager-create-and-remove-firefox-profiles&redirectlocale=en-US) how to manage profiles in Firefox.

### Browser fingerprinting

When you visit a web page, your browser voluntarily sends information about its configuration, such as available fonts, browser type, and add-ons. If this combination of information is unique, it may be possible to identify and track you without using cookies, you can test your browser to see how unique it is.

These are some sites where you can perform these tests:

[https://coveryourtracks.eff.org/](https://coveryourtracks.eff.org/)

[https://www.amiunique.org/](https://www.amiunique.org/)

[https://browserleaks.com/](https://www.amiunique.org/)


More information: [https://privacytools.io/browsers/#fingerprint](https://privacytools.io/browsers/#fingerprint)

### Head

As always, use **your head** to avoid intrusions, browser security depends largely on how you behave online.

---

by Brainfuck

Credits:

* [arkenfox user.js](https://github.com/arkenfox/user.js)

* [uBlock Origin](https://ublockorigin.com/)

* [HTTPS Everywhere](https://www.eff.org/https-everywhere)

* [privacytools.io/browsers](https://privacytools.io/browsers/#browser)
