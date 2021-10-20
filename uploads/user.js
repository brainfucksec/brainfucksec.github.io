/*********************************************************************
*
* Mozilla Firefox configuration file: `user.js`
*
* name: user.js
* date: 2021-10-21
* version: 0.5.1
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
user_pref("toolkit.telemetry.enabled", false); //as default
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
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled ", false);
user_pref("browser.crashReports.autoSubmit2 ", false);


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

// disable "GIO" protocols as a potential proxy bypass vectors
user_pref("network.gio.supported-protocols", ""); //Hidden pref

// disable IPv6
user_pref("network.dns.disableIPv6", true);


/*********************************************************************
 * Search Bar / Autofill:
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
user_pref("signon.autofillForms", false);


/*********************************************************************
 * Cache / Memory:
 *********************************************************************/

// disable disk cache
user_pref("browser.cache.disk.enable", false);

// disable storing extra session data
user_pref("browser.sessionstore.privacy_level", 2);

// set the minimum interval between session save operations
user_pref("browser.sessionstore.interval", 30000);


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
 * Cookies:
 *********************************************************************/

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


/*********************************************************************
 * Shutdown:
 *********************************************************************/

// clear history when Firefox closes
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.sitesettings", true);


/*********************************************************************
 * Fingerprinting:
 *********************************************************************/

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
//user_pref("privacy.resistFingerprinting.block_mozAddonManager", true); //Hidden pref
//user_pref("privacy.resistFingerprinting.letterboxing", true); //Hidden pref
