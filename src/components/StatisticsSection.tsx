"use client";

import { Card, Col, Row, Statistic } from "antd";
import {
  BookOpen,
  GraduationCap,
  Users,
  Sparkles,
  ArrowUpLeft,
} from "lucide-react";

const statistics = [
  {
    id: 1,
    value: 1250,
    title: "دوره آموزشی",
    description: "دوره تخصصی برای یادگیری مهارت‌های جدید",
    icon: BookOpen,
    suffix: "+",
  },
  {
    id: 2,
    value: 320,
    title: "مدرس و تولیدکننده محتوا",
    description: "متخصصانی که دانش خود را با شما به اشتراک می‌گذارند",
    icon: GraduationCap,
    suffix: "+",
  },
  {
    id: 3,
    value: 48000,
    title: "دانشجوی محتوا پلاس",
    description: "کاربر در مسیر یادگیری و رشد مهارت‌های حرفه‌ای",
    icon: Users,
    suffix: "+",
  },
];

export default function StatisticsSection() {
  return (
    <section className="w-full px-4 py-10 md:px-6 md:py-14" dir="rtl">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-7 flex flex-col items-center text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-(--primary-light) px-3.5 py-1.5 text-xs font-bold text-(--primary)">
            <Sparkles size={14} />
            محتوا پلاس در یک نگاه
          </span>

          <h2 className="text-2xl font-black tracking-tight text-(--text) md:text-3xl">
            یادگیری، با یک جامعه رو به رشد
          </h2>

          <p className="mt-3 max-w-[620px] text-sm leading-7 text-(--muted) md:text-base">
            هر روز افراد بیشتری برای یادگیری مهارت‌های جدید و رشد حرفه‌ای
            مسیر خودشان را با محتوا پلاس ادامه می‌دهند.
          </p>
        </div>

        <Row gutter={[16, 16]}>
          {statistics.map((stat) => {
            const Icon = stat.icon;

            return (
              <Col key={stat.id} xs={24} md={8}>
                <Card
                  bordered
                  className="group h-full! overflow-hidden! rounded-[22px]! border-(--border)! bg-white! transition-all! duration-300 hover:-translate-y-1! hover:border-(--border-hover)! hover:shadow-[0_18px_45px_rgba(45,60,110,0.08)]!"
                  styles={{
                    body: {
                      padding: 0,
                    },
                  }}
                >
                  <div className="relative overflow-hidden p-6 md:p-7">
                    <div className="pointer-events-none absolute -left-10 -top-10 h-28 w-28 rounded-full bg-(--primary)/5 blur-2xl transition-transform duration-500 group-hover:scale-125" />

                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-(--primary-light) text-(--primary) transition-all duration-300 group-hover:bg-(--primary) group-hover:text-white">
                        <Icon size={23} strokeWidth={1.8} />
                      </div>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all duration-300 group-hover:bg-(--primary-hover) group-hover:text-(--primary)">
                        <ArrowUpLeft size={17} />
                      </span>
                    </div>

                    <div className="mt-7">
                      <Statistic
                        value={stat.value}
                        suffix={stat.suffix}
                        formatter={(value) =>
                          new Intl.NumberFormat("fa-IR").format(
                            Number(value),
                          )
                        }
                        valueStyle={{
                          color: "var(--text)",
                          fontSize: 32,
                          fontWeight: 900,
                          lineHeight: 1.2,
                          fontFamily: "inherit",
                        }}
                      />

                      <h3 className="mt-3 text-base font-extrabold text-(--text)">
                        {stat.title}
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-(--muted)">
                        {stat.description}
                      </p>
                    </div>

                    <div className="mt-6 h-1 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-1/3 rounded-full bg-gradient-to-l from-(--primary) to-(--accent) transition-all duration-500 group-hover:w-2/3" />
                    </div>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
}