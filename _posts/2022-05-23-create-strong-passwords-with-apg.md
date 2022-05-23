---
layout: post
title: "Create Strong Passwords with apg"
date: 2022-05-23
---

<br>

## Introduction

To generate secure/strong passwords (passphrases) there are several methods, here we see how to generate them with `apg` on GNU/Linux. But first we need some theory on this argument...

From [Wikipedia - Password strenght](https://en.wikipedia.org/wiki/Password_strength):

Password strength is a measure of the effectiveness of a password against guessing or brute-force attacks. The strength of a password is a function of length, complexity, and unpredictability. Using strong passwords lowers overall risk of a security breach, but strong passwords do not replace the need for other effective security controls.

The rate at which an attacker can submit guessed passwords to the system is a key factor in determining system security. It is usual in the computer industry to specify password strength in terms of information entropy, which is measured in bits, see: [Entropic Security](https://en.wikipedia.org/wiki/Entropic_security).

To make a long story short, a password is strong when it consists of as many random characters as possible and when it is as long as possible.

In addition, as the great Arch Wiki explains, a password is not secure when it contains the following elements:

* Personally identifiable information (e.g., your dog's name, date of birth, area code, favorite video game)

* Simple character substitutions on words (e.g., k1araj0hns0n), as modern dictionary attacks can easily work with these.

* Root "words" or common strings followed or preceded by added numbers, symbols, or characters (e.g., DG091101%). In my experience a large number of users use this pattern, for example: `<name><date>` (e.g. johnny1975, or `<date><name>` (e.g. 1975johnny), the first format of the two examples is generally more common.

* Common phrases or short strings of dictionary words (e.g. photocopyhauntbranchexpose) including with character substitution (e.g. Ph0toc0pyh4uN7br@nch3xpse)

* Any of the [most common passwords](https://en.wikipedia.org/wiki/Wikipedia:10,000_most_common_passwords), For example, I've seen many users (not to say 80%) use 1234, 0000, and 1111 (in that order of frequency :)) as their smartphone PIN.

See: [Security - ArchWiki: Passwords](https://wiki.archlinux.org/title/security#Passwords)

I will not explain here what is the best method to memorize and maintain passwords because this requires a separate topic, anyway I prefer to write passwords on paper, and use password managers only for less important passwords or when strictly necessary.
With this I am not saying that password managers are not a good method, but they are strictly dependent on the security of the operating system in which they are located, If the system is compromised by a malware, when you type the master password all the others are considered compromised, as always, security is a process, a chain in which all rings must be checked.
Obviously also the paper method becomes useless if the book in which the passwords are written is not secured.

Regarding this particular topic I recommend [this excellent guide](https://defensivecomputingchecklist.com/#passwoyds).

Now that we have an idea about the security of passwords, let's see how to generate secure ones with `apg` (Automatic Password Generator).

## Install apg

The original website is no longer online but the program can be downloaded on [GitHub](https://github.com/buzo-ffm/apg/), moreover the package is present in the main repositories of most GNU/Linux distros:

* [Arch Linux AUR](https://aur.archlinux.org/packages/apg)

* [Debian](https://packages.debian.org/search?keywords=apg)

* [Ubuntu](https://packages.ubuntu.com/search?keywords=apg)

## Documentation

As any good GNU/Linux user should do, let's go to the program's help menù with the `apg -help` command:

```term
$ apg -help

apg   Automated Password Generator
        Copyright (c) Adel I. Mirzazhanov

apg   [-a algorithm] [-r file]
      [-M mode] [-E char_string] [-n num_of_pass] [-m min_pass_len]
      [-x max_pass_len] [-c cl_seed] [-d] [-s] [-h] [-y] [-q]

-M mode         new style password modes
-E char_string  exclude characters from password generation process
-r file         apply dictionary check against file
-b filter_file  apply bloom filter check against filter_file
                (filter_file should be created with apgbfm(1) utility)
-p substr_len   paranoid modifier for bloom filter check
-a algorithm    choose algorithm
                 1 - random password generation according to
                     password modes
                 0 - pronounceable password generation
-n num_of_pass  generate num_of_pass passwords
-m min_pass_len minimum password length
-x max_pass_len maximum password length
-s              ask user for a random seed for password
                generation
-c cl_seed      use cl_seed as a random seed for password
-d              do NOT use any delimiters between generated passwords
-l              spell generated password
-t              print pronunciation for generated pronounceable password
-y              print crypted passwords
-q              quiet mode (do not print warnings)
-h              print this help screen
-v              print version information
```

We also read the manual with the command `man apg` where we can have several explanations and examples on the use of the program, the items in the help menù that interest us most for this guide are the following parameters:

```term
-M mode         new style password modes
-E char_string  exclude characters from password generation process
-s              ask user for a random seed for password
                generation
```

Let's see the explanation in the manual page of each of these items:

```term
-M mode
      Use symbolsets specified with mode for password generation.  mode is a text string consisting of characters S, s, N, n, C, c, L, l. Where:

      S      generator must use special symbol set for every generated password.

      s      generator should use special symbol set for password generation.

      N      generator must use numeral symbol set for every generated password.

      n      generator should use numeral symbol set for password generation.

      C      generator must use capital symbol set for every generated password.

      c      generator should use capital symbol set for password generation.

      L      generator must use small letters symbol set for every generated password (always present if pronounceable password generation algorithm is used).

      l      generator should use small letters symbol set for password generation.

      ...

      Examples:
      -M sncl or -M SNCL or -M Cn

-E char_string
      exclude  characters  in char_string from password generation process (in pronounceable password generation mode you can not exclude small letters). To include special symbols that can be recognized by shell (apos‐
      trophe, quotes, dollar sign, etc.) in char_string use the backslashed versions.

      Examples:

      Command apg -a 1 -M n -n 3 -m 8 -E 23456789 will generate a set of passwords that will look like this
      10100110
      01111000
      11011101

...

-s     ask user for random sequence for password generation
```

In the paragraph `DEFAULT OPTIONS` the manual tells us: "If you want to generate really secure passwords, you should use option `-s`."

The `-s` parameter stands for "seed", or "random seed":

A random sequence for password generation is the "random seed", a random seed is a number (or vector) used to initialize a pseudorandom number generator. In short, it increases the entropy of the generated password, but this is a very large topic indeed, so I refer you to some sources where you can document yourself:

* [Cryptographically Secure Pseudorandom Number Generator (CSPRNG)](https://en.wikipedia.org/wiki/Cryptographically-secure_pseudorandom_number_generator)

* [Random Seed](https://en.wikipedia.org/wiki/Random_seed)

* [Cryptography - Initialization vector (IV)](https://en.wikipedia.org/wiki/Initialization_vector)

Then, to increase the strength (entropy) of the generated passwords we use these parameters.

## Use apg

Generate 5 passwords of minimum 15 and maximum 20 random characters and excluding some:

```term
apg -a 1 -M SNCL -n 5 -m 15 -x 20 -E \\\{\\\ \\\}\\\ oO01lIi
y6?C[@$[;Dum'_qfT
:5-@~5|uzrg=LKX
d_R!$C3YH-5.QN~KdMsu
NS,>$RuZzqv-.b>5;m!
Y#,/Xw2c7H&=RQgH*D6
```

Here with the parameter `-M SNCL`, apg generates passwords that MUST include special symbols, numbers, uppercase and lowercase letters, while in the `-E` parameter it is indicated to exclude the characters "{" and "}", note that the escape sequence with three backslashes is used, furthermore, characters that can cause confusion in transcribing or writing passwords are excluded from the generator (some fonts have a 0 and a capital O or l and I which are very similar for example).

Generate 1 password of minimum 21 random characters, excluding some and take user input as a random seed:

```term
apg -a 1 -M SNCL -n 1 -m 21 -E oO0lI -s

Please enter some random data (only first 16 are significant)
(eg. your old password):>
{m'8bKTS4e`v%|U]GTgK$
```

When using the `-s` parameter you can enter random characters by typing them, as the program indicates, 16 characters are needed, I like to use the output always generated by apg, to use this method we open another terminal and generate passwords of 16 random characters:

```term
apg -a 1 -M SNCL -n 1 -m 16 -x 16 -E oO0lI
42<Q^3H~gmb>vQ6]
```

Then we use the `-s` parameter again to generate the password pasting the seed generated before, i.e. `42<Q^3H~gmb>vQ6]` in this case:

```term
apg -a 1 -M SNCL -n 1 -m 21 -E oO0lI -s

Please enter some random data (only first 16 are significant)
(eg. your old password):>
/!q/["Jt[*pRiL2j+|;5p
```

If we omit the `-n (num_of_pass)` parameter, apg by default generates 6 passwords:

```term
apg -a 1 -M SNCL -m 21 -E oO0lI
(936Fhvw\H&^:NwUFt9e_
5`\%/Uu5PAWm}y(>['RDH
j{~GvfYsfGPHPx!7<s1]E
x}>K@?:5^26~]m_KJ~,Mi
fW8eB,KM\d~D[sN'GQYvd
ye$*qGMX}",4F_J3y*KKH
```

Let's write a simple Bash script, so we can generate passwords with just one command.

```bash
#!/usr/bin/env bash

# pwgen.sh
#
# Shell script for generate passwords with `apg`
# see: `man apg` -- `apg --help`

# Characters to exclude when generate passwords.  Use backslashes
# to include special symbols that can be recognized by shell.
readonly char_exclude="\\\'\\\ \\\"\\\ \\\`\\\ o0O1lIi"

# Options:
# -a algorithm  1 - random character password generation
# -M mode
#       S      generator must use special symbol set for every generated password.
#       N      generator must use numeral symbol set for every generated password.
#       C      generator must use capital symbol set for every generated password.
#       L      generator  must  use  small  letters symbol set for every generated password
#
# -n num_of_pass
# -m min_pass_len
# -x max_pass_len
# -E exclude characters
#
# Generate n 10 passwords with a lenght between 12-18 characters, for
# longer and more secure passwords you should use `apg` manually.
apg -a 1 -M SNCL -n 10 -m 12 -x 18 -E "${char_exclude}"
```

Now we just need to run the command the `./pwgen.sh` for launch apg with selected options.

```term
./pwgen.sh
Wygz$*a}m9NL(!Zd%Y
6:nu{N~2%7Zd]j6C?
K|uEw5gKqSd}R;x
K4<@+:C^M8*5Njcb]r
J*7&K[b<<sUg
tY.:XNALt24&Mj
quGMYuDU]6>~
jR_kuwxUkft<M4
Lk_..c/D)j]6bR
y3Nuu/VD22=Y
```

Now let's look at password security in terms of [entropy bits](https://en.wikipedia.org/wiki/Password_strength#Entropy_as_a_measure_of_password_strength), entropy bits is a term for measure the strength of a password as the number of attempts to find the password, assuming knowledge of the character set the password uses (like in a dictionary attack). You can see an excellent explanation here: [Bits of Entropy - The Importance of Complex Passwords](https://www.securitycentric.com.au/blog/bits-of-entropy-the-importance-of-complex-passwords).

For the test we will use the utility on this website: http://rumkin.com/tools/password/passchk.php

Note: **Do not test passwords for use in real cases directly on this site**, obviously if you write an unencrypted password on a website as in this case it is to be considered compromised. You can download the program file used at this website to run the test locally (double checking the JavaScript code before starting it) :).

Generate a 21 characters lenght password with options seen above:

```term
apg -a 1 -M SNCL -n 1 -m 21 -E oO0lI
\iMs]$FNg3W:,"D7qG8u$
```

The test tells us that this password has 109.4 bits of entropy and a charset size of 94 characters which is a strong password:

![alt text](uploads/img/posts/create-strong-passwords-with-apg/1-entropy-bits_1.png)

## Final words

Of course, [this is not the only method of generating strong passwords](https://www.michaelhorowitz.com/BestPasswordAdvice.php), but it protects you from a large number of dictionary and brute-force attacks. In any case, the security of passwords also depends many other factors, here are some tips:

* When you use apg and when you type in your passwords [check that there is no one behind you](https://en.wikipedia.org/wiki/Shoulder_surfing_(computer_security)).

* Do not reuse the same password for different logins.

* Where possible use Two-factor authentication (2FA) in addition to the password.

* If you use a password manager, it is best to place the database in a USB pendrive and connect it only when needed, another great method is to install password manager software on an [Air Gapped Computer](https://www.howtogeek.com/687792/the-ultimate-defense-what-is-an-air-gapped-computer/).

* In most cases it is not necessary to change passwords periodically, change them only in case you suspect that they have been compromised, see: [Schneier on Security - Choosing Secure Passwords](https://www.schneier.com/blog/archives/2014/03/choosing_secure_1.html)


I hope this guide has cleared up your doubts regarding password security, stay safe!


brainf+ck
