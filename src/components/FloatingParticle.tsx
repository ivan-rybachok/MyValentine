interface FloatingParticleProps {
  index: number;
}

function FloatingParticle({ index }: FloatingParticleProps) {
  const style: React.CSSProperties = {
    position: "absolute",
    width: `${4 + (index % 3) * 3}px`,
    height: `${4 + (index % 3) * 3}px`,
    borderRadius: "50%",
    background: `hsl(${340 + ((index * 17) % 40)}, 70%, ${75 + (index % 10)}%)`,
    left: `${(index * 137.5) % 100}%`,
    top: `${(index * 91.3) % 100}%`,
    opacity: 0.4,
    animation: `float-${index % 4} ${4 + (index % 4)}s ease-in-out infinite`,
    animationDelay: `${(index * 0.4) % 3}s`,
  };

  return <div style={style} />;
}

export default FloatingParticle;
