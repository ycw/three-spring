# About

Modeling spring motion in threejs.

## Examples

- [Basic](//ycw.github.io/three-spring/examples/basic/)
- [Pointer](//ycw.github.io/three-spring/examples/pointer/)

## Usage

```js
// Create
const spring = new Spring({
  p: new THREE.Vector3(..), // pull position
  q: new THREE.Vector3(..), // equilibrium position
  f: 1, // frequency
  k: 0.88, // amplitude attenuation per period
  A: Infinity // amplitude constrait ( 0 = teleport )
});

const clock = new Clock();
renderer.setAnimationLoop(() => { 
  ...
  spring.update(clock.getDelta()); // Update
  mymesh.position.copy(spring.position); // Get
});
```

## Credits

- [ mrdoob / three.js ](//github.com/mrdoob/three.js)
- [ cocopon / tweakpane ](//github.com/cocopon/tweakpane)

## License

- [MIT](LICENSE)