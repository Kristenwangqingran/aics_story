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
  const handleArticleClick = (articleId) => {
    window.location.href = `/articles/${articleId}.html`;
  };

  const articles = [
    {
      id: "article-1",
      date: "2024-11-07",
      title: "自筹资金组建一个由15人组成的团队，4年后将产品推向市场",
      description: "36岁的 Damjan Dano 花了17年时间打造了一家非常成功的服务公司，后来才决定打造一些更具可扩展性的东西。2018 年，他开始打造 Aqtos，虽然进展缓慢，但他终于开始向公众推出......",
      author: "By James Fleischmann",
      image: "/img/Person1.png"
    },
    {
      id: "article-2",
      date: "2024-09-26",
      title: "26 岁的放弃了一切，去创造更好的生活。17年后，月收入为29,000美元",
      description: "43 岁的 Sorin Alupoaie 抛弃了一切，和妻子从罗马尼亚搬到了都柏林。经过一段不确定的时期后，他的收入有所提高，然后辞去了工作，专注于自己的生意......",
      author: "By James Fleischmann",
      image: "/img/Person2.png"
    },
    {
      id: "article-3",
      date: "2024-07-04",
      title: "29岁的创始人每月入1.2万美元，正试图打造下一个独角兽",
      description: "29 岁的 Farid Shukurov 的目标是将他的产品 Beep 打造成独角兽。为了实现这一目标，尽管性格内向，他还是学习了销售技巧。他在这方面做得越来越好。他刚刚获得了 20 万美元的融资，上个月的收入为 12,278 美元......",
      author: "By James Fleischmann",
      image: "/img/Person3.png"
    },
    {
      id: "article-4",
      date: "2024-09-19",
      title: "你的初创公司是否需要更多功能？",
      description: "新功能并不总能增强你的产品。事实上，它们可能会减慢你的速度...",
      author: "By Oliver Stafurik",
      image: "/img/Person4.png"
    },
    {
      id: "article-5",
      date: "2024-09-19",
      title: "37岁的白手起家的初创公司创始人谈如何明智地而不是激进地储蓄",
      description: "2016年，Anshul搬到卢森堡，创办了托管服务公司 Razrtech。后来，他创立了 Socially，以满足为自己而非仅为客户打造业务的需求。如今，他的白手起家的初创公司年收入达 100 万美元......",
      author: "By anulee95",
      image: "/img/Person5.png"
    },
    {
      id: "article-6",
      date: "2024-09-16",
      title: "39岁的连续创业者有望从他的最新创业公司获得9位数的收益",
      description: "经过多年的连续创业，39 岁的 Richart Ruddie 终于重振旗鼓，出售了其他业务，为他的最新创业公司 CaptainCompliance.com 提供资金。自上个月上市以来，他的ARR已接近100万美元......",
      author: "By anulee95",
      image: "/img/Person6.png"
    },
    {
      id: "article-7",
      date: "2024-09-12",
      title: "39岁的创始人通过自由职业为自己的创业之旅筹集资金：“这是学习如何经营企业的最好方式",
      description: "Sashe Vuchkov 的梦想是建立一个或多个盈利的微型 SaaS 项目，但迄今为止他还没有取得重大成功。尽管如此，他仍然对自己的最新项目 JSFreak.com 充满信心。以下是他如何为盈利之旅筹集资金......",
      author: "By anulee95",
      image: "/img/Person7.png"
    },
    {
      id: "article-8",
      date: "2024-09-04",
      title: "25 岁的营销人员辞去工作，推出自己的 MVP：“只要我做自己喜欢的事，无论多少钱我都可以生活",
      description: "25 岁的 Alex Liu 于 6 月辞去工作，全身心投入到他的新产品AutoAE上。该产品于 7 月推出，目前他的 MRR 为 400 美元，还有六个月的运营时间......",
      author: "By James Fleischmann",
      image: "/img/Person8.png"
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
      <section className="-mt-16 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          {/* 注释掉 featuresData 卡片部分的开始
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
          注释掉 featuresData 卡片部分的结束 */}

          <div className="mt-16">
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
                    <Button 
                      variant="filled" 
                      onClick={() => handleArticleClick(article.id)}
                    >
                      详情
                    </Button>
                  </div>

                  <div className="mx-auto flex w-full justify-center px-4 md:w-4/12">
                    <Card 
                      className="shadow-lg border shadow-gray-500/10 rounded-lg cursor-pointer"
                      onClick={() => handleArticleClick(article.id)}
                    >
                      <CardHeader floated={false} className="relative h-56">
                        <img
                          alt="Card Image"
                          src={article.image}
                          className="h-full w-full"
                        />
                      </CardHeader>
                      <CardBody 
                        className="cursor-pointer"
                        onClick={() => handleArticleClick(article.id)}
                      >
                        <Typography 
                          variant="small" 
                          color="blue-gray" 
                          className="font-normal"
                        >
                          {article.date}
                        </Typography>
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="mb-3 mt-2 font-bold hover:text-blue-500"
                        >
                          {article.title}
                        </Typography>
                        <Typography 
                          className="font-normal text-blue-gray-500 hover:text-blue-700"
                        >
                          {article.description}
                        </Typography>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
