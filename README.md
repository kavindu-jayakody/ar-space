# Space Explorer – WebAR

A marker-based AR space scene built with A-Frame 1.3.0 and AR.js 3.4.5.
Point your phone at the **Hiro marker** to see a mini solar system, a floating astronaut and a rocket you can launch.

**Live demo:** https://<your-username>.github.io/<repo-name>/
**Hiro marker:** https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png

## Features (activity checklist)

| # | Requirement | How it is met |
|---|-------------|---------------|
| 1 | Hiro marker scene: 4+ objects, 2+ primitives, an `<a-text>` label | Box base, sphere sun, torus ring, sphere planet, cylinder + cone rocket, star spheres, "SPACE EXPLORER" `<a-text>` |
| 2 | Two objects animated with different properties | Sun and planet orbit use **rotation**; astronaut floats using **position** |
| 3 | glTF/GLB model (not the duck) | `models/astronaut.glb` (see Credits) |
| 4 | Workshop colour-change ball + new tappable object written as our own component | `change-color` on the planet; our own `rocket-launch` component makes the rocket fly up with its engine flame on, then land |
| 5 | Status banner changes text and colour on marker found and lost | `marker-status` component + `#status` banner (red = lost, green = found) |
| 6 | Hosted over HTTPS and tested on a phone | GitHub Pages (link above) |

## Files

```
index.html          the AR scene
js/components.js    change-color, rocket-launch, marker-status components
models/astronaut.glb
```

## Run locally

```bash
npx serve .        # or: python3 -m http.server 8000
```

The camera needs HTTPS (or `localhost`), so test on a phone through the hosted link.

## Credits

- **Astronaut** 3D model by **Poly by Google**, licensed under **CC-BY** (Creative Commons Attribution).
  Obtained from the Google model-viewer shared assets:
  https://github.com/google/model-viewer/tree/master/packages/shared-assets/models
- [A-Frame](https://aframe.io) (MIT) and [AR.js](https://github.com/AR-js-org/AR.js) (MIT).
