import Link from "next/link";
     
     const mockUrls = ["https://s0wd1qidsl.ufs.sh/f/qhTpDMYmMd4OKYuATFlhf0uQzrZmignatMPkj6TKR8G5CDve", "https://s0wd1qidsl.ufs.sh/f/qhTpDMYmMd4ODc9kSPOv7GOxPQmR9htBuaTzrSjiE6dfqZsC","https://s0wd1qidsl.ufs.sh/f/qhTpDMYmMd4OBSRgmspcYm147lO0LV9WR5StKn8k3AfzohEx", "https://s0wd1qidsl.ufs.sh/f/qhTpDMYmMd4OjkmfWL4GsEgzj9aDtLfVkp4lQRw0eY3vbyAc"]
    const mockImages = mockUrls.map((url, index) => ({
      id:index +1,
      url,
      title: `Image ${index + 1}`,
    }));
     export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
     <div className="flex flex-wrap gap-4">{
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
