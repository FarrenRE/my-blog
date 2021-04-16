---
template: BlogPost
date: 2021-04-16T01:05:38.464Z
path: /whatkey
externalPath: ''
title: What hotkey?
tagline: React + Redux web app (WIP)
links:
  external: 'https://hardcore-neumann-ecc602.netlify.app/'
  github: 'https://github.com/FarrenRE/whathotkey'
draft: false
---
I am the go-to tech geek in my family. In addition to (happily) being internationally on-call 24/7 for family IT support (I love you grandma), I am also the recipient of everyone's app ideas -- and there have been some great ones, too! All the same, I was proud to have my personal eureka moment when I determined my own. I present, What Hotkey? Or... Whatkey? Or perhaps... Whotkey. Wotkey?

A hotkey visualisation app, and great candidate for my first Redux app. [An issue I had encountered before](/emu) was state management across a React app, specifically child components informing distant cousin components. In the past I used a messy combination of Context, Refs, and parent-passing-functions-to-children to hoist the data up to parents and across the application. [Yuck](https://github.com/FarrenRE/emu/blob/master/src/components/templatePicker.js).

Enter Redux, the answer to my global state management issues. The app works in the following way:

1. On keypress, record [e.key values](https://css-tricks.com/snippets/javascript/javascript-keycodes/) in Store. These values resemble {pressedKey: x, shiftKey: false, etc.}
2. Search config data for match (pressed key + modifier(s))
3. Display hotkey description if any, and allow user to edit description of active key combination

It's currently just a working demo of the above, and in time I look forward to adding:

* Profiles for storing configs
* Shared config repository
* [Keyboard visualisation](https://www.figma.com/file/ZYZIMVii3GIouhVuxNV4vZ/What-hotkey?node-id=0%3A1)
