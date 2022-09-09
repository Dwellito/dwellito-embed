<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<div align="center">
 <a href="https://dwellito.com">
    <img src="https://avatars.githubusercontent.com/u/83094440?s=200&v=4" alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">Dwellito Embed</h3>
</div>
  
  <!-- ABOUT THE PROJECT -->

## About

This snippet is used to load the dwellito widget into a responsive iframe within your website upon clicking any element (button, link, image) of your choosing.

## Setting Up The Embed

1. Add the following HTML script tag to the header section of your page (use embed.js or advanced.js depending on your desired widget)

```
 <script src="https://cdn.jsdelivr.net/gh/Dwellito/dwellito-embed@latest/advanced.js" async></script>
```

2. To add the open widget behavior to the desired element, simply add the id dwellito to the element. The example below is used to add the open widget behavior to a button.

```
 <button id="dwellito">Need Financing?</button>
```

3. (Optional) To customize the behavior of the widget, add a script containing a dwellitoEmbed object above the embed script. The initialValue parameter sets the initial desired loan value. More customizations to come.

```
 <script>
    var dwellitoEmbed = {
      intialValue: 240000,
      clickElementIds: ["dwellitoClickElement1", "dwellitoClickElement2"]
    }
 </script>
 <script src="https://cdn.jsdelivr.net/gh/Dwellito/dwellito-embed@latest/advanced.js" async></script>
```

Note: The above is just an example. You should apply id="dwellito" to the element on your page that you want to trigger the widget.
