import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";

export function Prompt() {
  return (
    <>
      <div className="relative flex h-[66vh] items-center overflow-hidden">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative w-full">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Typography variant="h1" color="white" className="mb-6 font-black">
                AI 提示词合集
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                发现高质量的 AI 提示词，提升 AI 工具使用效率
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <section className="relative bg-white py-16">
        <div className="container mx-auto px-4">
          {/* 这里添加提示词内容 */}
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Prompt; 