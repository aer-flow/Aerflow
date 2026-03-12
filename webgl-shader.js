// webgl-shader.js
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('ai-automation-canvas');
    if (!canvas) return;

    // Use global THREE object from CDN
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    // Let the background be transparent or match the parent card
    // renderer.setClearColor(new THREE.Color(0x000000), 0);
    
    // We'll leave the clear color out so it responds to the card background, or set to black if it looks bad.
    // The shadcn component uses: refs.renderer.setClearColor(new THREE.Color(0x000000))
    // But since it's replacing a spline canvas that was transparent over a card background, alpha is better.
    // Actually, let's keep it black to match the shadcn component's exact look if needed, but maybe transparent is better for the card? Let's try transparent first. If the Shadcn component is a fixed full screen background, it's black. But in the card, we want it to blend. We'll set it to transparent `alpha: true`. Wait, the fragment shader outputs vec4(r, g, b, 1.0) which is opaque. So it will be opaque anyway unless we change it. We'll just let it be opaque with dark colors.

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, -1);

    const uniforms = {
        resolution: { value: [canvas.clientWidth, canvas.clientHeight] },
        time: { value: 0.0 },
        xScale: { value: 1.0 },
        yScale: { value: 0.5 },
        distortion: { value: 0.05 },
    };

    const vertexShader = `
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float xScale;
      uniform float yScale;
      uniform float distortion;

      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
        
        float d = length(p) * distortion;
        
        float rx = p.x * (1.0 + d);
        float gx = p.x;
        float bx = p.x * (1.0 - d);

        float r = 0.05 / abs(p.y + sin((rx + time) * xScale) * yScale);
        float g = 0.05 / abs(p.y + sin((gx + time) * xScale) * yScale);
        float b = 0.05 / abs(p.y + sin((bx + time) * xScale) * yScale);
        
        gl_FragColor = vec4(r, g, b, 1.0);
      }
    `;

    const position = [
        -1.0, -1.0, 0.0,
         1.0, -1.0, 0.0,
        -1.0,  1.0, 0.0,
         1.0, -1.0, 0.0,
        -1.0,  1.0, 0.0,
         1.0,  1.0, 0.0,
    ];

    const positions = new THREE.BufferAttribute(new Float32Array(position), 3);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", positions);

    const material = new THREE.RawShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: uniforms,
        side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let animationId;

    const handleResize = () => {
        // Need to resize relative to the parent card, not window width/height.
        const parent = canvas.parentElement;
        if (!parent) return;
        
        const width = parent.clientWidth;
        const height = parent.clientHeight;
        
        renderer.setSize(width, height, false);
        uniforms.resolution.value = [width, height];
        
        canvas.style.width = '100%';
        canvas.style.height = '100%';
    };

    const animate = () => {
        uniforms.time.value += 0.01;
        renderer.render(scene, camera);
        animationId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", handleResize);

    // Initial sizing
    handleResize();
    
    // Using ResizeObserver on parent to catch layout shifts
    const observer = new ResizeObserver(() => {
        handleResize();
    });
    observer.observe(canvas.parentElement);

    animate();
});
