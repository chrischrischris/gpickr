#### Demo: https://simonwep.github.io/gpickr

> This is a demo of how [pickr](https://github.com/Simonwep/pickr) could be implemented / integrated in other scenarios.

#### Usage
```js
const gpickr = new GPickr({
    el: '.gradient-pickr',
    
    // Pre-defined stops. These are the default since at least two should be defined
    stops: [
        ['rgb(255,132,109)', 0],
        ['rgb(255,136,230)', 1]
    ]
})
```

#### GPickr Instance / static props
* gpickr.Pickr _- [Pickr](https://github.com/Simonwep/pickr)._
* gpickr.addStop(color`:String`, loc`:Number`) _- Add a color-stop._
* gpickr.removeStop(v`:String|Number|Stop`) _- Remove a color stop by color, location or stop-instance._

