const nodes = [
  [40, 60], [130, 30], [230, 90], [60, 160], [190, 190],
  [320, 60], [360, 170], [280, 220], [10, 230], [400, 40],
];

const edges: [number, number][] = [
  [0, 1], [1, 2], [1, 3], [3, 4], [2, 5], [5, 9], [4, 7], [3, 8], [5, 6], [6, 7],
];

export function HeroBackdrop() {
  return (
    <div className="hero-backdrop" aria-hidden="true">
      <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice">
        <g stroke="var(--accent)" strokeWidth="0.6" fill="none">
          {edges.map(([a, b], i) => (
            <line
              key={i}
              className="plexus-line"
              x1={nodes[a][0]}
              y1={nodes[a][1]}
              x2={nodes[b][0]}
              y2={nodes[b][1]}
            />
          ))}
        </g>
        <g fill="var(--accent-2)">
          {nodes.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 2.2 : 1.4} />
          ))}
        </g>
      </svg>
    </div>
  );
}

