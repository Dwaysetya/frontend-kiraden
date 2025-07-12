// navMenu.jsx
import { useState, useEffect } from "react";
import {
  NavLink as RouterNavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";

const NavMenu = ({ links = [], textColor = "text-white" }) => {
  const [activeScrollLink, setActiveScrollLink] = useState(null);
  const [_, setClickedScrollLink] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const SCROLL_DURATION = 500;

  useEffect(() => {
    // Reset state aktif saat berpindah rute (dari Home ke TentangKami atau sebaliknya)
    setActiveScrollLink(null);
    setClickedScrollLink(null);

    // Ini penting: Jika kita baru saja kembali ke Home dari halaman lain
    // dan ada 'scrollTo' di state lokasi, maka lakukan scroll
    if (
      location.pathname === "/" &&
      location.state &&
      location.state.scrollTo
    ) {
      const targetId = location.state.scrollTo;
      setTimeout(() => {
        scroller.scrollTo(targetId, {
          smooth: true,
          offset: -70,
          duration: SCROLL_DURATION,
        });
        window.history.replaceState({}, document.title, location.pathname); // Hapus state setelah digunakan
        // Penting: Set aktif link target setelah scroll, bukan BERANDA
        setActiveScrollLink(targetId);
      }, 50);
    } else if (location.pathname === "/" && !location.state) {
      // Jika halaman utama dimuat tanpa state scroll (misal: refresh atau langsung ke /)
      // Atur BERANDA sebagai aktif secara default
      setActiveScrollLink("beranda");
    }
  }, [location.pathname, location.state]);

  const baseClasses = `${textColor} text-sm px-2 whitespace-nowrap transition-all duration-200`;
  const hoverClasses = `hover:underline hover:decoration-amber-500 hover:decoration-2 underline-offset-4`;
  const activeClasses = `underline decoration-amber-500 decoration-2 underline-offset-4`;

  return (
    <>
      {links.map((link) => {
        // Tentukan apakah link saat ini seharusnya aktif
        let isActiveByRouter = false;
        if (link.type === "route") {
          // Untuk link route (misal: Tentang Kami), aktif jika pathname cocok
          isActiveByRouter = location.pathname === link.to;
        } else {
          // type === "scroll" (BERANDA, GALERI, dll.)
          // Untuk link scroll, aktif jika di halaman utama
          // DAN (section-nya aktif secara spy OLEH react-scroll ATAU baru saja diklik secara manual)
          isActiveByRouter =
            location.pathname === "/" && activeScrollLink === link.to;

          // KONDISI KHUSUS UNTUK BERANDA:
          // Beranda hanya aktif jika location.pathname adalah "/" DAN
          // tidak ada scrollLink lain yang sedang aktif (artinya kita di bagian paling atas)
          // ATAU jika 'beranda' adalah yang sedang aktif oleh scroll spy
          if (link.label === "BERANDA" && location.pathname === "/") {
            // Ini akan membuat BERANDA aktif saat di home path
            // Tapi kita perlu memastikan dia non-aktif ketika section lain aktif
            isActiveByRouter = activeScrollLink === "beranda";
            // Jika tidak ada activeScrollLink yang disetel, dan kita di home, BERANDA harus aktif
            if (!activeScrollLink && location.pathname === "/") {
              isActiveByRouter = true;
            }
          }
        }

        const finalClasses = `${baseClasses} ${
          isActiveByRouter ? activeClasses : hoverClasses
        }`;

        return (
          <RouterNavLink
            key={link.label}
            to={link.type === "route" ? link.to : "/"}
            end={link.to === "/"}
            className={finalClasses}
            onClick={(e) => {
              if (link.type === "route") {
                setActiveScrollLink(null);
                setClickedScrollLink(null);
              } else {
                // Jika ini link type "scroll"
                e.preventDefault();

                if (location.pathname !== "/") {
                  navigate("/", { state: { scrollTo: link.to } });
                } else {
                  setClickedScrollLink(link.to);
                  setActiveScrollLink(link.to); // Langsung set aktif saat diklik

                  scroller.scrollTo(link.to, {
                    smooth: true,
                    offset: -70,
                    duration: SCROLL_DURATION,
                  });

                  setTimeout(() => {
                    setClickedScrollLink(null);
                    // Tidak perlu set setActiveScrollLink(null) di sini,
                    // karena onSetActive/onSetInactive dari react-scroll akan mengaturnya.
                  }, SCROLL_DURATION + 50);
                }
              }
            }}
          >
            {link.label}
          </RouterNavLink>
        );
      })}
    </>
  );
};

export default NavMenu;
