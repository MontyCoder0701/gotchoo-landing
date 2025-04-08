"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

function ConsultationDialog({ children }: { children: React.ReactNode }) {
  const [ctaOpen, setCtaOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCtaOpen(false);
    toast("✉️ 상담 신청이 완료되었습니다.", {
      description: "빠른 시일 내 연락 드리겠습니다.",
    });
  };

  return (
    <Dialog open={ctaOpen} onOpenChange={setCtaOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <DialogHeader>
            <DialogTitle>도입 문의하기</DialogTitle>
            <DialogDescription>
              친절한 상담으로 빠르게 안내 드리겠습니다.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone">연락처</label>
            <Input
              id="phone"
              name="phone"
              className="col-span-3"
              type="tel"
              placeholder="+82"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="company-size">기업 규모</label>

            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="규모를 선택하세요" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectLabel>기업 규모</SelectLabel>
                  <SelectItem value="1-10">1~10인</SelectItem>
                  <SelectItem value="11-50">11~50인</SelectItem>
                  <SelectItem value="51-100">51~100인</SelectItem>
                  <SelectItem value="100+">100+인</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="concerns">
              어떤 안내가 필요하신가요? (복수 선택 가능)
            </label>

            <div className="col-span-3 flex items-center gap-2">
              <Checkbox id="1" />
              <label htmlFor="1" className="text-sm text-muted-foreground">
                어떻게 횡령을 잡는지, 데모를 무료로 보고 싶어요.
              </label>
            </div>

            <div className="col-span-3 flex items-center gap-2">
              <Checkbox id="2" />
              <label htmlFor="2" className="text-sm text-muted-foreground">
                도입 비용 견적을 알아보고 싶어요.
              </label>
            </div>

            <div className="col-span-3 flex items-center gap-2">
              <Checkbox id="3" />
              <label htmlFor="3" className="text-sm text-muted-foreground">
                보안 문제가 없을지 기술적 안내가 필요해요.
              </label>
            </div>
          </div>

          <DialogFooter>
            <Button type="submit">문의하기</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default function Ceo() {
  const miniFeatures = [
    {
      title: "모든 거래를 한눈에, 실시간 감시",
      description:
        "여러 기관의 데이터를 통합 분석해 사각지대 없는 실시간 감시를 제공합니다.",
      image: "/zoom.png",
      reverse: false,
    },
    {
      title: "의심 거래를 골라내는 강력한 알고리즘",
      description:
        "실제 사례를 기반으로 전문가들이 연구한 패턴과 알고리즘을 결합하여 의심 거래를 선별합니다.",
      image: "/shield.png",
      reverse: true,
    },
    {
      title: "언제 어디서나, 바로 알림",
      description:
        "의심 거래가 발생하면 실시간 알림으로 빠르게 대응할 수 있습니다.",
      image: "/chat.png",
      reverse: false,
    },
  ];

  const features = [
    {
      title: "모든 거래를 한눈에, 실시간 감시",
      description:
        "은행, 카드사, 국세청 등 다양한 기관의 금융 거래 내역을 통합 분석하여 부정행위 가능성을 탐지합니다.",
      image: "/account-list.png",
      reverse: false,
    },
    {
      title: "의심 거래를 골라내는 강력한 알고리즘",
      description:
        "실제 사례를 기반으로 전문가들이 연구한 패턴과 알고리즘을 결합하여 의심 거래를 선별합니다.",
      image: "/alarm-list.png",
      reverse: true,
    },
    {
      title: "언제 어디서나, 바로 알림",
      description:
        "의심 거래가 발생하면 실시간 알림으로 빠르게 대응할 수 있습니다. 기업 대표나 담당자에게 카카오톡 알림 메시지와 이메일로 즉시 통보됩니다.",
      image: "/kakao-alarm.png",
      reverse: false,
    },
  ];

  const faqs = [
    {
      question:
        "GotChoo가 데이터를 수집하기 위해 활용하는 기술은 무엇인지, 법적 문제는 없는지 궁금합니다.",
      answer:
        "GotChoo는 기업의 공동인증서를 이용, 은행·카드·국세청·4대보험 사이트에 있는 기업 거래 Data를 Scraping 방식으로 수집하고 있습니다. 이를 위해 저희 민이앤아이는 신뢰성 있는 Data Scraping 기술을 보유한 알디스데이터와 제휴하여 GotChoo갖추를 개발하였습니다. 아울러 Data Scraping은 여러 시중은행의 인터넷뱅킹에서도 활용하고 있을 정도로, 법적·기술적으로 검증된 기술입니다.",
    },
    {
      question:
        "기업에서 사용하는 ERP나 자금관리프로그램에도 횡령을 예방하는 기능이 있지 않나요?",
      answer:
        "일부 ERP나 자금관리 프로그램의 경우, 사용자별 권한을 분리하여 지출을 통제하거나 회계상 문제가 발생하면 경고하는 방식으로 횡령을 예방한다고 주장합니다. 그러나 이러한 방식은 감사시스템과 마찬가지로 CEO나 오너의 직접 확인이 어렵고, 조작이나 은폐에 취약하며, 다양한 방식의 횡령에 대처하거나 탐지하기 어렵다는 한계가 있습니다. 무엇보다 GotChoo는 작은 규모의 기업이나 비영리기관·단체·사업체에서도 사용할 수 있는, 범용성과 확장성이 뛰어난 프로그램입니다.",
    },
    {
      question: "GotChoo를 이용하려면 어떻게 해야 하나요?",
      answer:
        "홈페이지에서 회원가입 및 설치플랜을 선택하신 후 GotChoo 설치파일을 다운로드 받아 실행시키면 PC에 설치할 수 있습니다. 설치 후 바탕화면에 생긴 GotChoo 아이콘을 클릭하시면 프로그램이 실행됩니다. 실행후 안내에 따라 기업/기관위치, 급여일, 은행계좌, 신용카드, 홈택스, 4대사회보험, 직원정보를 등록하고, 알람/리포트 수신정보와 탐지주기를 설정하면 미리 설정된 주기에 따라 자동으로 거래내역을 수집 분석하여 횡령 등 부정행위 의심거래를 탐지하여 드립니다. 최초 사용자 등록후 3개월동안 무료로 이용하실 수 있습니다.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center bg-white dark:bg-black text-black dark:text-white">
      {/* Sticky Top Navigation */}
      <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-black/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-4 flex items-center justify-between">
          <Link
            href="https://www.gotchoo.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/logo.png" alt="로고" width={143} height={32} />
          </Link>

          <nav className="space-x-4 hidden sm:block">
            <ConsultationDialog>
              <Button>도입 문의</Button>
            </ConsultationDialog>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full min-h-screen flex justify-center items-center px-6 sm:px-10 pt-20 sm:pt-0">
        <div className="max-w-5xl w-full text-center space-y-12">
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold pt-5">
              우리 회사 자금, <br />
              지금도 새고 있을지 모릅니다.
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              금융 데이터 분석으로 한눈에 횡령을 잡아내는 똑똑한 솔루션
            </p>

            <ConsultationDialog>
              <Button className="p-6 sm:w-fit w-full max-w-3xl text-xl sm:text-2xl font-medium">
                도입 문의
              </Button>
            </ConsultationDialog>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10 pt-10 text-center">
            {miniFeatures.map((e) => (
              <div key={e.title} className="flex flex-col items-center gap-2">
                <Image
                  src={e.image}
                  alt=""
                  width={70}
                  height={70}
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

      {/* Features Section */}
      <section id="features" className="w-full px-6 sm:px-10 py-20">
        <div className="max-w-5xl mx-auto space-y-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            클릭 한 번이면, 자금 리스크 끝.
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
                  width={700}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="consult" className="w-full px-6 sm:px-10 py-20">
        <div className="w-full max-w-3xl bg-gray-100 dark:bg-gray-900 rounded-xl p-8 text-center mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            우리 회사 자금, 지금도 새고 있을지 모릅니다.
          </h2>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6">
            월{" "}
            <a
              className="text-blue-600 font-semibold"
              href="https://www.gotchoo.net/guide/03_fare_n.htm?smenu=sub2&stitle=subtitle2_3"
              target="_blank"
              rel="noopener noreferrer"
            >
              49,000원
            </a>
            으로 수천만 원의 손실을 미리 막을 수 있습니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <div className="w-full sm:w-fit">
              <ConsultationDialog>
                <Button className="w-full sm:w-fit p-6 max-w-3xl text-xl sm:text-2xl font-medium">
                  도입 문의
                </Button>
              </ConsultationDialog>
            </div>

            <div className="w-full sm:w-fit">
              <Button
                variant="outline"
                className="w-full sm:w-fit p-6 max-w-3xl text-xl sm:text-2xl font-medium"
              >
                <Link
                  href="https://www.gotchoo.net/aboutus/02_function.htm?smenu=sub1&stitle=subtitle1_2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  서비스 소개
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full px-6 sm:px-10 py-20">
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
            <div>
              더 궁금하신 점은{" "}
              <a
                className="text-blue-600 font-semibold"
                href="https://www.gotchoo.net/client/06_data.htm?smenu=sub4&stitle=subtitle4_6"
                target="_blank"
                rel="noopener noreferrer"
              >
                홈페이지 FAQ
              </a>
              를 확인해주세요.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
