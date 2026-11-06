/* Custom A-Frame components for the Space Explorer AR app */

/* 4a. Workshop interaction: tap the ball (planet) to change its colour. */
AFRAME.registerComponent('change-color', {
  schema: {
    colors: { type: 'array', default: ['#2196f3', '#e53935', '#43a047', '#8e24aa', '#00bcd4'] }
  },
  init: function () {
    this.index = 0;
    this.el.addEventListener('click', () => {
      this.index = (this.index + 1) % this.data.colors.length;
      this.el.setAttribute('color', this.data.colors[this.index]);
    });
  }
});

/* 4b. Our own new interaction: tap the rocket to launch it.
   The engine flame turns on, the rocket flies up, then lands back
   on the pad and the flame turns off. Taps during a flight are ignored. */
AFRAME.registerComponent('rocket-launch', {
  schema: {
    flame: { type: 'selector' },
    height: { type: 'number', default: 1.2 },
    dur: { type: 'number', default: 1500 }
  },
  init: function () {
    const el = this.el;
    const data = this.data;
    const start = Object.assign({}, el.getAttribute('position'));
    let flying = false;

    el.addEventListener('click', () => {
      if (flying) return;
      flying = true;
      if (data.flame) data.flame.setAttribute('visible', true);

      // Fly up
      el.setAttribute('animation__launch', {
        property: 'position',
        from: `${start.x} ${start.y} ${start.z}`,
        to: `${start.x} ${start.y + data.height} ${start.z}`,
        dur: data.dur,
        easing: 'easeInQuad'
      });
    });

    el.addEventListener('animationcomplete__launch', () => {
      // Come back down and land
      el.setAttribute('animation__land', {
        property: 'position',
        from: `${start.x} ${start.y + data.height} ${start.z}`,
        to: `${start.x} ${start.y} ${start.z}`,
        dur: data.dur,
        easing: 'easeOutQuad'
      });
    });

    el.addEventListener('animationcomplete__land', () => {
      if (data.flame) data.flame.setAttribute('visible', false);
      flying = false;
    });
  }
});

/* 5. Status banner: change text + colour when the marker is found / lost. */
AFRAME.registerComponent('marker-status', {
  schema: { banner: { type: 'selector' } },
  init: function () {
    const banner = this.data.banner;
    if (!banner) return;

    this.el.addEventListener('markerFound', () => {
      banner.textContent = '🚀 Marker found – welcome to space!';
      banner.classList.add('found');
    });

    this.el.addEventListener('markerLost', () => {
      banner.textContent = '🛰️ Signal lost – point back at the marker';
      banner.classList.remove('found');
    });
  }
});
