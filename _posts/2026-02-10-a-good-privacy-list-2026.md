---
layout: post
title: "A Good Privacy List"
date: 2026-02-10
---

<br>

## Table of Contents

* [Introduction](#introduction)
* [Requirements](#requirements)
* [Android App Stores](#android-app-stores)
* [Artificial Intelligence](#artificial-intelligence)
  * [Chatbots](chatbots)
  * [LLMs](#llms)
* [Calendar Apps](#calendar-apps)
* [Cloud Storage](#cloud-storage)
* [DNS Servers](#dns-servers)
* [Email Providers](#email-providers)
* [Email Anonymous Forwarding](#email-anonymous-forwarding)
* [Encryption](#encryption)
  * [Disk Encryption](#disk-encryption)
  * [File Encryption](#file-encryption)
* [File Sharing](#file-sharing)
* [Git Hosting](#git-hosting)
* [Graphics Editor](#graphics-editor)
* [Instant Messaging](#instant-messaging)
  * [Centralized](#centralized)
  * [Matrix Clients](#matrix-clients)
  * [XMPP Clients](#xmpp-clients)
  * [P2P](#p2p)
  * [Other Decentralized Implementations](#other-decentralized-implementations)
* [Maps](#maps)
  * [Mobile](#mobile)
* [Operating Systems](#operating-systems)
  * [GNU/Linux Operating Systems](#gnulinux-operating-systems)
  * [Security-Focused Operating Systems](#security-focused-operating-systems)
  * [Android-based](#android-based)
* [Password Managers](#password-managers)
* [Privacy Frontends](#privacy-frontends)
  * [Reddit](#reddit)
  * [Reddit Mobile Clients](#reddit-mobile-clients)
  * [Reddit Alternative Communities](#reddit-alternative-communities)
  * [Twitter](#twitter)
  * [Wikipedia](#wikipedia)
  * [YouTube](#youtube)
  * [YouTube Desktop Clients](#youtube-desktop-clients)
  * [YouTube Mobile Clients](#youtube-mobile-clients)
  * [Youtube Alternatives Platforms](#youtube-alternatives-platforms)
* [Search Engines / Metasearch Engines](#search-engines--metasearch-engines)
* [Social Networks](#social-networks)
* [Torrent Clients](#torrent-clients)
* [VPNs](#vpns)
* [Web Browsers](#web-browsers)
  * [Desktop](#desktop)
  * [Android](#android)
* [Other Privacy and Security Resources](#other-privacy-and-security-resources)
  * [Notes](#notes)
  * [Donations](#donations)

<br>

## Introduction

This is my list of Privacy Alternatives of not so good mainstream products who use your data to make money and collaborate with governments for mass surveillance.
The list is compiled in a simple way, privacy defence requires continuous research, so before using the apps on this list **do your own research**, and if you find something wrong, please [contact me](https://brainfucksec.github.io/contacts) so I can update it.

I do not sponsor or get paid by any of the organizations of the products listed, and there are NO referrer URLs in the list, to verify the links you can check the source code of the page (i.e. _right click -> "View Page Source"_).
When I choose to use a service, it means that I have search information before, and I have my own opinion about it that may not be the same as other people in this sector.
I often read articles where an application is declared not private and insecure without consistent sources which confirm the claims, or where it's declared reliable and instead ..it is ad advertising company or a government agency.
So if you don't see a lot of "well-known" products for privacy on this list, it is because, most likely, it falls into one of these categories.

Security is a process, so you cannot fully trust any application, organization, and the people behind it.
Regarding this topic see:

[Threat Model](https://en.wikipedia.org/wiki/Threat_model)

[Defence in depth](https://en.wikipedia.org/wiki/Defense_in_depth_(computing))

I hope this modest work can help to defende you and fight the censorship and oppression we are experiencing especially in recent years, **knowledge is power**, so search, read, and think with your head!
**In this sector it's very easy to meet organizations and projects that claim to defend privacy but in reality are just mousetraps.**

## Requirements

### Only products and applications that meet the following requirements are included in the list:

* **Security first**: services that are not a security risk (although this is a very long and complex topic), and that are not in the experimental phase (i.e. the software is in the [alpha phase](https://techterms.com/definition/alpha_software)).
Applications that have had external audits take precedence in the list but isn't a fundamental requirement.

* **Open source software and clear references to the application source code**: A closed source program doesn't necessarily mean it's malicious, anyway, I prefer to know that there's code available for everyone to read. There may be some exceptions in the list (as in the Email Providers section).

* **Clear references to the development team and organization (i.e. "About Us" section)**: if I cannot find easily what is the organization behind the project, I prefer to skip to another choice.

* **Privacy Policy clear and easily accessible**: If I have to click for 10 pages before reading a complicated and obscure privacy policy I consider that there is something wrong.

* **Not sharing data with Third Parties**: No other third party companies that buy your data, about that argument, see: [Notes](#notes)

* **The project/application must be updated and actively maintained**: If a program is not actively maintained is not inserted in the list, with exceptions, some applications may be valid even if updated some time ago.

* **The organization does not have a history of crime or controversy**: Shadows on the past such as disputes over data collection, or unethical behavior toward the environment other companies or people.
Again, **do your own research**, it is very difficult sometimes to get clear and reliable information about organizations or people behind a software or a service.


## Android App Stores

* [F-Droid](https://f-droid.org/) - F-Droid is an installable catalogue of FOSS (Free and Open Source Software) applications for the Android platform.
* [Droid-ify](https://droidify.eu.org/) - Minimal F-droid client for design and performance.
* [Neo Store](https://github.com/NeoApplications/Neo-Store) - An F-Droid client with modern UI and an arsenal of extra features.
* [Fossdroid](https://fossdroid.com/) - A web frontend of F-Droid: an alternative software repository comprising only free, open source software for Android.
* [GrapheneOS AppStore](https://github.com/GrapheneOS/AppStore) - GrapheneOS Application repository.
* [Aurora Store](https://auroraoss.com) - An unofficial FOSS client to Google Play with an elegant design and privacy.

## Artificial Intelligence

### Chatbots

* [Ollama](https://github.com/ollama/ollama) - Get up and running with Llama 3.2, Mistral, Gemma 2, and other large language models.
* [LocalAI](https://github.com/mudler/LocalAI) - LocalAI is the free, Open Source OpenAI alternative.
* [Continue](https://github.com/continuedev/continue) - Open-source AI code assistant for VS Code and JetBrains.
* [Jan](https://github.com/janhq/jan) - Local AI Assistant.
* [Duck.ai](https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1) - Duck.ai is a feature that allows you to have private conversations with 3rd-party AI chat models, anonymized by DuckDuckGo.

### LLMs

* [llama.cpp](https://github.com/ggerganov/llama.cpp) - Inference of Facebook's LLaMA model in pure C/C++ so it can run locally on a CPU.
* [KoboldCpp](https://github.com/LostRuins/koboldcpp) - KoboldCpp is an easy-to-use AI text-generation software for GGML and GGUF models.

## Calendar Apps

* [Nextcloud Calendar](https://apps.nextcloud.com/apps/calendar) - The Calendar app is a user interface for Nextcloud's CalDAV server.
* [EteSync](https://www.etesync.com/) - Secure, end-to-end encrypted, and privacy respecting sync for your contacts, calendars, tasks and notes.
* [Proton Calendar](https://proton.me/calendar) - Proton Calendar was built by the team behind Proton Mail, the world’s largest encrypted email service.
* [Tuta Calendar](https://tuta.com/calendar) - Zero-Knowledge Calendar: Secure, Private & Intuitive.
* [Peergos](https://peergos.org/posts/calendar) - Encrypted shareable calendar.

## Cloud Storage

* [Proton Drive](https://proton.me/drive) - Free, encrypted, and secure cloud storage.
* [Nextcloud](https://nextcloud.com/) - The most popular open source content collaboration platform for tens of millions of users at thousands of organizations across the globe.
* [Filen](https://filen.io/) - Zero knowledge end-to-end encrypted cloud storage, redefined.
* [Seafile](https://www.seafile.com/en/home/) - Seafile is an open source file sync and share platform, focusing on reliability and performance.
* [PrivateStorage](https://private.storage) - End-to-end encrypted data storage in the cloud.

## DNS Servers

* [Mullvad DNS](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls) - Our encrypted public DNS service uses DNS over HTTPS (DoH) and DNS over TLS (DoT).
* [LibreDNS](https://libredns.gr/) - This is a DNS service run by LibreOps.
* [NextDNS](https://nextdns.io/) - The new firewall for the modern Internet.
* [OpenNIC](https://www.opennic.org/) - OpenNIC (also referred to as the OpenNIC Project) is a user owned and controlled top-level Network Information Center.
* [UncensoredDNS](https://blog.uncensoreddns.org/) - UncensoredDNS is the name of a DNS service which consists of two uncensored DNS servers.

## Email Providers

* [Proton Mail](https://proton.me/mail) - Secure email that protects your privacy
* [Tuta](https://tuta.com/) - Secure Email: Private, Green & Ad-free.
* [mailbox.org](https://mailbox.org/en/) - mailbox.org is the e-mail provider that puts data protection, freedom from advertising and independence first.
* [Forward Email](https://forwardemail.net/en) - We're the only 100% open-source provider. (we're transparent and focused on privacy and security).
* [Disroot Email](htps://disroot.org/en/services/email) - Disroot provides secure email accounts for your desktop or mobile email client, or via our webmail.
* [Posteo](https://posteo.de/en) - Posteo is an independent email provider based in Berlin. We offer secure and sustainable email accounts with an address book, calendar and notes.

## Email Anonymous Forwarding

* [SimpleLogin](https://simplelogin.io/) - Receive and send emails anonymously.
* [Addy](https://addy.io/) - Protect your real email address using email aliases.

## Encryption

### Disk Encryption

* [VeraCrypt](https://veracrypt.fr/en/Home.html) - VeraCrypt is a free open source disk encryption software for Windows, Mac OSX and Linux.
* [LUKS](https://gitlab.com/cryptsetup/cryptsetup/-/wikis/home) - LUKS is the standard for Linux disk encryption.
* [Tomb](https://dyne.org/tomb/) - Tomb is a minimalistic command line tool based on Linux dm-crypt and LUKS, trusted by hackers since 2007.
* [DiskCryptor](https://diskcryptor.org/) - DiskCryptor is an open encryption solution that offers encryption of all disk partitions, including the system partition.

### File Encryption

* [GnuPG](https://gnupg.org/) - GnuPG is a complete and free implementation of the OpenPGP standard.
* [Cryptomator](https://cryptomator.org/) - Encrypt your cloud, protect your privacy.
* [age](https://github.com/FiloSottile/age) - A simple, modern and secure encryption tool (and Go library).
* [Kryptor](https://www.kryptor.co.uk/) - Kryptor is a simple, modern, and secure file encryption and signing tool for Windows, Linux, and macOS.

## File Sharing

* [SecureDrop](https://securedrop.org/) - Share and accept documents securely.
* [Anoxinon.de](https://share.anoxinon.de/) - Anoxinon e.V. - for a shared Internet.
* [Disroot file uploader](https://upload.disroot.org/) - Lufi - Disroot file uploader.
* [Cryptpad](https://cryptpad.fr/) - Flagship instance of CryptPad, the end-to-end encrypted and open-source collaboration suite.

### One Computer to Another

* [croc](https://schollz.com/docs/software/croc/) - croc is a tool for transferring files and folders between computers.
* [Magic Wormhole](https://magic-wormhole.readthedocs.io/en/latest/) - Get things from one computer to another, safely.
* [Destiny](https://leastauthority.com/community-matters/destiny/) - Destiny is an open source secure file transfer application that does not reveal identities.
* [OnionShare](https://onionshare.org/) - OnionShare is an open-source tool that lets you securely and anonymously share files, host websites, and chat with friends using the Tor network.

## Git Hosting

* [Codeberg](https://codeberg.org/) - Codeberg is a non-profit, community-led effort that provides Git hosting and other services for free and open source projects.
* [GitLab](https://about.gitlab.com/) - GitLab a DevOps software package that can develop, secure, and operate software.
* [Gitea](https://gitea.io/en-us/) - Private, Fast, Reliable DevOps Platform.
* [Gogs](https://gogs.io/) - A painless self-hosted Git service.
* [Sourcehut](https://sourcehut.org/) - This suite of open source tools is the software development platform you've been waiting for.

## Graphics Editors

* [GIMP](https://www.gimp.org/) - GNU Image Manipulation Program
* [Krita](https://invent.kde.org/graphics/krita) - Krita is a free and open source digital painting application.
* [Inkscape](https://inkscape.org/) - Inkscape is a powerful, free design tool.

## Instant Messaging

### Centralized

* [Signal](https://www.signal.org/) - State-of-the-art end-to-end encryption (powered by the open source Signal Protocol) keeps your conversations secure.
* [Molly](https://github.com/mollyim/mollyim-android) - Enhanced and security-focused fork of Signal.
* [Threema](https://threema.ch/en/) - Secure Communication Swiss Made.
* [Session](https://getsession.org/) - Session is an end-to-end encrypted messenger that minimises sensitive metadata.

### Matrix Clients

* [Element](https://element.io/) - A sovereign and secure communications platform. Built by the creators of Matrix.
* [FluffyChat](https://fluffy.chat/en/) - The cutest messenger in matrix.
* [SchildiChat](https://schildi.chat/) - SchildiChat is a feature-rich messenger for Matrix based on Element with some extras and tweaks.

### XMPP Clients - Desktop

* [Gajim](https://gajim.org/) - A fully-featured XMPP client.
* [Dino](https://dino.im/) - Modern open-source chat client for the desktop.

### XMPP Clients - Mobile

* [Conversations](https://f-droid.org/en/packages/eu.siacs.conversations/) -  Encrypted, easy-to-use XMPP instant messenger for your mobile device.

### P2P

* [Briar](https://briarproject.org/) - Censorship-resistant peer-to-peer messaging that bypasses centralized servers.
* [Berty](https://berty.tech/) - Unstoppable P2P Communication.
* [Ricochet Refresh](https://www.ricochetrefresh.net/) - Ricochet Refresh is a peer-to-peer messenger app that uses Tor to connect clients.

### Other Decentralized Implementations

* [SimpleX Chat](https://simplex.chat/) - The first messenger
without user IDs.

## Maps

* [OpenStreetMap](https://www.openstreetmap.org/) - OpenStreetMap is a map of the world, created by people like you and free to use under an open license.

### Mobile

* [OsmAnd](https://osmand.net/) - Offline Maps and Navigation.
* [Organic Maps](https://organicmaps.app/) - Organic Maps is a privacy-focused offline maps & GPS app for hiking, cycling, biking, and driving.

## Operating Systems

### GNU/Linux Operating Systems

* [Linux Mint](https://linuxmint.com) - Linux Mint is an operating system designed to work 'out of the box' and comes fully equipped with the apps most people need.
* [Fedora](https://getfedora.org/) - An innovative platform for hardware, clouds, and containers, built with love by you.
* [Debian](https://www.debian.org/) - The universal operating system.
* [openSUSE](https://www.opensuse.org/) - The makers' choice for sysadmins, developers and desktop users.
* [Arch Linux](https://archlinux.org/) - A simple, lightweight distribution.
* [Gentoo Linux](https://www.gentoo.org/) - A highly flexible, source-based Linux distribution.
* [NixOS](https://nixos.org/) - Nix is a tool that takes a unique approach to package management and system configuration.
* [Alpine Linux](https://www.alpinelinux.org/) - Alpine Linux is a security-oriented, lightweight Linux distribution based on musl libc and busybox.

### Security-Focused Operating Systems

* [Qubes OS](https://www.qubes-os.org/) - A reasonably secure operating system.
* [Whonix](https://www.whonix.org/) - Whonix runs like an app inside your operating system - keeping you safe and anonymous.
* [Tails](https://tails.boum.org/) - Is a portable operating system that protects against surveillance and censorship.
* [ParrotOS](https://www.parrotsec.org/) - Parrot Linux, is a full Debian-based operating system, that is geared towards security, privacy and development.
* [Kicksecure](https://www.kicksecure.com/) - Security-Focused Operating System.

### Android-based Operating Systems

* [LineageOS](https://lineageos.org/) - A free and open-source operating system for various devices, based on the Android mobile platform.
* [GrapheneOS](https://grapheneos.org/) - The private and secure mobile operating system with Android app compatibility.
* [Calyx OS](https://calyxos.org/) - CalyxOS is an Android mobile operating system that puts privacy and security into the hands of everyday users.
* [postmarketOS](https://postmarketos.org/) - PostmarketOS (pmOS), is a Alpine Linux based distribution for mobile devices.
* [Ubuntu Touch](https://ubuntu-touch.io/) - A mobile experience made by UBports community.

## Password Managers

### Cloud-based

* [Bitwarden](https://bitwarden.com/) - Fix at-risk passwords and stay safe online with Bitwarden.
* [Proton Pass](https://proton.me/pass) - Free password manager with identity protection.
* [Vaultvarden](https://github.com/dani-garcia/vaultwarden/) - Unofficial Bitwarden compatible server written in Rust, formerly known as bitwarden_rs.

### Local Storage

* [KeePassXC](https://keepassxc.org/) - Cross-platform Password Manager.
* [pass](https://www.passwordstore.org/) (Cli) - The standard unix password manager.
* [gopass](https://www.gopass.pw/) (Cli) - gopass is a simple but powerful password manager for your terminal.

### Mobile

* [KeePassDX](https://www.keepassdx.com/) - Open source Password Manager for Android.

## Privacy Frontends

### Reddit

* [Redlib](https://github.com/redlib-org/redlib) - An alternative private front-end to Reddit, with its origins in Libreddit.

### Reddit Mobile Clients

* [RedReader](https://github.com/QuantumBadger/RedReader) - An unofficial, open source Android client for Reddit.

See also: [Android FOSS Apps List #Reddit Client](https://brainfucksec.github.io/android-foss-apps-list#reddit-client)

### Reddit Alternative Communities

* [Lemmy](https://join-lemmy.org/) - A link aggregator for the fediverse.

### YouTube

* [Invidious](https://invidious.io/) - Invidious is an open source alternative front-end to YouTube.
* [Piped](https://github.com/TeamPiped/Piped) - An alternative privacy-friendly YouTube frontend which is efficient by design.

### YouTube Desktop Clients

* [FreeTube](https://freetubeapp.io/) - The Private YouTube Client.
* [yt-dlp](https://github.com/yt-dlp/yt-dlp) (Cli) - A feature-rich command-line audio/video downloader.

### YouTube Mobile Clients

* [NewPipe](https://newpipe.net/) - The lightweight YouTube experience for Android.
* [LibreTube](https://github.com/Libre-tube/LibreTube) - An alternative frontend for YouTube, for Android.
* [Metrolist](https://github.com/mostafaalagamy/Metrolist) - YouTube Music client for Android.
* [Seal](https://github.com/JunkFood02/Seal) - Video/Audio Downloader for Android, based on yt-dlp.
* [YTDLnis](https://ytdlnis.com/) - YTDLnis is a free and open source video/audio downloader app that uses yt-dlp, a program that can download videos and audio from over 1000 websites.
* [PipePipe](https://github.com/InfinityLoop1308/PipePipe) - A FLOSS Android app to let you browse YouTube, NicoNico and BiliBili freely.
* [InnerTune](https://github.com/z-huang/InnerTune) -  A Material 3 YouTube Music client for Android.
* [SkyTube](https://github.com/SkyTubeTeam/SkyTube) - Copylefted libre / open source YouTube player for Android.
* [clipious](https://github.com/lamarios/clipious) -  Invidious client for android.
* [Tubular](https://github.com/polymorphicshade/Tubular) - A fork of NewPipe that implements SponsorBlock and ReturnYouTubeDislike.

### Youtube Alternatives Platforms

* [PeerTube](https://joinpeertube.org/en/) - PeerTube is a tool for sharing online videos developed by Framasoft, a french non-profit.

## Search Engines / Metasearch Engines

* [DuckDuckGo](https://duckduckgo.com/) - Protection. Privacy. Peace of mind.
* [SearXNG](https://github.com/searxng/searxng) - SearXNG is a metasearch engine. Users are neither tracked nor profiled.
* [Ecosia](https://www.ecosia.org/) - Search. Find. Change the World.

## Social Networks

* [Mastodon](https://joinmastodon.org/) - Social networking that's not for sale.
* [Nostr](https://github.com/nostr-protocol/nostr) - A truly censorship-resistant alternative to Twitter that has a chance of working.
* [Pixelfed](https://pixelfed.org/) - Explore + Share beautiful photos and videos.
* [Pleroma](https://pleroma.social/) - Pleroma is social networking software compatible with other Fediverse software such as Misskey, Pixelfed, Mastodon and many others.
* [Aether](https://getaether.net/) - Peer-to-peer ephemeral pReddit Clientublic communities.

## Torrent Clients

* [qBittorrent](https://www.qbittorrent.org/) - download link The qBittorrent project aims to provide an open-source software alternative to µTorrent.
* [Transmission](https://transmissionbt.com/) -  A Fast, Easy and Free Bittorrent Client
For macOS, Windows and Linux.
* [WebTorrent](https://webtorrent.io/) - The streaming torrent client for Mac, Windows, & Linux.
* [Deluge](https://deluge-torrent.org/) -  Deluge is a lightweight, Free Software, cross-platform BitTorrent client.
* [FrostWire](https://www.frostwire.com/) - Video Downloader, BitTorrent Client and Media Player.
* [BiglyBT](https://www.biglybt.com/) - BiglyBT is a feature filled, open source, ad-free, bittorrent client.

## VPNs

* [Mullvad](https://mullvad.net/en/) - VPN that prioritizes anonymity and security, offer anonymous sign-up process (Country: Sweden).
* [ProtonVPN](https://protonvpn.com/) -  VPN service launched in 2017 and operated by the Swiss company Proton AG, the company behind the email service Proton Mail (Country: Switzerland).
* [IVPN](https://www.ivpn.net/) - Secure, fast VPN service that offers no-logs and antitracking features (Country: Gibraltar).
* [AirVPN](https://airvpn.org/) -VPN provider that offers advanced security and privacy features (Country: Italy).

## Web Browsers

### Desktop

* [Tor Browser](https://www.torproject.org/) - A free and open source software that allows you to browse the web anonymously and securely with the Tor network.
* [LibreWolf](https://librewolf.net/) - Custom and independent version of Firefox, with the primary goals of privacy, security and user freedom.
* [Mullvad Browser](https://mullvad.net/en/browser) - Mullvad Browser is a version of Tor Browser with Tor network integrations removed, aimed at providing Tor Browser's anti-fingerprinting browser technologies to VPN users.
* [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/) - Firefox is a free web browser that blocks ad trackers, respects your privacy and works on any device. (It needs some hardening and tweaking to achieve great privacy).
* [ungoogled-chromium](https://ungoogled-software.github.io/) - Google Chromium, sans integration with Google.

### Android

* [Tor Browser for Android](https://www.torproject.org/download/#android) - Tor browser for Android.
* [DuckDuckGo Browser](https://duckduckgo.com/duckduckgo-help-pages/mobile/android/) - Free web browser for Android, a privacy-protecting alternative to Google Chrome and other browsers.
* [Cromite](https://github.com/uazo/cromite) - Cromite is a Chromium fork based on Bromite with built-in support for ad blocking and an eye for privacy.
* [Fennec F-Droid](https://f-droid.org/en/packages/org.mozilla.fennec_fdroid/) - Fennec F-Droid browser is based on the latest Mozilla Firefox release.

See also: [Android FOSS Apps List #Browser](https://brainfucksec.github.io/android-foss-apps-list-2025#browser)

## Other Privacy Lists

* [awesome-privacy.xyz](https://awesome-privacy.xyz/)
* [gofoss.net](https://gofoss.net/)

### Notes

**Utilization of 3rd party services:** About organizations that use third party software I think a clarification should be made.  Often it's necessary to use third party services in order to make them stable and working, examples are Proton or Signal services that use some Amazon AWS or Google servers for traffic routing. It's not easy to manage thousands or millions of users and it's not easy to manage continuous spam attempts or criminal activities, impossible to do with self-hosted servers with little traffic capacity.

**US based services:** In the post-Snowden era we all know the data collection and surveillance capabilities of the NSA, many are advising not to use services in US jurisdiction, this may be true for unencrypted services, such as email without OpenPGP encryption, IRC servers etc., but if the data is encrypted, then I think we can make an exception. On the other hand, the NSA's surveillance and storage capabilities it extend globally, So try to encrypt as much as possible, if the data is stored in some server in Nevada, China, or outer space ..it will be encrypted data, about this speech see: [Post-quantum_cryptography)](https://en.wikipedia.org/wiki/Post-quantum_cryptography).

However, I generally tend to prefer services that have jurisdiction in countries with good privacy laws (i.e. Switzerland, Estonia, Iceland) or at least that they are not part of the Five Eyes, about this topic see: [The Five, Nine, and Fourteen Eyes agreements (Explained)](https://protonvpn.com/blog/5-eyes-global-surveillance/).

### Donations

If you liked my work, you can support me with a small donation:

**Bitcoin**
```
19vqscjZcpa22qScPoQEuHJyyiyKokZ6C3
```

**Monero**
```
42HrxGUKPzNNJKFguPfFhXQajwNDnhLbogy6EWexWw9Sh5pTumVk7dkcD2PB4MuFgD1m8rnaR3pr1g852BWUTpXaTo9rQyr
```

---
