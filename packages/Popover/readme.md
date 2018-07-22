# installation

`> npm install @annatto/popover`
or
`> yarn add @annatto/popover`

# How to use it

```js
import React from 'react';
import Popover from '@annatto/popover';

then use <Popover {...props} />
```

## Api

```js
// Basic case with button trigger
<Popover>
  <Popover.Button />
  <Popover.Content />
</Popover>
```

```js
<Popover>
  <Popover.Link />
  <Popover.Content />
</Popover>
```

```js
// Advance case with providing boundingClientRect
<Popover>
  <Popover.Element rect={() => (some.getboundingClientRect()) />
  <Popover.Content isVisible={}></Popover.Content>
</Popover>
```

```js
// Advance case with providing element where to mount the popover
<Popover>
  <Popover.Element query={() => {document.querySelector('.some-element')}} />
  <Popover.Content isVisible={}></Popover.Content>
</Popover>
```

### Props

**Alignment**

```js
<Popover align="bottom">
  <Popover.Button>
    <span role="image" aria-label="fox">
      🦊
    </span>
    <span>Show popover</span>
  </Popover.Button>
  <Popover.Content>Popover content</Popover.Content>
</Popover>
```

```js
Popover: align = [
  // basic alignments
  "topLeft",
  "top",
  "topRight",
  "rightTop",
  "right",
  "rightBottom",
  "bottomRight",
  "bottom",
  "bottomLeft",
  "leftTop",
  "left",
  "leftBottom",

  // advance alignments
  "topLeft:right",
  "topLeft:left",
  "top:left",
  "top:right",
  "topRight:left",
  "topRight:right",
  "rightTop:top",
  "rightTop:bottom",
  "right:top",
  "right:bottom",
  "rightBottom:top",
  "rightBottom:bottom",
  "bottomRight:left",
  "bottomRight:right",
  "bottom:left",
  "bottom:right",
  "bottomLeft:left",
  "bottomLeft:right",
  "leftTop:top",
  "leftTop:bottom",
  "left:top",
  "left:bottom",
  "leftBottom:top",
  "leftBottom:bottom",
];
```

# Read more

[documentation]: https://design.annato.com/@annatto/popover
