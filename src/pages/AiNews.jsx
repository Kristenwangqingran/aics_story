import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";

export function AiNews() {
  return (
    <>
      <div className="relative flex h-[66vh] items-center overflow-hidden">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative w-full">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Typography variant="h1" color="white" className="mb-6 font-black">
                AI 日报
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                每日更新 AI 领域最新动态和重要新闻
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <section className="relative bg-white py-16">
        <div className="container mx-auto px-4">
          {/* 这里添加新闻内容 */}
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default AiNews; 