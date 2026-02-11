import FloatingParticle from "./FloatingParticle";

function Particles() {
  return (
    <div className="particles">
      {Array.from({ length: 18 }).map((_, i) => (
        <FloatingParticle key={i} index={i} />
      ))}
    </div>
  );
}
export default Particles;
