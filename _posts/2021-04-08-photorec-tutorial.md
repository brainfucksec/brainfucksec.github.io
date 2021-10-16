---
layout: post
title: "PhotoRec - Recover deleted files"
date: 2021-04-08
---

<br>

## Introduction

A tool that I prefer to recover deleted files or to analyze a memory in search of evidence is [Photorec](https://www.cgsecurity.org/wiki/PhotoRec) by CGSecurity.

As explained on the program website:

*PhotoRec is file data recovery software designed to recover lost files including video, documents and archives from hard disks, CD-ROMs, and lost pictures (thus the Photo Recovery name) from digital camera memory. PhotoRec ignores the file system and goes after the underlying data, so it will still work even if your media's file system has been severely damaged or reformatted.
PhotoRec is a companion program to [TestDisk](https://www.cgsecurity.org/wiki/TestDisk), an application for recovering lost partitions on a wide variety of file systems and making non-bootable disks bootable again. For lost/deleted partitions or deleted files from a FAT or NTFS file system, try TestDisk first - it's usually faster and TestDisk can retrieved the original file names.*

For more information about the supported file types and how PhotoRec works you can consult the relevant paragraphs on the main page of the website:

<https://www.cgsecurity.org/wiki/PhotoRec>

See: **Known file formats** and **How PhotoRec works**.

There is also an excellent [manual](https://www.cgsecurity.org/testdisk.pdf) about data recovery using TestDisk & PhotoRec and other tools.

PhotoRec can also be used to [recover data from an iPhone](https://www.cgsecurity.org/wiki/Recover_data_from_an_iPhone) :) (Jailbroken).

## Download

The program is available for different platforms, in GNU/Linux distros it can generally be installed through the preferred package manager, for example on Kali Linux I installed the package `testdisk`, while on Windows you can install and run the executable, also TestDisk and PhotoRec can be run as portable executables or from LiveCD.
For more information about program installation and running, consult the related page: [TestDisk Download](https://www.cgsecurity.org/wiki/TestDisk_Download)

## How to

Now that we are familiar with this program, let's see how to use it to recover files, for this demonstration I used a USB flash drive as the target memory. The program offers an interactive shell that is very easy to use, the steps necessary for the procedure are well explained on the website: [PhotoRec Step by Step](https://www.cgsecurity.org/wiki/PhotoRec_Step_By_Step)

**Note:** The following steps are a demonstration of how PhotoRec works and therefore do not belong to a proper forensic analysis procedure.

In this demonstration I will delete the files present and then format the USB flash drive with the FAT32 filesystem, after which I will scan the memory for deleted files.

## Memory content

1 - Exploring the memory with a file manager we can see that inside there are some files of different formats:

![alt text](uploads/img/posts/photorec-tutorial/1-memory-content.png)

2 - I delete the files as we normally do, for example with the command `rm` on Linux:

![alt text](uploads/img/posts/photorec-tutorial/2-delete-files.png)

3 - Now the flash drive is "empty":

![alt text](uploads/img/posts/photorec-tutorial/3-empty-directory.png)

4 - After formatting the flash drive, I check the filesystem:

![alt text](uploads/img/posts/photorec-tutorial/4-filesystem-list.png)

## Analysis and recovery

1 - Start PhotoRec with the `/log` parameter to record the details of the procedure to a log file called `photorec.log`:

`sudo photorec /log`

![alt text](uploads/img/posts/photorec-tutorial/5-start-photorec.png)

2 - Select the disk to analyze, in my case it's `/dev/sda`:

![alt text](uploads/img/posts/photorec-tutorial/6-select-disk.png)

3 - Select the partition, for this device, it's the FAT32 partition labeled with the "P" letter:

![alt text](uploads/img/posts/photorec-tutorial/7-select-partition.png)

4 - Select the correct filesystem for the partition, generally PhotoRec recognizes the filesystem by itself, Unless it is an ext2/ext3/ext4 filesystem, choose `Other`:

![alt text](uploads/img/posts/photorec-tutorial/8-select-filesystem.png)

5 - Select the space where the files will be searched, if the option for unallocated space is selected, deleted files will be recovered:

![alt text](uploads/img/posts/photorec-tutorial/9-select-space.png)

6 - Select where the recovered files will be written, in this case I have created a folder to work in, you can use an external disk for this purpose (the correct method). Moving with the arrows, go to the favorite folder and press `c` to confirm:

![alt text](uploads/img/posts/photorec-tutorial/10-select-recover-folder.png)

7 - The program starts searching for files showing the progress:

![alt text](uploads/img/posts/photorec-tutorial/11-photorec-progress.png)

8 - Recovered files are saved to folders called `recup.dir`:

![alt text](uploads/img/posts/photorec-tutorial/12-recover-terminated.png)

## Working with recovered files

1 - Previously deleted files have been recovered, named with the prefix "f" plus an identifying number, some also have the original name after the number:

![alt text](uploads/img/posts/photorec-tutorial/13-recovered-files.png)

2 - On the program's website there is an excellent guide on how to work with recovered files: [After Using PhotoRec](https://www.cgsecurity.org/wiki/After_Using_PhotoRec)

In this case, I sort the files by extension with the python script shown in the guide:

![alt text](uploads/img/posts/photorec-tutorial/14-python-sort-script.png)

You need to create the folder in which to copy the sorted files and run the script with the "source" and "destination" parameters:

![alt text](uploads/img/posts/photorec-tutorial/15-sorted-files.png)

A more advanced script is available that gives you more options on file sorting: [sort-PhotorecRecoveredFiles](https://github.com/tfrdidi/sort-PhotorecRecoveredFiles)

3 - The script creates a folder for each type of file:

![alt text](uploads/img/posts/photorec-tutorial/16-filetypes.png)

## Some tips

* If you are looking for a specific file you can check the date/time attribute, PhotoRec uses time information (metadata) when available in the file header to set the file modification time:

    ![alt text](uploads/img/posts/photorec-tutorial/17-datetime-sort.png)

* With .JPEG files you can use [exiftool](https://exiftool.org/) to view the image metadata for additional information about the file:

    ![alt text](uploads/img/posts/photorec-tutorial/18-exiftool-example.png)

* Thumbnails of the images found are saved as "t*.jpg"

* If you have chosen to keep corrupted files/file fragments, their filenames will beginning by the letter "b" (broken).

---

by Brainfuck

Credits: [PhotoRec](https://www.cgsecurity.org/wiki/PhotoRec)
