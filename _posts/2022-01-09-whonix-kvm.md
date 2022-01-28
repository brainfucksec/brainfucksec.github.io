---
layout: post
title: "Whonix - Install on KVM"
date: 2022-01-09
---

<br>

## Table of Contents

* [Install KVM packages](#install-kvm-packages)
* [Download the Whonix Image](#download-the-whonix-kvm-image)
* [Download the Whonix KVM Signing Key](#download-the-whonix-kvm-signing-key)
* [Verify the Whonix KVM Image](#verify-the-whonix-kvm-image)
* [Extract the Whonix KVM Image](#extract-the-whonix-kvm-image)
* [Modify XML configuration](#modify-xml-configuration)
* [Import Whonix VM Templates](#import-whonix-vm-templates)
* [Move Whonix Image Files](#move-whonix-image-files)
* [Start Whonix](#start-whonix)
* [Resources](#resources)

<br>

**NOTE:** This guide is a simple explanation of the steps for installing Whonix OS on KVM and run it with virt-manager, for your safety, always refer to the [Whonix documentation page](https://www.whonix.org/wiki/KVM), there may be updates and/or changes.

You can find the documentation on which I based this guide in the [Resources](#resources) section at the bottom of the page.

---

## Install KVM packages

**Debian**

Update package list:

```term
sudo apt update
```

**Debian (11/bullseye+) on Intel/AMD:**

```term
sudo apt install --no-install-recommends qemu-kvm libvirt-daemon-system libvirt-clients virt-manager gir1.2-spiceclientgtk-3.0 dnsmasq qemu-utils
```

**Debian (11/bullseye+) on PowerPC:**

```term
sudo apt install --no-install-recommends qemu-system-ppc libvirt-daemon-system libvirt-clients virt-manager gir1.2-spiceclientgtk-3.0 dnsmasq qemu-utils
```

**Ubuntu:**

```term
sudo apt install qemu-kvm libvirt-clients libvirt-daemon-system bridge-utils libguestfs-tools genisoimage virtinst libosinfo-bin virt-manager
```

Add your user to KVM groups:

```term
sudo adduser "$(whoami)" kvm
sudo adduser "$(whoami)" libvirt
```

**Arch Linux:**

```term
sudo pacman -S libvirt qemu virt-manager ebtables dnsmasq bridge-utils
```

Add your user to KVM groups:

```term
sudo usermod -aG kvm "$(whoami)"
sudo usermod -aG libvirt "$(whoami)"
```

A reboot is required after the installation of qemu, libvirt packages:

```term
sudo reboot
```

---

## Download the Whonix KVM Image

Download the Whonix libvirt image from here: [Whonix wiki - KVM: Download-Whonix](https://www.whonix.org/wiki/KVM#Download-Whonix)

**NOTE:** Download Whonix images only from the official website and not from other sources! (this is obvious right?)

---

## Download the Whonix KVM Signing Key

1 - Download the "HulaHoop's OpenPGP key", see: [hulahoop.asc](https://www.whonix.org/wiki/KVM/Project_Signing_Key#Download_the_OpenPGP_Key)

2 - Check the key fingerprint without import anything:

```term
gpg --keyid-format long --import --import-options show-only --with-fingerprint hulahoop.asc
```

3 - Verify the output, the key fingerprint must be exactly the same as the following:

```bash
Key fingerprint = 04EF 2F66 6D36 C354 058B  9DD4 50C7 8B6F 9FF2 EC85
```

Original fingerprint: [Whonix wiki - KVM: Download the OpenPGP Key](https://www.whonix.org/wiki/KVM/Project_Signing_Key#Download_the_OpenPGP_Key)

If you see this message:

```term
gpg: key 50C78B6F9FF2EC85: 1 signature not checked due to a missing key
```

Don't worry, this is related to [The OpenPGP Web of Trust](https://www.kicksecure.com/wiki/OpenPGP#The_OpenPGP_Web_of_Trust). More information about this [here](https://www.whonix.org/wiki/KVM/Project_Signing_Key#OpenPGP_Web_of_Trust).

**NOTE:** Do not continue if the fingerprint does not match! This risks using infected or erroneous files! The whole point of verification is to confirm file integrity.

4 - Import the key:

```term
gpg --import hulahoop.asc

gpg: Total number processed: 1
gpg:               imported: 1
```

If the Whonix signing key was already imported in the past, the output should include the key is unchanged:

```term
gpg: Total number processed: 1
gpg:              unchanged: 1
```

Again, don't worry if you see this message:

```term
gpg: no ultimately trusted keys found
```

This message is not relate to the Whonix signing key itself, but instead usually means the user has not created an OpenPGP key yet, which is of no importance when verifying virtual machine images.
More information [here](https://www.whonix.org/wiki/KVM/Project_Signing_Key#Download_the_OpenPGP_Key).

---

## Verify the Whonix KVM Image

1 - Download the (OpenPGP Signature) of the virtual machine image: [Whonix wiki - KVM: Download-Whonix](https://www.whonix.org/wiki/KVM#Download-Whonix)

2 - Save the signature in the same folder as the KVM image:

![alt text](uploads/img/posts/whonix-kvm/1-whonix-signing-key.png)

3 - Open a terminal in this folder and verify the image with `gpg`:

```term
gpg --verify-options show-notations --verify Whonix*.libvirt.xz.asc Whonix*.libvirt.xz
```

4 - Verify the output, if the image is correct, the output will inform that the signature is good:

```term
gpg: Good signature from "HulaHoop"
```

The output might be followed by a warning as follows:

```term
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
```

This GPG warning is related to the level of trust placed in the developers signing key and the OpenPGP Web of Trust (see above).

**NOTE:** Check the GPG signature timestamp. For example, if you previously saw a signature from 2021 and now see a signature from 2020, then there is something wrong.

The first line in the gpg output includes the signature creation timestamp, check this example:

```term
gpg: Signature made Mon 19 Jan 2015 11:45:41 PM CET using RSA key ID 77BB3C48
```

Also check the `file@name` value in the gpg output, this value describe the file name. This helps to confirm that the filename has not been tampered with.

```
gpg: Signature notation: file@name=Whonix-16.0.3.7.libvirt.xz
```

If the image is not correct, you will see in the output that the signature is bad:

```term
gpg: BAD signature from "HulaHoop"
```

**NOTE:** Do not continue if verification fails!

For more information about signature verification see: [Verifying Software Signatures](https://www.kicksecure.com/wiki/Verifying_Software_Signatures)

---

## Extract the Whonix KVM Image

1 - Extract the image with `tar`

```term
tar -xvf Whonix*.libvirt.xz
```

2 - Read and accept the [Whonix ™ binary license agreement](https://www.whonix.org/wiki/Whonix:Copyrights#License):

```term
less WHONIX_BINARY_LICENSE_AGREEMENT
```

To accept the license create the following file:

```term
touch WHONIX_BINARY_LICENSE_AGREEMENT_accepted
```

---

## Modify XML configuration

Before importing the virtual machine you can modify the `XML file` if you want to make your settings:

```term
nano Whonix-Gateway*.xml
```

```term
nano Whonix-Workstation*.xml
```

For example I put the KVM images in my home folder, then I changed the related entry in the XML file:

![alt text](uploads/img/posts/whonix-kvm/2-xml-entry.png)

You can always edit the XML files later, if necessary, see: [Editing and Imported Machine's XML](https://www.whonix.org/wiki/KVM#Editing_an_Imported_Machine.27s_XML_Configuration)

In any case, be careful what you change, editing configuration defaults is neither recommended nor necessary.

---

## Import Whonix VM Templates

1 - Import Network configuration:

```term
sudo virsh net-define Whonix_external*.xml
sudo virsh net-define Whonix_internal*.xml
```

2 - Import Whonix Gateway and Workstation images:

```term
sudo virsh define Whonix-Gateway*.xml
sudo virsh define Whonix-Workstation*.xml
```

---

## Move Whonix Image Files

The XML files are configured to point to the default storage location:

```bash
/var/lib/libvirt/images
```

If you need to change this parameter see: [Modify XML configuration](#modify-xml-configuration).

It is recommended to move the image files instead of copying them:

```term
sudo mv Whonix-Gateway*.qcow2 /var/lib/libvirt/images/Whonix-Gateway.qcow2
sudo mv Whonix-Workstation*.qcow2 /var/lib/libvirt/images/Whonix-Workstation.qcow2
```

If you need to move the images to another folder like one on your home for example:

```term
mv Whonix-Gateway*.qcow2 ~/user/kvm/Whonix-Gateway.qcow2
mv Whonix-Workstation*.qcow2 ~/user/kvm/Whonix-Workstation.qcow2
```

Remember that the path must match the value in the XML file.

---

## Start Whonix

1 - Start KVM and Whonix Networks:

```term
sudo virsh net-start default
sudo virsh net-start Whonix-External
sudo virsh net-start Whonix-Internal
```

2 - Start [virt-manager](https://virt-manager.org/)

From GUI:

```
Start Menu → Applications → System → Virtual Machine Manager

Whonix-Gateway → click open → click the play symbol
```

From terminal:

```term
sudo virsh start Whonix-Gateway
sudo virsh start Whonix-Workstation
```

You can also modify the parameters from virt-manager, for example I have adjusted the value of the available RAM:

![alt text](uploads/img/posts/whonix-kvm/3-virt-manager.png)

---

### Resources:

[Whonix ™ for KVM](https://www.whonix.org/wiki/KVM)

[libvirt - virsh](https://www.libvirt.org/manpages/virsh.html)

Whonix wiki - Security:

[Computer Security Education](https://www.whonix.org/wiki/Computer_Security_Introduction)

[Basic Security Guide](https://www.whonix.org/wiki/Basic_Security_Guide_Introduction)

ArchWiki KVM:

[QEMU](https://wiki.archlinux.org/title/QEMU)

[KVM](https://wiki.archlinux.org/title/KVM)

[libvirt](https://wiki.archlinux.org/title/Libvirt)

### Credits:

[Whonix](https://www.whonix.org/)

[libvirt](https://libvirt.org/)

[virt-manager](https://virt-manager.org/)

Again, many thanks to the Whonix Team and their documentation, and for continuing to develop and maintain this project.
Thanks guys.
