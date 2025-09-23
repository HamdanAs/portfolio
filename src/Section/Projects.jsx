import sitarungImg from "../assets/sitarung.jpg"; 
import sippanahImg from "../assets/sippanah.jpg"; 
import sipasarImg from "../assets/sipasar.png"; 
import embrawijayaImg from "../assets/embrawijaya.png"; 
import valeImg from "../assets/vale.png"; 
import wsnImg from "../assets/wsn.png"; 

export default function Projects() {
  return (
    <div className="w-full px-48 py-12">
      <h2 className="text-center text-3xl">Portfolio</h2>
      <div className="mt-8 grid grid-cols-3 gap-5">
        <div className="">
          <div className="h-72 bg-gray-800 rounded-xl grid items-center overflow-hidden p-2">
            <img src={sitarungImg} alt="" className="h-full rounded-lg"  />
          </div>
          <div className="mt-1">
            <h5 className="text-xl mb-2">Sitarung</h5>
            <p>
              Sitarung adalah Sistem informasi pertanahan. Web ini menyediakan informasi pertanahan untuk kebutuhan umum dan pengadaan tanah.
            </p>
          </div>
        </div>
        <div className="">
          <div className="h-72 bg-gray-800 rounded-xl grid items-center overflow-hidden p-2">
            <img src={sippanahImg} alt="" className="h-full rounded-lg"  />
          </div>
          <div className="mt-1">
            <h5 className="text-xl mb-2">Sippanah</h5>
            <p>
              Sitarung adalah Sistem informasi penyelenggaraan pertanahan. Web ini bertujuan untuk memfasilitasi pengajuan pengadaan tanah, sertifikasi tanah, dan perpanjangan HGU.
            </p>
          </div>
        </div>
        <div className="">
          <div className="h-72 bg-gray-800 rounded-xl grid items-center overflow-hidden p-2">
            <img src={sipasarImg} alt="" className="h-full rounded-lg"  />
          </div>
          <div className="mt-1">
            <h5 className="text-xl mb-2">Sipasar</h5>
            <p>
              Sipasar adalah aplikasi untuk memantau setoran yang masuk dari retribusi pasar melalui penyalar yang telah didaftarkan.
            </p>
          </div>
        </div>
        <div className="">
          <div className="h-72 bg-gray-800 rounded-xl grid items-center overflow-hidden p-2">
            <img src={embrawijayaImg} alt="" className="h-full rounded-lg"  />
          </div>
          <div className="mt-1">
            <h5 className="text-xl mb-2">Aplikasi Orientasi Mahasiswa</h5>
            <p>
              Platform online untuk orientasi universitas, yang mengintegrasikan fitur-fitur penting seperti pendaftaran pengguna, login, kuis, penilaian, dan manajemen data mahasiswa. Sistem ini secara efektif menyederhanakan proses orientasi bagi mahasiswa maupun administrator.
            </p>
          </div>
        </div>
        <div className="">
          <div className="h-72 bg-gray-800 rounded-xl grid items-center overflow-hidden p-2">
            <img src={valeImg} alt="" className="h-full rounded-lg"  />
          </div>
          <div className="mt-1">
            <h5 className="text-xl mb-2">Aplikasi Manajemen Karyawan</h5>
            <p>
              Sistem komprehensif untuk mengelola catatan karyawan, melacak kinerja, kehadiran, dan tugas terkait HR lainnya, yang memberikan solusi efisien untuk pengawasan dan administrasi karyawan.
            </p>
          </div>
        </div>
        <div className="">
          <div className="h-72 bg-gray-800 rounded-xl grid items-center overflow-hidden p-2">
            <img src={wsnImg} alt="" className="h-full rounded-lg"  />
          </div>
          <div className="mt-1">
            <h5 className="text-xl mb-2">Wireless Sensor Network</h5>
            <p>
              Sebuah aplikasi web yang terintegrasi dengan teknologi IoT, dirancang untuk memfasilitasi komunikasi yang mulus antar perangkat. Sistem ini menyediakan API dan MQTT broker untuk mendukung konektivitas dengan perangkat IoT, sekaligus berfungsi sebagai pusat manajemen serta pemantauan data telemetri.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
