# Install

> npm install @annatto/popover
> or
> yarn add @annatto/popover

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
  <Popover.Content>Can be anythings</Popover.Content>
</Popover>
```

```js
// Basic case with Link trigger
<Popover>
  <Popover.Link />
  <Popover.Content />
</Popover>
```

```js
// Button and tooltip style
<Popover>
  <Popover.Button>Is a tooltip</Popover.Button>
  <Popover.Content>
    <Popover.Tooltip>Content with style of a Tooltip</Popover.Tooltip>
  </Popover.Content>
</Popover>
```

````js
// Button and HoverCard style
<Popover>
  <Popover.Button>Is a tooltip</Popover.Button>
  <Popover.Content>
    <Popover.HoverCard>Content with style of a HoverCard</Popover.HoverCard>
  </Popover.Content>
</Popover>


```js
// Advance case with providing element where to mount the popover
<Popover>
  <Popover.Element query={() => {document.querySelector('.some-element')}} />
  <Popover.Content isVisible={}></Popover.Content>
</Popover>
````

```js
// Advance case with providing boundingClientRect
<Popover>
<Popover.Element rect={() => (some.getboundingClientRect())} />
<Popover.Content isVisible={} />
</Popover>
```

```js
// Utility Pre-made Components
<Popover>
  <Popover.Button />
  <Popover.Delete
    message={}
    onConfirm={}
    onCancel={}
  />
</Popover>
```

# Props

_<Popover />_

**align** `default: bottom`

`<Popover align="left" />`

```js
oneOf([
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
]);
```

# Read more

[documentation]: https://design.annato.com/@annatto/popover
