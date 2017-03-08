Vanilla Canvas Video
========

Vanilla canvas video processing addressing video transparency

## Basic Usage:

### HTML

```html
<div id="the_container"></div>
```

### CSS

```css
#the_buffer { display: none; }
```

### JS
```javascript
(function () {
  var test = new CanvasVideo({
    container: 'the_container'
    , filename: 'FILENAME.mp4'
    , width: '1200'
    , height: '1080'
    , looping: false
    , buffer_id: 'the_buffer'
	, output_id: 'the_output'
  });
})();
```

## Contributors

[Randell Quitain](//github.com/mugetsu)