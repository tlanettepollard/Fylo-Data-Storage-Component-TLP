# Fylo-Data-Storage-Component-TLP
Frontend Mentor Project

![Design preview for the Fylo data storage component coding challenge](./design/desktop-preview.jpg)


## My challenge
My challenge was to build a data storage component so that it looks as close to the design as possible.

My users should be able to:

- View the optimal layout for the site depending on their device's screen size. Focus screen sizes were 375px (mobile) and 1440px (desktop).

## Background
### New Information I Learned
I did some research on using SVG tag instead of IMG tags in my HTML. I found out that I could include a <title> tag which is similar to an alt attribute we use for images. You need to place the <title> tag right below the SVG tag. You also need to include an aria-labelledby attribute that points to the <title> tag. I could also use a description tag to add a longer description for users of assistive technology. I did not use the tag since my images were general icons. 

Another area I researched was styling my input range slider to be cross-browser compatible. I referred to [CSS Tricks](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/).

### New Technique I Used
I decided to include separate stylesheets for mobile and for desktop in my HTML. This is called "resolution dependent layouts." I included a 'media' attribute in my stylesheet link for browser width. My mobile stylesheet is used for a range of **min-width 330px** and **max-width 768px**. My desktop stylesheet is used for **min-width 769px**. [CSS Tricks](https://css-tricks.com/resolution-specific-stylesheets/) had a very good article about using multiple stylesheets. 

## Completed Design
You can see my final design here: [Fylo Data Storage Component](https://tlanetterose.github.io/Fylo-Data-Storage-Component-TLP/)

Web Developer: [T.Lanette Pollard](https://github.com/TLanetteRose)

## Attribution 
Challenge by [Frontend Mentor](https://www.frontendmentor.io/challenges)