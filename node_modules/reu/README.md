# reu

This is a collection of reusable regular expressions.


[![NPM](https://nodei.co/npm/reu.png)](https://nodei.co/npm/reu/)

[![Build Status](https://api.travis-ci.org/DamonOehlman/reu.svg?branch=master)](https://travis-ci.org/DamonOehlman/reu) [![bitHound Score](https://www.bithound.io/github/DamonOehlman/reu/badges/score.svg)](https://www.bithound.io/github/DamonOehlman/reu) 

## Why?

Primarily because I can never remember which way a linebreak regular
expression is meant to be (is it `\r?\n`, or `\n\r?`) and if I can't remember
that simple one, how am I meant to remember anything more complicated.

## Usage

Simply include the particular file you need for the regular expression
you require:

### `reu/ip`

A regular expression that will match both IPv4 and IPv6 addresses.  This is a modified
regex (remove hostname matching) that was implemented by @Mikulas in
[this stackoverflow answer](http://stackoverflow.com/a/9209720/96656).

### `reu/newline`

A newline regex that will split on newline characters regardless of
whether the file was created on *nix or Windows.

## License(s)

### ISC

Copyright (c) 2015, Damon Oehlman <damon.oehlman@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
