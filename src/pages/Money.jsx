import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";

export function Money() {
  const articles = [
    {
      date: "Nov 7, 2024",
      title: "Self funding a team of 15 people to get a product to market after 4 years",
      description: "Damjan Dano has spent four years funding a product out of pocket and he's about to launch it. Here's a peek at his finances.",
      author: "by James Fleischmann",
      image: "/img/person1.png"  // 使用对应的图片路径
    },
    {
      date: "Oct 19, 2024",
      title: "Does your startup need more features?",
      description: "New features won't always enhance your product. In fact, they can slow you down.",
      author: "by Oliver Stafurik",
      image: "/img/person2.png"
    },
    {
      date: "Sep 26, 2024",
      title: "26-year-old dropped everything to build a better life. 17 years later, he's making $29k MRR.",
      description: "Sorin Alupoaie left everything behind, built a life for himself, and started a business. Now it's making $24k MRR. Here's a peek at his finances.",
      author: "by James Fleischmann",
      image: "/img/person3.png"
    }
  ];

  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                创业故事集
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
              你想赚钱吗，你想了解人们在经营企业时花费、赚取、储蓄和投资了多少钱的故事和细目，
              以及指导他们做出财务决策的策略的权威资源。如果你对此感兴趣，那么你来对地方了。
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>

          {articles.map((article, index) => (
            <div key={index} className="border-b border-blue-gray-50">
              <div className="flex flex-wrap items-center py-8">
                <div className="mx-auto w-full px-4 md:w-5/12">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                    <FingerPrintIcon className="h-8 w-8 text-white" />
                  </div>

                  <Typography
                    variant="h3"
                    className="mb-3 font-bold"
                    color="blue-gray"
                  >
                    {article.title}
                  </Typography>
                  <Typography className="mb-8 font-normal text-blue-gray-500">
                    {article.description}
                  </Typography>
                  <Button variant="filled">详情</Button>
                </div>

                <div className="mx-auto flex w-full justify-center px-4 md:w-4/12">
                  <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                    <CardHeader floated={false} className="relative h-56">
                      <img
                        alt="Card Image"
                        src={article.image}
                        className="h-full w-full"
                      />
                    </CardHeader>
                    <CardBody>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {article.date}
                      </Typography>
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-3 mt-2 font-bold"
                      >
                        {article.title}
                      </Typography>
                      <Typography className="font-normal text-blue-gray-500">
                        {article.description}
                      </Typography>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* 注释掉团队展示部分的开始 
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle section="Our Team" heading="Here are our heroes">
            According to the National Oceanic and Atmospheric Administration,
            Ted, Scambos, NSIDClead scentist, puts the potentially record
            maximum.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-xl fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>
      注释掉团队展示部分的结束 */}
      {/* 注释掉 Co-Working 和 Contact Us 部分的开始
      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle section="Co-Working" heading="Build something">
            Put the potentially record low maximum sea ice extent tihs year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle section="Contact Us" heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex gap-8">
              <Input variant="outlined" size="lg" label="Full Name" />
              <Input variant="outlined" size="lg" label="Email Address" />
            </div>
            <Textarea variant="outlined" size="lg" label="Message" rows={8} />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button variant="gradient" size="lg" className="mt-8" fullWidth>
              Send Message
            </Button>
          </form>
        </div>
      </section>
      注释掉 Co-Working 和 Contact Us 部分的结束 */}
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Money;
