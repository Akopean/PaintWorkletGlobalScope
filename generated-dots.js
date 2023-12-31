const rand = (min, max) => min + Math.floor(Math.random() * max);

class GeneratedDots {
  static get inputProperties() {
    return [
      '--bg-color',
      '--dot-color',
      '--tick',
    ];
  }
  paint(ctx, { width, height }, properties) {
    const bgColor = properties.get('--bg-color').toString();
    const dotColor = properties.get('--dot-color').toString();
    const size = 24;
    console.log(properties.get("--bg-color").toString())
    // Draw background colour
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);

    for (let i = size / 2; i <= width; i += size) {
      for (let j = size / 2; j <= height; j += size) {
        if (rand(0, 100) >= 90) {
          let dotSize = 2;
          let opacity = rand(0, 7) / 10;
          const green = rand(0, 200);
          const blue = rand(0, 200);

          ctx.fillStyle = `rgba(0,${green},${blue},${opacity})`;
          ctx.beginPath();
          ctx.arc(i, j, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // Draw in mouse position
    // if (mouseX && mouseY) {
    //   ctx.fillStyle = 'red';
    //   ctx.fillRect(mouseX, mouseY, 5, 5);
    // }
  }
}

registerPaint('generateddots', GeneratedDots);
