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
![](./screenshot.jpg)



### Links

- Solution URL: [Solution]()
- Live Site URL: [Social-Media-Dashboard-with-Theme-Switcher]()

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