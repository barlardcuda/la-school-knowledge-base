import RenderHome from "@/pages/home";

export default function Home() {
  return (
    <>
      <main className="min-h-[100dvh] bg-gray-50 hidden md:block">
        <RenderHome />
      </main>
      <div className="flex md:hidden w-full min-h-[100dvh] flex-col items-center justify-center bg-gray-100">
        <h1>ບໍ່ຮອງຮັບການສະແດງຜົນໃນອຸປະກອນຂະນາດນ້ອຍ</h1>
      </div>
    </>
  );
}