import { FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { LuInstagram } from "react-icons/lu";
import { FiYoutube } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { useForm } from "react-hook-form";
import { FaTiktok } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

const validationSchema = yup.object({
  name: yup.string().required("Nama wajib diisi"),
  email: yup
    .string()
    .email("Format email tidak valid")
    .required("Email wajib diisi"),
  asal: yup.string().required("Asal Kota wajib diisi"),
  keperluan: yup.string().required("Keperluan anda apa?"),
});

const ButtonCustom = ({ onClick, children, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`w-full h-12 rounded-full font-medium transition-all duration-200 ${
      disabled
        ? "bg-gray-600 text-gray-400 cursor-not-allowed"
        : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl"
    }`}
  >
    {children}
  </button>
);

function CardKontak() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const watchedFields = watch();

  const isFormValid =
    watchedFields.name &&
    watchedFields.email &&
    watchedFields.asal &&
    watchedFields.keperluan &&
    Object.keys(errors).length === 0;

  const onSubmit = (data) => {
    const message = `*FORMULIR KONTAK - SEKOLAH PARANORMAL*

    📝 *Nama:* ${data.name}
    📧 *Email:* ${data.email}
    🏙️ *Asal Kota:* ${data.asal}
    📋 *Keperluan:* ${data.keperluan}
    
    ---
    Pesan ini dikirim melalui formulir website Sekolah Paranormal.
    Mohon segera direspons. Terima kasih! 🙏`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = `628811414673`;
    const whatsapUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsapUrl, `_blank`);
    alert(
      "Pesan berhasil disiapkan! WhatsApp akan terbuka dengan pesan yang sudah terformat."
    );
  };

  return (
    <section className="w-full h-auto flex justify-center items-center bg-white/10">
      <div className="w-full flex flex-col md:flex-row justify-center items-center py-5 md:p-20 gap-10">
        <div className=" flex flex-col w-[90%] md:w-[50%] gap-3">
          <h1 className="flex flex-col text-white">
            Kontak Kami{" "}
            <span
              className="text-2xl md:text-5xl font-bold"
              style={{
                background:
                  "linear-gradient(to top, #906126, #f3cb51, #f3cb51, #a87c2d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Mari Bergabung Dengan Kami
            </span>
          </h1>
          <p className="text-white">
            Belajar di Sekolah Paranormal bukan sekadar hadir di kelas, tapi
            juga kesiapan lahir dan batin.
            <ul>
              <li>Mulailah dengan :</li>
              <li> - Adab </li>
              <li>- Kecerdasan </li>
              <li>- Niat yang lurus </li>
              <li>- Kesungguhan </li>
              <li>- Kesiapan Biaya </li>
              <li>
                - Hubungan yang dekat dengan guru Serta Istiqomah dalam proses
              </li>
            </ul>
          </p>
          <div className="flex items-center gap-5 text-white">
            <FaWhatsapp />
            <span>0851 3333 9854 / 0857 7161 8600</span>
          </div>
          <div className="flex items-center gap-5 text-white">
            <TfiEmail />
            <a
              href="mailto:sekolahparanormal@gmail.com"
              className="hover:underline"
            >
              sekolahparanormal@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-5 text-white">
            <LuInstagram />
            <a
              href="https://www.instagram.com/sekolah_paranormal?igsh=MWR6dXVrdDV5eGQ0OQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              sekolahparanormal
            </a>
          </div>
          <div className="flex items-center gap-5 text-white">
            <FiYoutube />
            <a
              href="https://youtube.com/@Sekolah_Paranormal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              sekolahparanormal
            </a>
          </div>
          <div className="flex items-center gap-5 text-white">
            <FaTiktok />
            <a
              href="https://www.tiktok.com/@sekolahparanormal?_t=ZS-8xzFjysJeYj&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              sekolah paranormal
            </a>
          </div>
          <div className="flex items-center gap-5 text-white">
            <GrLocation className="text-7xl md:text-5xl" />
            <a
              href="https://maps.google.com/?q=alamat+lengkap+anda"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Jl.AMD MANUNGGAL 10 , RT: 003 / RW: 02 - NO.151 KELURAHAN KEDAUNG
              WETAN KEC.NEGLASARI KOTA TANGGERANG 15128. Patokan (Gg Teratai 2 ,
              toko agen Andi Belakang RT agus)
            </a>
          </div>
        </div>
        <div className="w-[90%] md:w-[50%] bg-[#202020] rounded-4xl p-5">
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-white text-sm font-medium mb-2 px-1">
                Nama
              </label>
              <input
                id="name"
                type="text"
                {...register("name")}
                autoComplete="off"
                placeholder="Masukkan nama lengkap"
                className="inputan"
              />
              {errors.name && (
                <p className="text-yellow-400 text-xs sm:text-sm mt-1 px-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-white text-sm font-medium my-4 px-1">
                Email
              </label>
              <input
                id="email"
                type="text"
                {...register("email")}
                autoComplete="off"
                placeholder="nama@email.com"
                className="inputan"
              />
              {errors.email && (
                <p className="text-yellow-400 text-xs sm:text-sm mt-1 px-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-white text-sm font-medium my-4 px-1">
                Asal Kota
              </label>
              <input
                id="asal"
                type="text"
                {...register("asal")}
                autoComplete="off"
                placeholder="Kota asal Anda"
                className="inputan"
              />
              {errors.email && (
                <p className="text-yellow-400 text-xs sm:text-sm mt-1 px-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-white text-sm font-medium my-4 px-1">
                Keperluan
              </label>
              <input
                id="keperluan"
                type="text"
                rows="4"
                {...register("keperluan")}
                autoComplete="off"
                placeholder="Jelaskan keperluan atau pertanyaan Anda..."
                className="w-full rounded-2xl bg-white/10 p-4 text-white placeholder-gray-400 border border-transparent focus:border-blue-500 focus:outline-none transition-all duration-200 resize-none"
              />
            </div>
            <div className="py-5">
              <ButtonCustom type="submit" disabled={!isFormValid}>
                {isFormValid ? "Kirim ke WhatsApp" : "Lengkapi Form"}
              </ButtonCustom>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CardKontak;
