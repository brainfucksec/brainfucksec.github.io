---
layout: post
title: "Android FOSS Apps List"
date: 2022-04-28
---

Update: 03 March 2024

List of open source Android applications for "de-google, de-samsung, de-microsoft, de-nsa, de-china-malware etc. etc." your mobile phone, as always, the list is written in a [KISS](https://en.wikipedia.org/wiki/KISS_principle) simple way. The apps in the list are divided by category but within the categories they have no specific order (although in some categories the most popular apps may be higher on the list).
Feel free to [contact me](https://brainfucksec.github.io/contacts) to add applications or modify the list.

The links in the list are related to the application website (if exists) or to the source code repository, I suggest to install [Neo Store](https://github.com/NeoApplications/Neo-Store) or [Droid-ify](https://github.com/Iamlooker/Droid-ify) which already has the repositories of [Guardian Project](https://guardianproject.info/), [IzzyOnDroid](https://apt.izzysoft.de/fdroid/) and other applications such as [Mull Browser](https://github.com/divested-mobile/mull-fenix) or [NewPipe](https://newpipe.net/), and search apps from there.

The list does not include FOSS (FLOSS) apps that are present only on Google Play Store, regarding Signal you can download it directly from the website here: <https://signal.org/android/apk/>

Also the apps not included are those that have not been updated for a long time (about 1 year) with some exceptions, useless apps (like Wi-Fi On/OFF, or show my IP address (?)) ...and apps that I don't like :)

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Android-based Operating Systems](#android-based-operating-systems)
- [App Stores](#app-stores)
- [App Repositories](#app-repositories)
- [2FA](#2fa)
- [Alternative Network](#alternative-network)
- [Browser](#browser)
- [Calendar](#calendar)
- [Camera](#camera)
- [Clock](#clock)
- [Cloud](#cloud)
- [Contacts](#contacts)
- [Documents Reader](#documents-reader)
- [Email Client](#email-client)
  - [Email Anonymous Forwarding](#email-anonymous-forwarding)
- [Exif/Metadata Cleaner](#exifmetadata-cleaner)
- [File Manager](#file-manager)
- [File Sharing](#file-sharing)
- [Gallery](#gallery)
- [Instant Messagging](#instant-messagging)
  - [Matrix Client](#matrix-client)
  - [XMPP Client](#xmpp-client)
- [Launcher](#launcher)
- [Lemmy Client](#lemmy-client)
- [Keyboard](#keyboard)
- [Maps](#maps)
- [Media Player](#media-player)
  - [YouTube and Spotify Alternative Client](#youtube-and-spotify-alternative-client)
- [Network Security](#network-security)
  - [Firewall and ADS Blocker](#firewall-and-ads-blocker)
  - [VPN Client](#vpn-client)
  - [Wireguard Client](#wireguard-client)
- [Notes](#notes)
- [Password Manager](#password-manager)
- [Phone SMS](#phone-sms)
- [Reddit Client](#reddit-client)
- [RSS Reader](#rss-reader)
- [Social Network Client](#social-network-client)
  - [Mastodon](#mastodon)
  - [Twitter/X](#twitterx)
  - [Nostr](#nostr)
  - [Other](#other)
- [System Security](#system-security)
- [Thanks](#thanks)
- [Disclaimer](#disclaimer)
- [Donations](#donations)

<br>

## Android-based Operating Systems

- [LineageOS](https://lineageos.org/) - LineageOS is a free and open-source operating system for various devices, based on the Android mobile platform.
- [DivestOS](https://divestos.org/) - A mobile operating system divested from the norm.
- [Calyx OS](https://calyxos.org/) - CalyxOS is an Android mobile operating system that puts privacy and security into the hands of everyday users (Pixel, Fairphone and Motorola devices).
- [GrapheneOS](https://grapheneos.org/) - The private and secure mobile operating system with Android app compatibility (Pixel devices).
- [PureOS](https://www.pureos.net/) - PureOS is a fully audited operating system that respects your privacy and offers a range of free software. applications for your daily usage
- [Ubuntu Touch](https://ubuntu-touch.io/) - Ubuntu Touch is a mobile version of the Ubuntu operating system, being developed by the UBports community.
- [/e/OS](https://e.foundation/e-os/) - /e/OS is a complete, fully “deGoogled”, mobile ecosystem.
- [Plasma Mobile (KDE)](https://plasma-mobile.org/) - Plasma Mobile is a privacy-respecting, open-source and secure phone ecosystem.
- [Replicant](https://www.replicant.us/) - Replicant is a fully free Android distribution running on several devices.
- [postmarketOS](https://postmarketos.org/) - See: [Pinephone](https://www.pine64.org) - postmarketOS is a free software mobile OS that is modeled. after traditional Linux distributions and avoids Android's build system
- [Sailfish OS](https://sailfishos.org/) - Sailfish OS is an open platform with an active open source contribution model and a seamless user. experience - (Sony Xperia and Gemini PDA devices).

## App Stores

- [Droid-ify](droidify.eu.org) - Recommended F-Droid alternative.
- [Neo Store](https://github.com/NeoApplications/Neo-Store) - Droid-ify Fork.
- [F-Droid](https://f-droid.org/) - Some security issues, see: [F-Droid Issues](https://wonderfall.dev/fdroid-issues/).
- [Fossdroid](https://fossdroid.com/) - Free and open source Android apps.
- [Aurora Store](https://auroraoss.com) - Alternative Google Playstore Client.

## App Repositories

- [IzzyOnDroid](https://apt.izzysoft.de/fdroid/index.php) - IzzyOnDroid F-Droid Repository is a source of 1127 apps for F-Droid clients.
- [CalyxOS](https://calyxos.org/docs/guide/apps/) -  App stores, app compatibility, and apps special to CalyxOS.
- [Guardian Project](https://guardianproject.info/apps/) - Guardian Project is a project that creates easy to use secure apps, open-source software libraries, and customized solutions for personal security, anonymity and privacy.
- [DivestOS](https://divestos.org/pages/our_apps) - DivestOS Apps.
- [Fossify](https://github.com/FossifyOrg) - Fossify is all about community-backed, open-source, and ad-free mobile apps. A fork of the @SimpleMobileTools, which is no longer maintained, and we're here to continue the legacy, bringing simple and private tech to everyone.
- [You Apps](https://you-apps.net) - A collection of open source Android apps, developed with privacy in mind and beautiful design.
- [SECUSO](https://github.com/SecUSo) - SECUSO - Security Usability Society.
- [MicroG Project](https://microg.org/) - A free-as-in-freedom re-implementation of Google's proprietary Android user space apps and libraries.

## 2FA

- [Aegis](https://getaegis.app/) - Aegis Authenticator is a free, secure and open source app for Android to manage your 2-step verification tokens for your online services.
- [FreeOTP Plus](https://github.com/helloworld1/FreeOTPPlus) - Enhanced fork of FreeOTP-Android providing a feature-rich 2FA authenticator.
- [Authenticator Pro](https://github.com/jamie-mh/AuthenticatorPro) - Two-Factor Authentication (2FA) client for Android + Wear OS.
- [Etopa](https://github.com/ltheinrich/etopa) - Time-based one-time password authenticator.

## Alternative Network

- [Orbot](https://github.com/guardianproject/orbot) - Orbot is a freely licensed open-source application developed for the Android platform. It acts as a front-end for the Tor binary application.
- [Tor Browser](https://www.torproject.org/download/#android) - Tor Browser is a free and open source software that protects your privacy and security online.
- [I2P](https://geti2p.net/en/download#android) - Free and open source project building an anonymous network.

## Browser

- [Mull](https://github.com/divested-mobile/mull-fenix) - A privacy oriented and deblobbed web browser based on Mozilla technology.
- [Mulch](https://gitlab.com/divested-mobile/mulch) - A security oriented and hardened web browser based on Chromium technology.
- [Cromite](https://github.com/uazo/cromite) - Cromite a Bromite fork with ad blocking and privacy enhancements.
- [Fennec F-Droid](https://f-droid.org/en/packages/org.mozilla.fennec_fdroid/) - Firefox for Android is a web browser developed by Mozilla for Android smartphones and tablet computers.
- [Privacy Browser](https://www.stoutner.com/privacy-browser-android/) - Privacy Browser Android is an open source Android web browser focused on user privacy.
- [FOSS Browser](https://codeberg.org/Gaukler_Faun/FOSS_Browser) - A simple Android webbrowser based on webview.
- [monocles browser](https://codeberg.org/Arne/monocles_browser) - A open source privacy respecting android browser. Based on the privacy browser by Soren Stoutner.
- [DuckDuckGo Privacy Browser](https://duckduckgo.com/duckduckgo-help-pages/mobile/android/) - DuckDuckGo free web browser that protects your privacy.
- [FREE Browser](https://github.com/woheller69/browser) - A privacy oriented web browser with Greasemonkey style script support.

## Calendar

- [Proton Calendar](https://calendar.proton.me/) - Proton Calendar helps you stay on top of your schedule while protecting your data.
- [Fossify Calendar](https://github.com/FossifyOrg/Calendar) - Your Private & Powerful Schedule Planner.
- [Etar Calendar](https://github.com/Etar-Group/Etar-Calendar) - Android open source calendar.
- [DAVx5](https://www.davx5.com/) - CalDAV / CardDAV / WebDAV for Android.
- [Note Calendar](https://github.com/Sztorm/NoteCalendar) - A simple note calendar app for Android.

## Camera

- [OpenCamera](https://opencamera.org.uk/) - Open Camera is an Open Source Camera app for Android phones and tablets.
- [GrapheneOS Camera](https://github.com/GrapheneOS/Camera) - Modern camera app focused on privacy and security with QR & barcode scanning.
- [Libre Camera](https://github.com/iakmds/librecamera) - A free and open source camera app for Android written in Flutter and Dart.

## Clock

- [Simple alarm clock](https://github.com/yuriykulikov/AlarmClock) - Most popular open source Android Alarm Clock App.
- [Clock You](https://github.com/you-apps/ClockYou) -  Privacy focused clock app built with MD3.

## Cloud

- [Nextcloud](https://github.com/nextcloud/android) - Nextcloud Android app.
- [syncthing-android](https://github.com/syncthing/syncthing-android) -  Wrapper of syncthing for Android.
- [ownCloud](https://owncloud.com/mobile-apps/) - The new and most secure version of ownCloud real-time content collaboration platform.
- [Blazed Cloud](https://blazedcloud.com/) - Your Private, Simple, and Minimal Cloud Storage Solution.
- [Filen Mobile](https://filen.io/apps/mobile) - Access your files on the go, wherever you are.

## Contacts

- [Fossify Contacts](https://github.com/FossifyOrg/Contacts) - Easy and quick contact management with no ads, handles groups and favorites too.
- [Connect You](https://github.com/you-apps/ConnectYou) -  Privacy focused contacts and SMS messenger app built with MD3.
- [OpenContacts](https://gitlab.com/sultanahamer/OpenContacts) - Privacy to your contacts.
- [Koler](https://github.com/Chooloo/koler) - Just a phone app.
- [Simple Contacts Pro](https://github.com/stephanritscher/Simple-Contacts) - A contacts app for managing your contacts without ads.

## Documents Reader

- [MuPDF](https://mupdf.com/) - MuPDF is a lightweight PDF, XPS, and E-book viewer.
- [OpenDocument](https://github.com/opendocument-app/OpenDocument.droid) - It's Android's first OpenOffice Document Reader!
- [GrapheneOS PdfViewer](https://github.com/GrapheneOS/PdfViewer) - Simple Android PDF viewer based on pdf.js and content providers.
- [MJ PDF](https://gitlab.com/mudlej_android/mj_pdf_reader/) - MJ PDF is a fast, minimalist, powerful and totally free PDF viewer made by Mudlej.
- [Sav PDF Viewer](https://www.savpdfviewer.com/) - Android app to read your PDFs.
- [Librera](https://librera.mobi) - Librera Reader (a.k.a. Lirbi Reader, PDF Reader) is a highly customizable and feature-rich application for reading books.

## Email Client

- [K-9 Mail](https://k9mail.app/) - K-9 Mail is an open source email client focused on making it easy to chew through large volumes of email.
- [FairEmail](https://github.com/M66B/FairEmail) - Fully featured, open source, privacy friendly email app for Android.
- [ProtonMail](https://proton.me/mail) - Secure email that protects your privacy.
- [Tutanota](https://tutanota.com/#download) - Encrypted email always by your side.
- [SimpleEmail](https://framagit.org/dystopia-project/simple-email) - Free Software, minimalistic and privacy friendly email app for Android.
- [monocles mail](https://codeberg.org/Arne/monocles_mail) - E-Mail app for Android optimized for monocles e-mail accounts but also for others based on k-9 mail.
- [Xrypto MailA firewall app for Android](https://atalk.sytes.net/xmail) - XryptoMail is an email client designed for android.

### Email Anonymous Forwarding

- [SimpleLogin](https://github.com/simple-login/Simple-Login-Android) - SimpleLogin is an open source solution to protect your email inbox.
- [addy.io (formerly AnonAddy)](https://gitlab.com/Stjin/anonaddy-android) - The Android app for addy.io (formerly AnonAddy) - Anonymous email forwarding.

## Exif/Metadata Cleaner

- [Scrambled Exif](https://gitlab.com/juanitobananas/scrambled-exif) - Remove Exif data from pictures before sharing them.
- [Imagepipe](https://codeberg.org/Starfish/Imagepipe) - Reduces image size and removes exif-tags when sharing images on android devices.
- [ExifEraser](https://github.com/Tommy-Geenexus/exif-eraser) - Permissionless image metadata erasing application for Android.

## File Manager

- [Fossify File Manager](https://github.com/FossifyOrg/File-Manager) - Easy app for managing your files without ads, respecting your privacy & security.
- [Material Files](https://github.com/zhanghai/MaterialFiles) - Material Design file manager for Android.

## File Sharing

- [Snapdrop](https://github.com/fm-sys/snapdrop-android) - Android client for local file sharing via https://snapdrop.net/ and https://pairdrop.net
- [Seafile](https://github.com/haiwen/seadroid) - Android client for Seafile.
- [Wormhole](https://gitlab.com/lukas-heiligenbrunner/wormhole/) - An open source Android App for sending/receiveing files using the magic-wormhole protocol.
- [iyox Wormhole](https://github.com/iyox-studios/iyox-Wormhole) - An Android Client for the magic-wormhole protocol.
- [LocalSend](https://localsend.org/#/) - Share files to nearby devices. Free, open-source, cross-platform.

## Gallery

- [Fossify Gallery](https://github.com/FossifyOrg/Gallery) - Browse your memories without any interruptions with this photo and video gallery.
- [Aves](https://github.com/deckerst/aves) - Aves is a gallery and metadata explorer app, built for Android with Flutter.
- [Gallery](https://github.com/IacobIonut01/Gallery) - Light-weight Media Gallery app for Android made with Jetpack Compose.

## Instant Messagging

- [Signal](https://www.signal.org/) - State-of-the-art end-to-end encryption (powered by the open source Signal Protocol) keeps your conversations secure.
- [Molly](https://github.com/mollyim/mollyim-android) - A fork of Signal for Android
- [Threema](https://threema.ch/en/) - Threema is a secure and private messaging app that encrypts your communication, lets you make voice and video calls, and offers various features.
- [SimpleX Chat](https://simplex.chat/) - Privacy redefined. The first messenger without user IDs.
- [Briar](https://briarproject.org/) - Censorship-resistant peer-to-peer messaging that bypasses centralized servers. Connect via Bluetooth, Wi-Fi or Tor, with privacy built-in.
- [Jami](https://jami.net/download-jami-android/) - Jami is a free/libre, end-to-end encrypted, and private communication software.
- [Forkgram](https://github.com/forkgram/TelegramAndroid) - Fork of Telegram Desktop messaging app.
- [Berty](https://berty.tech/) - Berty messenger is a privacy-first messaging application built on top of the protocol Wesh Network.
- [Tinelix IRC](https://github.com/tinelix/irc-client-for-android) - Tinelix IRC Client for Android.
- [Goguma](https://sr.ht/~emersion/goguma/) - An IRC client for mobile devices.
- [Meshenger](https://github.com/meshenger-app/meshenger-android) - P2P Voice/Video phone App for local networks.
- [Rocket.chat](https://www.rocket.chat/) - Secure and compliant collaboration platform.
Own your data, customize anything, integrate everything.

### Matrix Client

- [Element](https://element.io/get-started#downloads) - A glossy Matrix collaboration client for Android.
- [SchildiChat](https://schildi.chat/android/) - SchildiChat for Android is a Matrix Client based on Element Android.
- [FluffyChat](https://fluffychat.im/) - FluffyChat is an open, nonprofit and cute matrix messenger app for Ubuntu Touch, Android and iOS.

### XMPP Client

- [Conversations](https://conversations.im/) - Conversations is a Jabber/XMPP client for Android 5.0+ smartphones that has been optimized to provide a unique mobile experience.
- [monocles chat](https://codeberg.org/Arne/monocles_chat) - The monocles chat. A more modern and secure chat client based on blabber.im and Conversations for Android but with a lot of changes.
- [Moxxy](https://codeberg.org/moxxy/moxxyv2) - An experiment in building a better XMPP client. This time using Flutter.
- [aTalk](https://cmeng-git.github.io/atalk/) An encrypted instant messaging with video call and GPS features for android (XMPP/Jabber).

## Launcher

- [KISS Launcher](https://kisslauncher.com/) - Blazingly fast Launcher for Android requiring nearly no memory to run.
- [TinyBit Launcher](https://github.com/TBog/TBLauncher) - Based on [KISS Launcher](https://kisslauncher.com/)
- [Hex Launcher](https://github.com/MrMannWood/launcher) - Hex Launcher is a minimalist, performant, private, and open-source home screen replacement.
- [Simple Launcher](https://github.com/SimpleMobileTools/Simple-Launcher) -  A practical and customizable launcher for launching your favorite apps easily.
- [Discreet Launcher](https://github.com/falzonv/discreet-launcher) - Enjoy a clean home screen while accessing everything in an instant.
- [Pie Launcher](https://github.com/markusfisch/PieLauncher) - Android home screen launcher that uses a dynamic pie menu instead of tables of icons.
- [Unlauncher](https://jkuester.github.io/unlauncher/) - A clean Android launcher experience.
- [Olauncher](https://github.com/olauncher/olauncher) - A modified version of the old Minecraft Launcher supporting Microsoft authentication and more.
- [monocles launcher](https://codeberg.org/monocles/monocles_launcher) - The monocles launcher, a private and fast android launcher.
- [Kvaesitso](https://kvaesitso.mm20.de/) - A search-focused, free and open source launcher for Android.
- [Lunar Launcher](https://github.com/iamrasel/lunar-launcher) - Feature rich android home with minimal look.
- [Neo Launcher](https://github.com/NeoApplications/Neo-Launcher) - Free and Open Source Launcher.

## Lemmy Client

- [Thunder for Lemmy](https://github.com/thunder-app/thunder) - An open-source cross-platform Lemmy client for iOS and Android built with Flutter.
- [Eternity](https://codeberg.org/Bazsalanszky/Eternity) - A Lemmy client for Android written in Java. It's a fork of the Infinity for Reddit project, currenty in early development.
- [Combustible](https://github.com/TheBrokenRail/Combustible) - An Open-Source Lemmy Client For Android.
- [RaccoonForLemmy](https://github.com/diegoberaldin/RaccoonForLemmy) - A Kotlin Multiplatform client for Lemmy.

## Keyboard

- [Simple Keyboard](https://github.com/rkkr/simple-keyboard) - This keyboard is created for those who only need a keyboard and nothing more.
- [OpenBoard](https://github.com/openboard-team/openboard) - 100% FOSS keyboard, based on AOSP.

## Maps

- [OsmAnd](https://osmand.net/) - Offline Maps and Navigation.
- [Organic Maps](https://organicmaps.app/) - Organic Maps is a free Android & iOS offline maps app for travelers, tourists, hikers, drivers and cyclists based on OpenStreetMap data created by the community.
- [GMaps WV](https://divestos.org/index.php?page=our_apps#gmapswv) - Unofficial Google Maps WebView Wrapper.
- [PocketMaps](https://github.com/junjunguo/PocketMaps) - Free offline maps with routing functions and more.

## Media Player

- [Apollo](https://github.com/nuclearfog/Apollo-Music) - Apollo-Music is a fork from CyanogenMod's Apollo music app supporting Android 4.1+.
- [VLC](https://www.videolan.org/vlc/download-android.html) - VLC for Android is a full port of VLC media player to the Android™ platform.
- [VinylMusicPlayer](https://github.com/VinylMusicPlayer/VinylMusicPlayer) - A material designed music player for Android.
- [Fossify Music Player](https://github.com/FossifyOrg/Music-Player) - A clean music player with a customizable widget, stylish interface and no ads.
- [mpv-android](https://github.com/mpv-android/mpv-android) - mpv-android is a video player for Android based on libmpv.
- [Retro Music Player](https://retromusic.app/) - The best Material design offline music player for Android.
- [Metro](https://github.com/MuntashirAkon/Metro) - Material Design music player for Android music lovers.
- [SicMu Player](https://gitlab.com/souch/SMP) - SicMu Player for android.
- [Harmonoid](https://harmonoid.com/) - Plays & manages your music library. Looks beautiful & juicy.
- [BlackHole](https://github.com/Sangwan5688/BlackHole) - A Music Player App made with Flutter.
- [Odyssey](https://github.com/gateship-one/odyssey) - Odyssey music player.
- [Auxio](https://github.com/OxygenCobalt/Auxio) - A simple, rational music player for android.
- [Nova](https://github.com/nova-video-player/aos-AVP) - NOVA: opeN sOurce Video plAyer.

### YouTube and Spotify Alternative Client

- [NewPipe](https://newpipe.net/) - The lightweight YouTube experience for Android.
- [LibreTube](https://libretube.dev/) - An alternative frontend for YouTube, for Android.
- [SkyTube](https://github.com/SkyTubeTeam/SkyTube) - A copylefted libre / open source YouTube player for Android, without ads.
- [PipePipe](https://github.com/InfinityLoop1308/PipePipe) - Alternative Android streaming front-end of BiliBili, NicoNico, YouTube and more.
- [YTDLnis](https://ytdlnis.com/) - YTDLnis is a free and open source video/audio downloader app that uses yt-dlp, a program that can download videos and audio from over 1000 websites.
- [InnerTune](https://github.com/z-huang/InnerTune) - A Material 3 YouTube Music client for Android.
- [Clipious](https://github.com/lamarios/clipious) - Invidious client for android.
- [SongTube](https://github.com/SongTube/SongTube-App) - Simple & Beautiful App (Tool) made in Flutter to Download Media from YouTube.
- [Spotube](https://github.com/KRTirtho/spotube#mobile) - Open source Spotify client that doesn't require Premium nor uses Electron! Available for both desktop & mobile.
- [Musify](https://github.com/gokadzev/Musify) -  Unlock the full potential of music: Stream effortlessly with one app.

## Network Security

### Firewall and ADS Blocker

- [AfWall+](https://github.com/ukanth/afwall) - AFWall+ (Android Firewall +) - iptables based firewall for Android.
- [NetGuard](https://www.netguard.me/) - A firewall app for Android.
- [Blokada](https://blokada.org/) - Blokada is the popular ad blocker and privacy app for Android and iOS.
- [AdAway](https://adaway.org/) - AdAway is an open source ad blocker for Android using the hosts file.
- [InviZible Pro](https://invizible.net/en/) - Android application for on-line privacy and security.
- [RethinkDNS](https://www.rethinkdns.com/) - Block malware, spyware, ads, and trackers across all apps with Rethink DNS.

### VPN Client

- [OpenVPN for Android](https://ics-openvpn.blinkt.de/) - OpenVPN for Android
- [Mullvad VPN](https://mullvad.net/en/download/android/) - Mullvad VPN for Android.
- [ProtonVPN](https://protonvpn.com/download-android) - Trusted and easy-to-use VPN app for Android.
- [IVPN](https://www.ivpn.net/apps-android/) - IVPN for Android.
- [CalyxVPN](https://f-droid.org/en/packages/org.calyxinstitute.vpn/) - Free VPN Service offered by The Calyx Institute.
- [RiseupVPN](https://riseup.net/en/vpn/android) - RiseupVPN for Android.
- [Bitmask](https://f-droid.org/en/packages/se.leap.bitmaskclient/) - Encrypted communication for mere mortals(superheroes welcome, too).

### Wireguard Client

- [WireGuard](https://github.com/WireGuard/wireguard-android) - This is an Android GUI for WireGuard.
- [WG Tunnel](https://github.com/zaneschepke/wgtunnel) - This is an alternative Android Application for WireGuard with added features.
- [UpVPN](https://upvpn.app/) - Modern VPN for all of your devices. With full control of your data for privacy. Based on WireGuard.
- [Tailscale](https://tailscale.com/download/android) - Deploy a zero-config, no-fuss VPN. Deploy a WireGuard®-based VPN that eliminates single points of failure.

## Notes

- [Markor](https://gsantner.net/project/markor.html) - Text editor - Notes & ToDo (for Android).
- [Joplin](https://joplinapp.org/) - Joplin is an open source note-taking app.
- [Standard Notes](https://standardnotes.com/) - Standard Notes is a free, secure note-taking app with powerful end-to-end encryption.
- [Notally](https://github.com/OmGodse/Notally) - A beautiful notes app.
- [Notepad](https://github.com/farmerbb/Notepad) - https://github.com/farmerbb/Notepad.
- [Notes](https://github.com/billthefarmer/notes) - Android notebook.
- [SilentNotes](https://www.martinstoeckli.ch/silentnotes/) - SilentNotes is a note taking app which respects your privacy.
- [Tasks](https://github.com/tasks/tasks) - Open-source To-Do Lists & Reminders.
- [Notesnook](https://notesnook.com/) - Open source. End-to-end encrypted. Private.
- [Omni Notes](https://omninotes.app/) - Your free and powerful note-taking companion.
- [Noto](https://github.com/alialbaali/Noto) - Minimal Note-Taking App.

## Password Manager

- [Bitwarden](https://bitwarden.com/download/) - The password manager trusted by millions.
- [KeepassDX](https://www.keepassdx.com/) - Open source Password Manager for Android.
- [Keypass](https://github.com/yogeshpaliyal/KeyPass) - Open-source & offline password manager. Store, manage, take control securely.
- [LibrePass](https://github.com/LibrePass/LibrePass-Android) -  LibrePass Android Application.
- [Passy](https://github.com/GlitterWare/Passy) - Offline password manager with cross-platform synchronization.

## Phone SMS

- [Fossify Phone](https://github.com/FossifyOrg/Phone) - A handy phone call manager with phonebook, number blocking and multi-SIM support.
- [Fossify Messages](https://github.com/FossifyOrg/Messages) - An easy and quick way of managing SMS and MMS messages without ads.
- [Linphone](https://www.linphone.org/) - Linphone is an open source app offering free audio/video calls and text messaging.

## Reddit Client

- [RedReader](https://github.com/QuantumBadger/RedReader) - An unofficial open source Android app for Reddit.
- [Stealth](https://gitlab.com/cosmosapps/stealth) - Stealth is an account-free, privacy-oriented, and feature-rich Reddit client
- [Geddit](https://kaangiray26.github.io/geddit-app/) - An open-source, Reddit client for Android without using their API.
- [Infinity](https://github.com/Docile-Alligator/Infinity-For-Reddit) -  A Reddit client for Android.

## RSS Reader

- [Feeder](https://github.com/spacecowboy/Feeder) -  Android RSS reader app.
- [Nunti](https://gitlab.com/ondrejfoltyn/nunti) - Finally a smart RSS reader which doesn't suck ass or your data.
- [Geekttrss](https://github.com/fbarthelery/geekttrss) - Geekttrss is an Tiny Tiny Rss reader application with transparent offline mode for the Android platform.
- [Twine - RSS Reader](https://github.com/msasikanth/twine) -  Twine: A multiplatform RSS reader built using Kotlin and Compose.

## Social Network Client

### Mastodon

- [Mastodon](https://apt.izzysoft.de/fdroid/index/apk/org.joinmastodon.android) - Decentralized social network.
- [Megalodon](https://sk22.github.io/megalodon/) - A fork of the Mastodon Android app adding important features that are missing in the official app.
- [Moshidon](https://lucasggamerm.github.io/moshidon/) - A fork of megalodon which is a fork of official Mastodon Android app adding important features that are missing in the official app.
- [SubwayTooter](https://github.com/tateisu/SubwayTooter) -  Mastodon client app for Android.
- [Shitter](https://github.com/nuclearfog/Shitter) - Lightweight Android app for Mastodon.
- [Mastify](https://github.com/whitescent/Mastify) - A Mastodon client built with Jetpack Compose [WIP].

### Twitter/X

- [Nitter for Android](https://f-droid.org/packages/com.plexer0.nitter/) -  Android client for the popular Twitter frontend, Nitter.
- [Fritter](https://fritter.cc/) - A privacy-friendly Twitter frontend for mobile devices.
- [Squawker](https://github.com/j-fbriere/squawker) - An open-source privacy oriented Twitter/X client.

### Nostr

- [Nostros](https://nostros.net/) - nostr client for Android.
- [Nozzle](https://github.com/dluvian/Nozzle) - A lightweight nostr client for Android.
- [Primal](https://github.com/PrimalHQ/primal-android-app) -  Primal's Android app for Nostr.

### Other

- [Fedilab](https://fedilab.app/) - Fedilab is a multifunctional Android client to access the distributed Fediverse.
- [PixelDroid](https://pixeldroid.org/) - Pixelfed Android client

## System Security

- [Cryptomator](https://cryptomator.org/downloads/) - Multi-platform transparent client-side encryption of your files in the cloud
- [Shelter](https://github.com/PeterCxy/Shelter) - Provide an isolated space that you can install or clone apps into
- [Insular](https://secure-system.gitlab.io/Insular/) - Sandbox environment to clone selected apps and isolate them from accessing your personal data outside the sandbox
- [FindMyDevice](https://gitlab.com/Nulide/findmydevice)
- [QR Scanner](https://github.com/SecUSo/privacy-friendly-qr-scanner)
- [Exodus](https://github.com/Exodus-Privacy/exodus-android-app) -  Let you know what trackers are embedded in apps installed on your smartphone
- [TrackerControl](https://trackercontrol.org/) - Monitor and control hidden data collection in mobile apps about user behaviour (tracking)
- [Photok](https://github.com/leonlatsch/Photok) - Encrypted Photo Safe for Android
- [DroidFS](https://forge.chapril.org/hardcoresushi/DroidFS) - Encrypted overlay filesystems implementation for Android

## Weather

- [OSS Weather](https://github.com/Akylas/oss-weather) - An OSS weather app for iOS/Android.
- [Breezy Weather](https://github.com/breezy-weather/breezy-weather) - A Material Design Weather Application.
- [Clima](https://codeberg.org/Lacerte/clima) - Beautiful, minimal, and fast weather app.
- [QuickWeather](https://github.com/TylerWilliamson/QuickWeather) - Weather at a glance! Current and forecast weather for anywhere in the world!
- [omWeather](https://github.com/woheller69/omweather) - Weather and rain radar for any location - worldwide,

---

### Thanks

**Special thanks to all the people who show me the applications to be included and who help me to improve the list!**

### Disclaimer

This list is only intended to recommend to users Free Open Source (or Open Source) Applications that respect privacy and requirements that I believe would be good for security and privacy on a personal device.
Before installing anything on your smartphone please check the sources well and be careful.

<br>

### Donations

Please donate a litte to support my projects:

**Bitcoin**

```
19vqscjZcpa22qScPoQEuHJyyiyKokZ6C3
```

**Monero**

```
42HrxGUKPzNNJKFguPfFhXQajwNDnhLbogy6EWexWw9Sh5pTumVk7dkcD2PB4MuFgD1m8rnaR3pr1g852BWUTpXaTo9rQyr
```
