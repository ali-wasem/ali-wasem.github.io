---
layout: post
title: "Iraqi Provinces: An Interactive Learning Experience"
date: 2024-03-15 13:32:20 +0300
description: Iraqi Provinces is an interactive Flutter app for elementary students to explore Iraq's geography with an engaging map and smooth animations. Compatible with Windows and MacOS, it offers a fun and dynamic learning experience.
img: iraqi-provinces/iraqi_provinces_banner2.png
fig-caption: # Add figcaption (optional)
tags: [flutter, app, getx, animation, responsive, custom paint, custom drawing]
---

## Overview

**Iraqi Provinces** is a Flutter-based application designed to offer elementary school students a fun and engaging way to learn about the geography of Iraq. By combining interactive elements with a user-friendly interface, this app transforms learning into an enjoyable experience. The app is compatible with both Windows and MacOS, making it accessible to a wide range of users.

## Features

1. Interactive learning
2. Exploring Maps
3. Quizes to challenge yourself.

## Screenshots

<div style="text-align: center;">
    <p>
        <img src="{{site.baseurl}}/assets/img/iraqi-provinces/1.png" alt="Navigate the Provinces (English Screen)" width="49%">
        <img src="{{site.baseurl}}/assets/img/iraqi-provinces/2.png" alt="Basic Info about the Province (English Screen)" width="49%" >
    </p>
</div>

<div style="text-align: center;">
    <p>
        <img src="{{site.baseurl}}/assets/img/iraqi-provinces/3.png" alt="Start of Quiz with the ability to choose the number of questions (Arabic Screen)" width="32%" class="modal-trigger">
        <img src="{{site.baseurl}}/assets/img/iraqi-provinces/4.png" alt="Discover some interesting maps (Arabic Screen)" width="32%" class="modal-trigger">
        <img src="{{site.baseurl}}/assets/img/iraqi-provinces/5.png" alt="Details Info about the Province (Arabic Screen)" width="32%" class="modal-trigger">
    </p>
</div>

## Techniques Behind the App

### SVG Image Handling

- **Reading SVG Images:** The app reads SVG images, which are used to represent the provinces of Iraq.
- **Parsing as XML Documents:** The SVG images are parsed as XML documents to extract necessary attributes, such as the path string that outlines each province.
- **Drawing Provinces and Borders:** The provinces are drawn using `ClipPath`, while the borders are drawn with `CustomPaint` to ensure precision and clarity.

### Animation Techniques

- **Animating Page Transitions:** Smooth transitions between pages make the app feel more dynamic and engaging.
- **Hero Widgets:** These are used to create shared element transitions between different screens, adding a layer of depth to the navigation experience.
- **OnHoverEffects:** Hovering over elements triggers subtle animations, providing visual feedback and enhancing the user experience.

### State Management

- **Using GetX:** The app utilizes GetX for efficient state management, ensuring that the UI reflects real-time changes as users interact with the app. GetX provides a lightweight and fast solution for managing complex state changes, making it ideal for this interactive application.

### Localization Support

- **Bilingual Interface:** The app supports both Arabic and English, allowing users to switch between languages seamlessly. The app automatically adjusts the layout and text direction based on the selected language, ensuring a consistent and intuitive experience.

### Adaptiveness for Different Landscape Sizes

- **Responsive Design:** The app is built with a responsive design that adjusts to various screen sizes and resolutions.

## How to Use

**The app is ready to use directly after downloading.**

Download **Iraqi Provinces** today and embark on an educational journey through the heart of Iraq.

[![Windows Download](https://img.shields.io/badge/Download-Windows-blue)](https://github.com/aliwaseem27/Iraqi-Provinces/releases/download/1.2.0/IraqiProvinces_v1.2.0.zip)
[![MacOS Download](https://img.shields.io/badge/Download-MacOS-darkorange)](https://github.com/aliwaseem27/Iraqi-Provinces/releases/download/1.2.0_macOS/IraqiProvinces_v1.2.0_macOS.zip)

Or you can visit the code on [![GitHub](https://img.shields.io/badge/GitHub%20Repo-grey)](https://github.com/aliwaseem27/Iraqi-Provinces) and giving a thumbs up 👍
