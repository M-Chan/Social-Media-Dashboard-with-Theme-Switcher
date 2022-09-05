# Frontend Mentor - Social media dashboard with theme switcher solution
This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview
### The challenge
Users should be able to:
- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference


### Screenshots
<p float="left">
<img src="https://user-images.githubusercontent.com/81781462/188442058-07625828-f069-46a5-a19a-c196cbe39e19.png"  alt="Frontend Mentor Social Media Dashboard with Theme Switcher - Desktop_Dark" height="275">
<img src="https://user-images.githubusercontent.com/81781462/188442061-baa1fa29-cc5d-49cd-ab84-fa96debd2ac8.png"  alt="Frontend Mentor Social Media Dashboard with Theme Switcher - Mobile_Dark" height="275" style="display: inline-block">
</p>
<p float="left">
<img src="https://user-images.githubusercontent.com/81781462/188442059-4c97b03d-5244-41a1-ae7d-12d7c7fed266.png"  alt="Frontend Mentor Social Media Dashboard with Theme Switcher - Desktop_Light" height="275">
<img src="https://user-images.githubusercontent.com/81781462/188442062-4a83626c-90d2-4831-81a4-4ef41bfa0d05.png"  alt="Frontend Mentor Social Media Dashboard with Theme Switcher - Mobile_Light" height="275" style="display: inline-block">
</p>
<!---
![Frontend Mentor Social Media Dashboard with Theme Switcher - Desktop_Dark](https://user-images.githubusercontent.com/81781462/188442058-07625828-f069-46a5-a19a-c196cbe39e19.png)
![Frontend Mentor Social Media Dashboard with Theme Switcher - Desktop_Light](https://user-images.githubusercontent.com/81781462/188442059-4c97b03d-5244-41a1-ae7d-12d7c7fed266.png)
![Frontend Mentor Social Media Dashboard with Theme Switcher - Mobile_Dark](https://user-images.githubusercontent.com/81781462/188442061-baa1fa29-cc5d-49cd-ab84-fa96debd2ac8.png)
![Frontend Mentor Social Media Dashboard with Theme Switcher - Mobile_Light](https://user-images.githubusercontent.com/81781462/188442062-4a83626c-90d2-4831-81a4-4ef41bfa0d05.png)
--->


### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/social-media-dashboard-with-theme-switcher-using-vanilla-js-and-css-grid-WO8b7ppZ6T)
- Live Site URL: [Social-Media-Dashboard-with-Theme-Switcher](https://m-chan.github.io/Social-Media-Dashboard-with-Theme-Switcher/)

&nbsp;
## My process
### Built with
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla JS


### What I learned
I really enjoyed this challenge. There were quite a few things to do. The dashboard was quite busy so there was a lot to populate and style. Then there was the theme switching part which was a nice JS addition.
- html
  - Simple html addition but an important one...
    ```html
    <noscript>JavaScript disabled</noscript>
    ```
&nbsp; <!-- non-breaking space ASCII character; adds a line -->
- CSS
  - Seems easy enough but I didn't realise you could use css styling to make the texts uppercase with spacing between letters...
    ```css
    .mainType{text-transform: uppercase;}
    .mainType{letter-spacing: 0.26vw;}
    ```
&nbsp; 
- JS
  - For the Dark/Light mode toggle, I was originally using this...
    ```js
    function toggleDarkMode() {
      if(banner.classList.contains("bannerLight")) { // if in lightmode then switch to dark mode
          
          // CODE TO SWITCH TO DARK MODE...

          // EG. FOR THE CARD COLOURS...
          card.forEach(item => { // change the colour of the cards from grey to dark desaturated blue
              item.classList.remove("cardLight");
              item.classList.add("cardDark");
          })
      }

      else if (banner.classList.contains("bannerDark")) { // if in darkmode then switch to light mode
          
          // CODE TO SWITCH TO LIGHT MODE
          // OPPOSITE TO THE ABOVE CODE TO SWITCH TO DARK MODE
      }
    }
    ```
  - But then I found out JS had a toggle 'function' so I could condense the code down rather than have one each for dark and light mode specifically...
    ```js
    function toggleDarkMode() {
      card.forEach(item => { // change the colour of the cards
          item.classList.toggle("cardLight");
          item.classList.toggle("cardDark");
      })
    }
    ```

&nbsp;
### Continued development
- Do more Frontend Mentor challenges
  - focus on learning more Vanilla JS in the process
  - hopefully become quicker with the HTML & CSS parts




---
## Author
- Website - [Man Ting Chan](https://m-chan.github.io/)
- Frontend Mentor - [@M-Chan](https://www.frontendmentor.io/profile/M-Chan)
