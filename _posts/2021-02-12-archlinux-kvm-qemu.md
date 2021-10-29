---
layout: post
title: "Arch Linux - Install and setup KVM/QEMU"
date: 2021-02-15
---

<br>

### Checking support for KVM

**Hardware support**

Checking hardware support for KVM (named VT-x for Intel and AMD-V for AMD CPUs):

```term
LC_ALL=C lscpu | grep Virtualization
```

Or:

```term
grep -E --color=auto 'vmx|svm|0xc0f' /proc/cpuinfo
```

If nothing is displayed after running either command, then your processor does **not** support hardware virtualization, and you will **not** be able to use KVM.

**Note:** You may need to enable virtualization support in your BIOS. All x86_64 processors manufactured by AMD and Intel in the last 10 years support virtualization. If it looks like your processor does not support virtualization, it's almost certainly turned off in the BIOS.


**Kernel support**

Check if the necessary modules: `kvm` and either `kvm_amd` or `kvm_intel`, are available in the kernel:

```term
zgrep CONFIG_KVM /proc/config.gz
```

You must see the module set either to `y` or `m`.

Then ensure that kernel modules are automatically loaded at boot:

```term
lsmod | grep kvm
```

Output example:

```term
kvm_intel             245760  0
kvmgt                  28672  0
mdev                   20480  2 kvmgt,vfio_mdev
vfio                   32768  3 kvmgt,vfio_mdev,vfio_iommu_type1
kvm                   737280  2 kvmgt,kvm_intel
irqbypass              16384  1 kvm
```

If the command returns nothing, the module needs to be loaded manually, see: [Kernel module handling](https://wiki.archlinux.org/index.php/Kernel_module#Manual_module_handling)

**Note:** If modprobing `kvm_intel` or `kvm_amd` fails but modprobing `kvm succeeds`, and `lscpu` claims that hardware acceleration is supported, check the BIOS settings. Some vendors, especially laptop vendors, disable these processor extensions by default. To determine whether there is no hardware support or whether the extensions are disabled in BIOS, the output from `dmesg` after having failed to modprobe will tell.

<br>

### Para-virtualization with Virtio

**Kernel Support**

Check if the VIRTIO modules are available in the kernel inside the virtual machine:

```term
zgrep VIRTIO /proc/config.gz
```

Then, check if kernel modules are automatically loaded at boot:

```term
lsmod | grep virtio
```

Also here, if the above commands return nothing, you need to load the kernel modules manually.

<br>

### Install qemu, libvirt, virt-manager and other packages needed

```term
sudo pacman -S libvirt qemu virt-manager ebtables dnsmasq bridge-utils
```

For complete information about packages and other utilities and settings see:

[QEMU](https://wiki.archlinux.org/index.php/QEMU)

[libvirt](https://wiki.archlinux.org/index.php/Libvirt)

[libvirt clients](https://wiki.archlinux.org/index.php/Libvirt#Client)

<br>

### Set user Group

Add user to `libvirt` Group:

```term
sudo usermod -aG libvirt <username>
```
<br>

### Systemctl Service libvirtd

Start the `libvirtd.service` service:

```term
sudo systemctl start libvirtd.service
```

Enable `libvirt.service` service at boot:

```term
sudo systemctl enable libvirtd.service
```

Start `virt-manager`:

```term
virt-manager
```
See: [Virtual Machine Manager](https://virt-manager.org/)

---

by Brainf+ck

Source: [KVM - ArchWiki](https://wiki.archlinux.org/index.php/KVM)
