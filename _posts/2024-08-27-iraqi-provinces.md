---
layout: post
title: "Iraqi Provinces: An Interactive Learning Experience"
date: 2024-03-15 13:32:20 +0300
description: You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. # Add post description (optional)
img: workflow.jpg # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [Flutter, app, GetX, animation, responsive, Custom Paint, Custom Drawing]
---

## Overview

**Iraqi Provinces** is a Flutter-based application designed to offer elementary school students a fun and engaging way to learn about the geography of Iraq. By combining interactive elements with a user-friendly interface, this app transforms learning into an enjoyable experience. The app is compatible with both Windows and MacOS, making it accessible to a wide range of users.

## Features

### Interactive Map

Explore the provinces of Iraq with an interactive map that allows students to click on different regions to learn more about them. Each province is clearly outlined and clickable, providing instant access to detailed information.

### Engaging Animations

The app uses smooth page transitions, hero widgets, and hover effects to keep users engaged. These animations make navigation intuitive and enjoyable, ensuring that students remain interested as they learn.

### Responsive Design

The app's responsive design ensures that it looks and functions well on different screen sizes. Whether on a small laptop or a large desktop monitor, the app adapts seamlessly to provide an optimal viewing experience.

### State Management with Getx

State management in **Iraqi Provinces** is handled using Getx, a popular Flutter package known for its simplicity and efficiency. This ensures that the app remains responsive and that user interactions are managed smoothly.

## Techniques Behind the App

### SVG Image Handling

- **Reading SVG Images:** The app reads SVG images, which are used to represent the provinces of Iraq.
- **Parsing as XML Documents:** The SVG images are parsed as XML documents to extract necessary attributes, such as the path string that outlines each province.
- **Drawing Provinces and Borders:** The provinces are drawn using `ClipPath`, while the borders are drawn with `CustomPaint` to ensure precision and clarity.

### Animation Techniques

- **Animating Page Transitions:** Smooth transitions between pages make the app feel more dynamic and engaging.
- **Hero Widgets:** These are used to create shared element transitions between different screens, adding a layer of depth to the navigation experience.
- **OnHoverEffects:** Hovering over elements triggers subtle animations, providing visual feedback and enhancing the user experience.

## How to Use

**Iraqi Provinces** is an excellent educational tool designed specifically for elementary school students. It offers an interactive way to explore and learn about the geography of Iraq, making it perfect for both classroom settings and at-home learning. Simply open the app, start exploring the map, and let the learning begin!

---

Download **Iraqi Provinces** today and embark on an educational journey through the heart of Iraq.
