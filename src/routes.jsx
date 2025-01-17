import { Money, Profile, SignIn, SignUp } from "@/pages";

export const routes = [
  {
    name: "互联网创业",
    path: "/money",
    element: <Money />,
  },
  {
    name: "AI 变现指南",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "AI 提示词合集",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "AI 日报",
    path: "/sign-up",
    element: <SignUp />,
  },
];

export default routes;
