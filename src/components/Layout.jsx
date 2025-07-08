import Lightning from "../animation/background/Lightning";

const Layout = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Lightning */}
      <div className="absolute inset-0 -z-10">
        <Lightning hue={220} xOffset={0} speed={1} intensity={1} size={1} />
      </div>

      {/* Konten halaman */}
      <main className="relative z-10">{children}</main>
    </div>
  );
};

export default Layout;
