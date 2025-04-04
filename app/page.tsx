"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function Home() {
  const miniFeatures = [
    {
      title: "실시간 거래 모니터링",
      description:
        "은행, 카드사, 국세청 등 다양한 기관의 금융 거래 내역을 통합 분석하여 부정행위 가능성을 탐지합니다.",
      image: "https://placehold.co/24/png",
      reverse: false,
    },
    {
      title: "알고리즘 기반 분석 기술",
      description:
        "실제 사례를 기반으로 전문가들이 연구한 패턴과 머신러닝 알고리즘을 결합하여 의심 거래를 선별합니다.",
      image: "https://placehold.co/24/png",
      reverse: true,
    },
    {
      title: "자동 알림 시스템",
      description:
        "의심 거래가 발생하면 기업 대표나 담당자에게 카카오톡 알림 메시지와 이메일로 즉시 통보됩니다.",
      image: "https://placehold.co/24/png",
      reverse: false,
    },
  ];

  const features = [
    {
      title: "실시간 거래 모니터링",
      description:
        "은행, 카드사, 국세청 등 다양한 기관의 금융 거래 내역을 통합 분석하여 부정행위 가능성을 탐지합니다.",
      image: "https://placehold.co/500/png",
      reverse: false,
    },
    {
      title: "알고리즘 기반 분석 기술",
      description:
        "실제 사례를 기반으로 전문가들이 연구한 패턴과 머신러닝 알고리즘을 결합하여 의심 거래를 선별합니다.",
      image: "https://placehold.co/500/png",
      reverse: true,
    },
    {
      title: "자동 알림 시스템",
      description:
        "의심 거래가 발생하면 기업 대표나 담당자에게 카카오톡 알림 메시지와 이메일로 즉시 통보됩니다.",
      image: "https://placehold.co/500/png",
      reverse: false,
    },
  ];

  const faqs = [
    {
      question: "갖추 서비스란 무엇인가요?",
      answer:
        "㈜민이앤아이에서 개발 중인 GOTCHOO는 회사 공금에 대한 횡령, 배임 등 기업 내 부정행위 의심 거래를 빠르고 정확하게 탐지하는 소프트웨어입니다.",
    },
    {
      question: "갖추 서비스는 어떻게 작동하나요?",
      answer:
        "은행, 카드사, 국세청, 4대 보험 사이트 등을 통해 회사 정보와 금융 거래 내역을 모니터링합니다.",
    },
    {
      question: "갖추 서비스를 사용하면 어떤 이점이 있나요?",
      answer:
        "거래 내역을 직접 수집 및 분석하여 전산조작이나 문서 위조를 통한 부정행위 은폐가 어렵고, 모든 데이터는 회사 내부에 저장되어 외부 유출을 방지합니다.",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-white dark:bg-black text-black dark:text-white font-geist-sans">
      {/* 메인 섹션 */}
      <section className="w-full min-h-screen flex justify-center items-center px-6 sm:px-10">
        <div className="max-w-5xl w-full text-center space-y-12">
          <div className="space-y-6">
            <div className="text-3xl sm:text-4xl font-bold pt-5">LOGO</div>
            <h1 className="text-3xl sm:text-4xl font-bold pt-5">
              내가 몰랐던 우리 조직 내 횡령.
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              금융 데이터를 분석해 횡령과 배임을 실시간 탐지하는 보안 솔루션
            </p>
            <a
              className="inline-block bg-black dark:bg-white text-white dark:text-black rounded-full px-8 py-4 text-base sm:text-lg font-medium hover:opacity-80 transition pt-3"
              target="_blank"
              rel="noopener noreferrer"
              href="https://gotchoo.net"
            >
              더 알아보기
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10 pt-10 text-center">
            {miniFeatures.map((e) => (
              <div key={e.title} className="flex flex-col items-center gap-2">
                <Image
                  src={e.image}
                  alt=""
                  width={24}
                  height={24}
                  className="mb-2 dark:invert"
                />
                <h3 className="text-lg font-semibold mb-1">{e.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {e.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 기능 섹션 */}
      <section className="w-full px-6 sm:px-10 py-20">
        <div className="max-w-5xl mx-auto space-y-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            클릭 한번으로 잡히는 횡령.
          </h2>

          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row ${
                feature.reverse ? "sm:flex-row-reverse" : ""
              } items-center gap-10`}
            >
              <div className="sm:w-1/2 text-center sm:text-left">
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>

              <div className="sm:w-1/2 flex justify-center">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={300}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full px-6 sm:px-10 py-20">
        <div className="w-full max-w-2xl bg-gray-100 dark:bg-gray-900 rounded-xl p-8 text-center mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            내가 몰랐던 우리 조직 내 횡령.
          </h2>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6">
            매달 49,000원으로, 자금 사고를 막아보세요.
          </p>
          <a
            href="https://gotchoo.net"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black dark:bg-white text-white dark:text-black rounded-full px-8 py-4 text-base sm:text-lg font-medium hover:opacity-80 transition"
          >
            더 알아보기
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full px-6 sm:px-10 py-20">
        <div className="max-w-3xl mx-auto text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
            자주 묻는 질문
          </h2>

          <div className="space-y-4">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
