import Particle from "../animation/background/Particle";

const Layout = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Particle />
      </div>
      <main className="relative z-10">{children}</main>
    </div>
  );
};

export default Layout;
