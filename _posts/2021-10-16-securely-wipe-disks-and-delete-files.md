---
layout: post
title: "Securely Wipe Disks and Delete Files"
date: 2021-10-16
---

<br>

# Table of Contents

* [Introduction](#introduction)
* [Wipe Disk](#wipe-disk)
    * [Wipe All Data Fast With Zeros](#wipe-all-data-fast-with-zeros)
    * [Write Pseudorandom Data](#write-pseudorandom-data)
* [Wipe A Single File](#wipe-a-single-file)
* [Stay Safe](#stay-safe)

<br>

# Introduction

In this guide I will try to show you how to safely wipe disks and delete files, or at least, make data recovery quite hard.
Secure data deletion is a complex matter, there are several factors that come in to play when you have to delete data from a memory, some of them are:

* **The type of storage**: Deleting data securely in [Flash memory](https://en.wikipedia.org/wiki/Flash_memory) such as [Solid-State Drives (SSD)](https://en.wikipedia.org/wiki/Solid-state_drive) or USB Pendrives, micro SD etc. is very difficult, and in some cases almost impossible.  For an explanation of deleting data in flash memories, see: [Write amplification](https://en.wikipedia.org/wiki/Write_amplification), [Reliably Erasing Data From Flash-Based Solid State Drives](https://www.usenix.org/legacy/events/fast11/tech/full_papers/Wei.pdf), [stackexchange.com:questions/wipe-ssd](https://security.stackexchange.com/questions/12503/can-wiped-ssd-data-be-recovered).  [Hard disk drives](https://en.wikipedia.org/wiki/Hard_disk_drive) are different and you can get better results, but even with them remember that **physical destruction remains the only 100% safe method.**

* **Presence of duplicates or fragments and free space**: Erasing single files is less effective, if the partition has been defragmented, resized or moved, or the files have been duplicated on the same device before. See: [Arch Wiki:Wipe a single file](https://wiki.archlinux.org/title/Securely_wipe_disk/Tips_and_tricks#Wipe_a_single_file).
In file systems such as [NTFS](https://en.wikipedia.org/wiki/NTFS) on Windows, files are scattered on the volume, so [cleaning the free space](https://wiki.archlinux.org/title/Securely_wipe_disk/Tips_and_tricks#Wipe_free_space) is recommended.

As the Arch Linux Wiki explains:

_Wiping a disk is done by writing new data over every single bit._

..This is the general concept to follow when deleting data from a volume.  For more information about data that may remain after deletion, see:

[Wikipedia:Data remanence](https://en.wikipedia.org/wiki/Data_remanence)

[ArchWiki:Data remanence](https://wiki.archlinux.org/title/Securely_wipe_disk#Data_remanence)

**Note:** These operations should be performed in an isolated environment such as a Live Operating System or a virtual environment (VirtualBox, VMWare, QEMU, etc...).  The utilities and commands shown in the examples are mostly in the GNU/Linux environment but you can also find some examples for Windows :)

# Wipe Disk

## Wipe All Data Fast With Zeros

The most common case is when the device is to be sold or given to someone else, You may need to protect your data from a simple forensic investigation or [File Recovery](https://en.wikipedia.org/wiki/Data_recovery#File_Recovery) software in general.
To delete everything quickly from a disk, writing zeros (i.e. `0`, [/dev/zero](https://en.wikipedia.org/wiki//dev/zero)) allows maximum performance in terms of speed.

**Zeros**

Overwriting with /dev/zero or simple patterns is considered secure in most situations. With today's HDDs, it is deemed appropriate and fast for disk wiping.
However, a drive that is abnormally fast in writing patterns or zeroing could be doing transparent compression. It is obviously presumable not all blocks get wiped this way. Some [#Flash memory](https://wiki.archlinux.org/title/Securely_wipe_disk#Flash_memory) devices do "feature" that.

Source: [ArchWiki:Data remanence](https://wiki.archlinux.org/title/Securely_wipe_disk#Data_remanence)

A single, full overwrite with zeros or random data does not lead to any recoverable data on a modern high-density storage device, the common view is that repeating the operation after a full overwrite should not be necessary nowadays.

See: [1](https://security.stackexchange.com/questions/26132/is-data-remanence-a-myth/26134#26134), [2](https://www.howtogeek.com/115573/htg-explains-why-you-only-have-to-wipe-a-disk-once-to-erase-it/), [3](https://security.stackexchange.com/questions/89994/why-is-writing-zeros-or-random-data-over-a-hard-drive-used-when-writing-all-on)

However there are different opinions about it.

Now let's look at the different methods for writing zeros (0) on a volume:

## [dd](https://www.gnu.org/software/coreutils/dd)

Writes zero bytes to the entire volume using the [/dev/zero](https://en.wikipedia.org/wiki//dev/zero) stream:

There is no confirmation regarding for this command so **double-check** that the correct drive or partition has been targeted.

```term
dd if=/dev/zero of=/dev/sdX bs=4096 status=progress
```

Where `/dev/sdX` is the name of the partition that you want to erase (e.g. `/dev/sda`), see: [#Securely wipe disk: Select a target](https://wiki.archlinux.org/title/Securely_wipe_disk#Select_a_target), the process is finished when dd reports `No space left on device`:

```term
dd: writing to ‘/dev/sdX’: No space left on device
7959553+0 records in
7959552+0 records out
4075290624 bytes (4.1 GB, 3.8 GiB) copied, 1247.7 s, 3.3 MB/s
```

## [Windows format](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/format)

On Windows You can use the `format` command:

Format the drive with the selected file system and write zeros to every sector of the drive once.

```cmd
format g: /fs:NTFS /p:0
```

Where `g` is the name of the volume `G` and `NTFS` is the selected file system.

## Write Pseudorandom Data

If you want to rewrite the record in addition to the zeros, for example to prepare a drive for **block device encryption** inside the wiped area afterwards, it is recommended to use Random Data generated by a cryptographically strong random number generator referred as a "RNG".

True random data source using `/dev/random` is impractical for wiping large capacities as it will take too long to wait for the entropy generation.  Then `/dev/urandom` can be used as a reasonable source of [Pseudorandom data](https://en.wikipedia.org/wiki/Pseudorandom_number_generator).

For differences between random and pseudorandom data and other information about, please see:

[ArchWiki:Random Number Generation](https://wiki.archlinux.org/title/Random_number_generation)

[Wikipedia:Random number generation](https://en.wikipedia.org/wiki/Random_number_generation)

[Wikipedia:Cryptographically-secure pseudorandom number generator (CSPRNG)](https://en.wikipedia.org/wiki/Cryptographically-secure_pseudorandom_number_generator)

## Redirect output: cat, xz, dd and cp commands

Redirected output, rewrite the partition or a block device by redirecting `stdout` from other utilities (cat, xz, dd):

```term
cat /dev/urandom > /dev/sdXY

...

cat: write error: No space left on device
```

```term
xz -z0 /dev/urandom -c > /dev/sdXY

...

xz: (stdout): Write error: No space left on device
```

```term
dd if=/dev/urandom of=/dev/sdX bs=4096 status=progress

...

dd: writing to ‘/dev/sdX’: No space left on device
7959553+0 records in
7959552+0 records out
4075290624 bytes (4.1 GB, 3.8 GiB) copied, 1247.7 s, 3.3 MB/s
```

also you can use the command `cp` to rewrite the device:

```term
cp /dev/urandom /dev/sdXY

...

cp: error writing ‘/dev/sd"XY"’: No space left on device
cp: failed to extend ‘/dev/sd"XY"’: No space left on device
```

With all the commands listed the procedure ends with an error message of "No space left on device", it means that the program has written all sectors of the volume, so it's all ok :)

In the examples `/dev/sdX` and `/dev/sdXY` are relative to the name of the chosen partitions:

```bash
/dev/sdX = sda

/dev/sdXY = sda1
```

## [shred](https://www.gnu.org/software/coreutils/manual/html_node/shred-invocation.html)

shred is a Unix utility for delete individual files or full devices. By default `shred` uses 3 passes, writing pseudorandom data to the device at each pass.

Run `shred` with default settings and show progress:

```term
shred -v /dev/sdX
```

shred can be used also on a single partition:

```term
shred -v /dev/sdX1
```

Use shred to write only 1 pass, but with entropy from `/dev/urandom`:

```term
shred -v --random-source=/dev/urandom -n1 /dev/sdX
```

## dd advanced example

To speed up wiping a large drive, you can also use this trick :)

Randomize the data using a randomly-seeded AES cipher from OpenSSL and write them with `dd`:

```term
DEVICE="/dev/sdX"
PASS=$(tr -cd '[:alnum:]' < /dev/urandom | head -c128)
openssl enc -aes-256-ctr -pass pass:"$PASS" -nosalt </dev/zero | dd obs=64K ibs=4K of=$DEVICE oflag=direct status=progress
```

The command above creates a 128 byte encryption key seeded from /dev/urandom. AES-256 in CTR mode is used to encrypt /dev/zero's output with the urandom key. Utilizing the cipher instead of a pseudorandom source results in very high write speeds and the result is a device filled with AES ciphertext.

Source: [Securely wipe disk/Tips and tricks#dd - advanced example](https://wiki.archlinux.org/title/Securely_wipe_disk/Tips_and_tricks#dd_-_advanced_example)

## [DBAN](https://dban.org/)

DBAN is software for delete information stored on hard disk drives (HDDs, not SSDs) in PC laptops, desktops, or servers. The program is in .iso format so it must be installed by creating a pendrive USB or CD bootable.
Basically the program performs the operations we have seen above, you can install it on a USB pendrive for example, then select at boot priority the volume with DBAN for start it.

In the main menu we can see the available options with a command prompt to type commands:

![alt text](uploads/img/posts/securely-wipe-disks-and-delete-files/dban-1.png)

Pressing `F3` displays the list of available commands:

![alt text](uploads/img/posts/securely-wipe-disks-and-delete-files/dban-2.png)

Use the command `dod` for wipe the disk with method: [DoD 5220.22-M](https://csrc.nist.gov/publications/detail/sp/800-88/rev-1/final)

![alt text](uploads/img/posts/securely-wipe-disks-and-delete-files/dban-3.png)

Then the program starts wipe the disk, (be careful because there is no confirmation after the commands):

![alt text](uploads/img/posts/securely-wipe-disks-and-delete-files/dban-4.png)

DBAN also offers an interactive mode, which can be accessed by pressing the `Enter` key.
In the interactive mode, press `Space` key for select the volume you want to erase:

![alt text](uploads/img/posts/securely-wipe-disks-and-delete-files/dban-5.png)

Press `M` for select the wipe method:

![alt text](uploads/img/posts/securely-wipe-disks-and-delete-files/dban-6.png)

After selecting the preferred method, press `F10` to start the wipe:

![alt text](uploads/img/posts/securely-wipe-disks-and-delete-files/dban-7.png)

For more information about this program see [the documentation](https://dban.org/help-center/) on the official website.

# Wipe a Single File

As shown above, when deleting a single file you must take into account some limitations, there may be copies, links or metadata of the file scattered on the same or other volumes, the type of file system is another factor that affects deletion, see: [Comparison of file systems#Metadata](https://en.wikipedia.org/wiki/Comparison_of_file_systems#Metadata).

## shred

Use shred to delete a file overwriting 7 times and add a final overwrite with zeros to hide shredding

```term
shred -uvzn 7 myfile.txt
```

```term
-u  deallocate and remove file after overwriting
-v  show progress
-z  add a final overwrite with zeros to hide shredding
-n  overwrite N times instead of the default (3)
```

See: `shred --help` for more information

You can delete a folder recursively using `shred` and `find`:

```term
find mydirectory -type f -exec shred {} \;
```

## [srm (secure rm)](https://sourceforge.net/projects/srm/)

ON Unix and Windows you can use the command line program `srm` for securely delete files and folders.

Remove a file and overwrite with [7 US DoD compliant passes](https://www.destructdata.com/dod-standard):

```term
srm -Dv myfile.txt
```

Remove a folder with 7 US DoD compliant passes:

```term
srm -DRv myfolder/
```

...by default `srm` use the [35-pass Gutmann](https://en.wikipedia.org/wiki/Gutmann_method) method to overwrite files which can be very slow, for a complete list of options see the command help `srm -h`.

# Stay Safe

In short, we've learned that securely wiping disks and deleting files is not a simple matter. So if we need to eliminate data we have to follow certain procedures, as always in computer security, paranoia is a good friend, so here are some tips on how to prevent sensitive files from falling into the hands of third parties:

**Encrypt your disk**

The first countermeasure is to encrypt the volume/disk, this is the first layer of data protection in a device.  Therefore, before thinking about how to delete a file you have to think about how to protect the volume in which it is contained. If you do not have the key to decrypt the volume, the file can be considered lost.
However, if you need to clean a disk, you can encrypt the disk, throw away the key and rewrite it thus making the data inaccessible, or rather "very difficult to recover".

**If you really need to delete data, destroy the device**

As for me I try to use any electronic device until his death, but in this case if we want to be 100% sure of the deletion of the data then we have to destroy the device.
Furthermore, we understand that with Flash memories the procedures for deleting files are more complex and are often ineffective.
So [destroy the device!](https://piped.kavin.rocks/watch?v=sAxbn6DgNjU).

---

## Credits:

[ArchWiki - Securely Wipe Disk](https://wiki.archlinux.org/title/Securely_wipe_disk)

[Wikipedia - Data remanence](https://en.wikipedia.org/wiki/Data_remanence)

[GNU Coreutils](https://www.gnu.org/software/coreutils/)

[Data Removal: Darik's Boot and Nuke - DBAN](https://dban.org/)

[secure rm](https://sourceforge.net/projects/srm/)
