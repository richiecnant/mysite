export default function CyberGrid() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark/60" />
      {/* Grid lines */}
      <div className="absolute inset-0 cyber-grid opacity-40" />
      {/* Radial gradient fade */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0a0a0f_80%)]" />
    </div>
  )
}
