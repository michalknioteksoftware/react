import { useEffect, useRef } from "react";

function RotatingCube({ label = "React" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const cubeSize = 60;
    const perspective = 360;

    let animationFrameId;
    let angle = 0;
    let angleX = 0;

    const vertices = [
      [-1, -1, -1],
      [1, -1, -1],
      [1, 1, -1],
      [-1, 1, -1],
      [-1, -1, 1],
      [1, -1, 1],
      [1, 1, 1],
      [-1, 1, 1],
    ];

    const edges = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 4],
      [0, 4],
      [1, 5],
      [2, 6],
      [3, 7],
    ];

    const faces = [
      [0, 1, 2, 3], // front/back
      [4, 5, 6, 7], // back/front
      [0, 1, 5, 4], // top
      [2, 3, 7, 6], // bottom
      [1, 2, 6, 5], // right
      [0, 3, 7, 4], // left
    ];

    function project([x, y, z]) {
      const scale = (perspective / (perspective + z)) * cubeSize;
      return {
        x: x * scale + width / 2,
        y: y * scale + height / 2,
      };
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Rotate around both Y and X axes for a catty-corner effect
      const cosY = Math.cos(angle);
      const sinY = Math.sin(angle);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      const rotated = vertices.map(([x, y, z]) => {
        // Y rotation
        const x1 = x * cosY - z * sinY;
        const z1 = x * sinY + z * cosY;

        // X rotation
        const y1 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;

        return [x1, y1, z2];
      });

      const projected = rotated.map(project);

      // Paint cube faces from back to front to make it solid
      const facesWithDepth = faces.map((face) => {
        const avgZ =
          face.reduce((sum, index) => sum + rotated[index][2], 0) /
          face.length;
        return { face, avgZ };
      });

      facesWithDepth.sort((a, b) => a.avgZ - b.avgZ);

      facesWithDepth.forEach(({ face }) => {
        const pts = face.map((i) => projected[i]);

        // Slightly lighter for faces to distinguish from background
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length; i += 1) {
          ctx.lineTo(pts[i].x, pts[i].y);
        }
        ctx.closePath();
        ctx.fillStyle = "rgba(15, 23, 42, 0.95)";
        ctx.fill();

        ctx.strokeStyle = "#60a5fa";
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      ctx.fillStyle = "#ffffff";
      ctx.font = "14px system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI'";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Draw the label on every visible face so it stays glued to each wall
      facesWithDepth
        .filter(({ avgZ }) => avgZ > 0)
        .forEach(({ face }) => {
          const pts = face.map((i) => projected[i]);
          const cx = pts.reduce((sum, p) => sum + p.x, 0) / pts.length;
          const cy = pts.reduce((sum, p) => sum + p.y, 0) / pts.length;
          ctx.fillText(label, cx, cy);
        });
    }

    const render = () => {
      angle += 0.02;
      angleX += 0.015;
      draw();
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [label]);

  return (
    <canvas
      ref={canvasRef}
      width={260}
      height={220}
      className="cube-canvas"
    />
  );
}

export default RotatingCube;

