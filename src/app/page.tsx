import Link from "next/link";
     
     const mockUrls = ["https://s0wd1qidsl.ufs.sh/f/qhTpDMYmMd4OKYuATFlhf0uQzrZmignatMPkj6TKR8G5CDve", "https://s0wd1qidsl.ufs.sh/f/qhTpDMYmMd4ODc9kSPOv7GOxPQmR9htBuaTzrSjiE6dfqZsC","https://s0wd1qidsl.ufs.sh/f/qhTpDMYmMd4OBSRgmspcYm147lO0LV9WR5StKn8k3AfzohEx", "https://s0wd1qidsl.ufs.sh/f/qhTpDMYmMd4OjkmfWL4GsEgzj9aDtLfVkp4lQRw0eY3vbyAc"]
    const mockImages = mockUrls.map((url, index) => ({
      id:index +1,
      url,
      title: `Image ${index + 1}`,
    }));
     export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#FFFF00] to-[#FF0000] brightness-90 drop-shadow-[0_2px_15px_rgba(255,69,0,0.8)">
      <h1 className="text-black underline font-extrabold text-5xl text-yellow-300 [text-shadow:_0_0_10px_#f59e0b,_0_0_20px_#ef4444,_0_0_30px_#b91c1c,_0_0_40px_#7f1d1d] break-keep absolute top-0 left-125">the BEST athletes in the world</h1>
       <Link href="/layer02">Click on me</Link>
     <div className="flex flex-row flex-wrap gap-56">{
      mockImages.map((image) => (
        <div key ={image.id} className="w-48">
          <img src={image.url} alt="image" />
        </div>
      ))
    }
    </div>

    </main>
  );
}
