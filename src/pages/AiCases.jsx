import { useState, useEffect } from "react";
import { Typography, Card, CardHeader, CardBody } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";

export function AiCases() {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(false);

  const aiCases = [
    {
      id: "case-1",
      title: "AI 写作助手月收入 10 万+",
      description: "从 0 到 1 打造 AI 写作助手，如何在 3 个月内实现月收入 10 万+",
      image: "/img/ai-case-1.png",
      date: "2024-03-15",
      author: "By David Chen",
      url: "/profile/ai-writing-assistant-100k-monthly-revenue"
    },
    {
      id: "case-2",
      title: "AI 绘画工具每月收入 8 万",
      description: "利用 Stable Diffusion 开发插件，帮助设计师提升工作效率，实现被动收入",
      image: "/img/ai-case-2.png",
      date: "2024-03-12",
      author: "By Sarah Zhang",
      url: "/profile/ai-art-tool-80k-monthly-revenue"
    },
    {
      id: "case-3",
      title: "AI 教育平台从 0 到估值 1000 万",
      description: "如何利用 AI 技术革新在线教育，6 个月内获得天使轮投资",
      image: "/img/ai-case-3.png",
      date: "2024-03-10",
      author: "By Michael Wang",
      url: "/profile/ai-education-platform-10m-valuation"
    },
    {
      id: "case-4",
      title: "AI 音频处理工具月收入 5 万",
      description: "独立开发者如何打造专业级 AI 音频处理工具，实现稳定收入",
      image: "/img/ai-case-4.png",
      date: "2024-03-08",
      author: "By Tom Wilson",
      url: "/profile/ai-audio-tool-50k-monthly-revenue"
    },
    {
      id: "case-5",
      title: "AI 营销文案助手日入 3000+",
      description: "一个程序员如何利用 GPT 技术开发营销文案工具，实现睡后收入",
      image: "/img/ai-case-5.png",
      date: "2024-03-05",
      author: "By Linda Li",
      url: "/profile/ai-marketing-copy-assistant-3k-daily-revenue"
    },
    {
      id: "case-6",
      title: "AI 视频剪辑工具月收入破百万",
      description: "从副业项目到全职创业，AI 视频工具如何打造爆款产品",
      image: "/img/ai-case-6.png",
      date: "2024-03-03",
      author: "By Jack Ma",
      url: "/profile/ai-video-editing-tool-1m-monthly-revenue"
    },
    {
      id: "case-7",
      title: "AI 数据分析平台获 500 万融资",
      description: "两位数据科学家如何将 AI 技术应用于商业智能领域",
      image: "/img/ai-case-7.png",
      date: "2024-03-01",
      author: "By Kevin Zhang",
      url: "/profile/ai-data-analytics-platform-5m-funding"
    },
    {
      id: "case-8",
      title: "AI 健康咨询机器人月收入 20 万",
      description: "医生和工程师联手打造 AI 健康顾问，实现规模化服务",
      image: "/img/ai-case-8.png",
      date: "2024-02-28",
      author: "By Dr. Wei Chen",
      url: "/profile/ai-health-consultant-200k-monthly-revenue"
    },
    {
      id: "case-9",
      title: "AI 法律助手首月收入 15 万",
      description: "如何利用 AI 技术简化法律咨询流程，让法律服务更加普及",
      image: "/img/ai-case-9.png",
      date: "2024-02-25",
      author: "By Robert Lee",
      url: "/profile/ai-legal-assistant-150k-first-month"
    },
    {
      id: "case-10",
      title: "AI 游戏开发工具估值 2000 万",
      description: "从游戏开发者到创业者，如何用 AI 革新游戏开发流程",
      image: "/img/ai-case-10.png",
      date: "2024-02-22",
      author: "By Alex Chen",
      url: "/profile/ai-game-dev-tool-20m-valuation"
    },
    {
      id: "case-11",
      title: "AI 翻译工具月收入 12 万",
      description: "小团队如何在竞争激烈的翻译市场中脱颖而出",
      image: "/img/ai-case-11.png",
      date: "2024-02-20",
      author: "By Emma Wang",
      url: "/profile/ai-translation-tool-120k-monthly-revenue"
    },
    {
      id: "case-12",
      title: "AI 简历优化工具日入 5000+",
      description: "前 HR 经理如何利用 AI 技术帮助求职者提升简历质量",
      image: "/img/ai-case-12.png",
      date: "2024-02-18",
      author: "By Carol Zhang",
      url: "/profile/ai-resume-optimizer-5k-daily-revenue"
    },
    {
      id: "case-13",
      title: "AI 社交媒体管理工具月收入 30 万",
      description: "如何打造一站式 AI 社媒运营工具，实现高速增长",
      image: "/img/ai-case-13.png",
      date: "2024-02-15",
      author: "By Mark Liu",
      url: "/profile/ai-social-media-tool-300k-monthly-revenue"
    },
    {
      id: "case-14",
      title: "AI 室内设计助手估值 800 万",
      description: "设计师和开发者联手打造 AI 设计工具的创业故事",
      image: "/img/ai-case-14.png",
      date: "2024-02-12",
      author: "By Lisa Chen",
      url: "/profile/ai-interior-design-assistant-8m-valuation"
    },
    {
      id: "case-15",
      title: "AI 配音平台月收入 25 万",
      description: "如何用 AI 技术降低视频制作成本，实现市场快速扩张",
      image: "/img/ai-case-15.png",
      date: "2024-02-10",
      author: "By Steve Wu",
      url: "/profile/ai-voice-over-platform-250k-monthly-revenue"
    },
    {
      id: "case-16",
      title: "AI 代码助手工具收入破千万",
      description: "从开发者工具到开发者平台，AI 编程助手的进化之路",
      image: "/img/ai-case-16.png",
      date: "2024-02-08",
      author: "By Tony Zhao",
      url: "/profile/ai-coding-assistant-10m-revenue"
    },
    {
      id: "case-17",
      title: "AI 表格处理工具月收入 18 万",
      description: "如何将枯燥的 Excel 工作自动化，打造刚需工具",
      image: "/img/ai-case-17.png",
      date: "2024-02-05",
      author: "By Nancy Li",
      url: "/profile/ai-spreadsheet-tool-180k-monthly-revenue"
    },
    {
      id: "case-18",
      title: "AI 心理咨询机器人估值 1500 万",
      description: "用 AI 技术让心理健康服务更加普及和平价",
      image: "/img/ai-case-18.png",
      date: "2024-02-03",
      author: "By Dr. Jane Zhang",
      url: "/profile/ai-therapy-bot-15m-valuation"
    },
    {
      id: "case-19",
      title: "AI 菜谱生成器月收入 7 万",
      description: "美食博主如何用 AI 技术实现内容创作自动化",
      image: "/img/ai-case-19.png",
      date: "2024-02-01",
      author: "By Helen Wang",
      url: "/profile/ai-recipe-generator-70k-monthly-revenue"
    },
    {
      id: "case-20",
      title: "AI 电商选品工具估值 3000 万",
      description: "用 AI 技术解决电商卖家痛点，实现快速增长",
      image: "/img/ai-case-20.png",
      date: "2024-01-30",
      author: "By Peter Chen",
      url: "/profile/ai-ecommerce-tool-30m-valuation"
    }
  ];

  // 懒加载处理
  const handleScroll = () => {
    const scrollPosition = window.innerHeight + window.pageYOffset;
    const scrollThreshold = document.documentElement.scrollHeight - 100;
    
    if (scrollPosition >= scrollThreshold && !loading && cases.length < aiCases.length) {
      loadMoreCases();
    }
  };

  const loadMoreCases = () => {
    if (loading) return;
    if (cases.length >= aiCases.length) return;
    
    setLoading(true);
    // 模拟加载更多数据
    setTimeout(() => {
      const nextCases = aiCases.slice(cases.length, cases.length + 6);
      if (nextCases.length > 0) {
        setCases(prev => [...prev, ...nextCases]);
      }
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    setCases(aiCases.slice(0, 6));
    const scrollHandler = () => handleScroll();
    window.addEventListener('scroll', scrollHandler);
    
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []); // 初始化时只运行一次

  // 监听 cases 和 loading 的变化
  useEffect(() => {
    if (!loading && cases.length < aiCases.length) {
      handleScroll();
    }
  }, [cases.length, loading]);

  const handleCaseClick = (url) => {
    window.location.href = `${url}.html`;
  };

  return (
    <>
      <div className="relative flex h-[66vh] items-center overflow-hidden">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative w-full">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Typography variant="h1" color="white" className="mb-6 font-black">
                AI变现指南
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                发现 AI 创业者的成功故事和变现之路
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <section className="relative bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((item) => (
              <Card 
                key={item.id} 
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => handleCaseClick(item.url)}
              >
                <CardHeader floated={false} className="relative h-56">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {item.date} · {item.author}
                  </Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    {item.title}
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    {item.description}
                  </Typography>
                </CardBody>
              </Card>
            ))}
          </div>
          {loading && (
            <div className="text-center mt-8 mb-4">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-gray-900 border-r-transparent"></div>
            </div>
          )}
          {!loading && cases.length === aiCases.length && (
            <div className="text-center mt-8 mb-4">
              <Typography color="blue-gray">已经到底啦 ~</Typography>
            </div>
          )}
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default AiCases;
