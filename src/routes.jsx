import { Money, AiCases, Prompt, AiNews } from "@/pages";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export const routes = [
  {
    name: "互联网创业",
    path: "/money",
    element: <Money />,
  },
  {
    name: "AI变现指南",
    path: "/aicases",
    element: <AiCases />,
  },
  {
    name: "AI 提示词合集",
    path: "/prompt",
    element: <Prompt />,
  },
  {
    name: "AI 日报",
    path: "/ainews",
    element: <AiNews />,
  },
];

export default routes;
