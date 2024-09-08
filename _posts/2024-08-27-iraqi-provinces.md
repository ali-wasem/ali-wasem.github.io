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

<!-- <div style="text-align: center;">
  <img src="{{site.baseurl}}/assets/img/iraqi-provinces/4.png" alt="Description" width="32%" id="myImg">
</div> -->

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<div style="text-align: center;">
    <p>
        <img src="{{site.baseurl}}/assets/img/iraqi-provinces/1.png" alt="Description" width="49%" id="img01">
        <img src="{{site.baseurl}}/assets/img/iraqi-provinces/2.png" alt="Description" width="49%" id="img01">
    </p>
</div>

<div style="text-align: center;">
    <p>
        <img src="{{site.baseurl}}/assets/img/iraqi-provinces/3.png" alt="Description" width="32%" id="img01">
        <img src="{{site.baseurl}}/assets/img/iraqi-provinces/4.png" alt="Description" width="32%" id="img01">
        <img src="{{site.baseurl}}/assets/img/iraqi-provinces/5.png" alt="Description" width="32%" id="img01">
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

<style>
.modal {
  display: none; 
  position: fixed; 
  z-index: 1; 
  padding-top: 100px; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgba(0,0,0,0.5); /* Less dim background */
  animation-name: fadeIn;
  animation-duration: 0.4s;
}

.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  animation-name: zoomIn;
  animation-duration: 0.4s;
}

@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity: 1;}
}

@keyframes zoomIn {
  from {transform: scale(0.7);}
  to {transform: scale(1);}
}

#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
}

.close {
  position: absolute;
  top: 35px;
  right: 35px;
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}
</style>

<script>
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
modal.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
</script>
