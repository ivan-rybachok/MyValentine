function StarsBackground() {
  return (
    <div className="stars">
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: `${(i * 97.3 + 13) % 100}%`,
            top: `${(i * 83.7 + 7) % 100}%`,
            ["--dur" as string]: `${2.5 + (i % 5) * 0.7}s`,
            ["--delay" as string]: `${(i * 0.3) % 3}s`,
          }}
        />
      ))}
    </div>
  );
}

export default StarsBackground;
