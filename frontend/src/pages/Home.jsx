import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

const Home = () => {
  // Feature images with real URLs
  const featureImages = {
    easy: "https://img.icons8.com/color/96/easy.png",
    ai: "https://img.icons8.com/color/96/artificial-intelligence.png",
    customizable: "https://img.icons8.com/color/96/design--v1.png",
    social: "https://img.icons8.com/color/96/share--v1.png",
    analytics: "https://img.icons8.com/color/96/combo-chart--v1.png",
    templates: "https://img.icons8.com/color/96/template.png"
  };

  return (
    <div className="home min-h-screen text-gray-800">
      {/* Header */}
      <Hero />

      {/* Features */}
      <main className="px-6 py-16">
        <section className="features grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              key: "easy",
              title: "Хэрэглэхэд хялбар",
              desc: "Програмчлалын мэдлэггүйгээр чатботуудыг үүсгээрэй. Манай ойлттой интерфэйс бүх хүнд бот үүсгэхийг хялбар болгоно."
            },
            {
              key: "ai",
              title: "AI Дэмжлэгтэй",
              desc: "Байгалийн яриа хийхийн тулд өндөр шатны AI-г ашиглаарай. Манай ботууд контекстийг ойлгодог бөгөөд хүний шиг хариултууд өгдөг."
            },
            {
              key: "customizable",
              title: "Өөрчлөх боломжтой",
              desc: "Өөрийн тодорхой шаардлагад нийцүүлэн чатботоо өөрчил. Хувийн болон дүр харагдах байдлыг өөрчлөх боломжтой."
            },
            {
              key: "social",
              title: "Нийтийн сүлжээтэй холбох",
              desc: "Чатботуудаа Facebook, Instagram болон бусад платформуудтай холбоорой. Хэрэглэгчидтэй холбогдох боломжтой."
            },
            {
              key: "analytics",
              title: "Статистик",
              desc: "Дэлгэрэнгүй статистикаар гүйцэтгэлийг хянаарай. Хэрэглэгчийн зан араншинийг ойлгоод чатботынхаа туршлагыг сайжруулаарай."
            },
            {
              key: "templates",
              title: "Загварууд",
              desc: "Үйлчилгээний дэмжлэг, хүсэлт бүртгэх, онлайн худалдаа болон бусад загваруудаар хурдан эхлээрэй."
            }
          ].map((f) => (
            <div
              key={f.key}
              className="feature card bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="feature-image flex justify-center mb-4">
                <img
                  src={featureImages[f.key]}
                  alt={f.title}
                  className="w-20 h-20"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2 text-center">
                {f.title}
              </h2>
              <p className="text-gray-600 text-center">{f.desc}</p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="cta text-center mt-20">
          <h2 className="text-3xl font-bold mb-4">
            Анхны чатботоо үүсгэхэд бэлэн үү?
          </h2>
          <p className="text-gray-600 mb-6">
            Манай платформыг аль хэдийнэ ашиглаж буй мянган байгууллагын нэг болоорой
          </p>
          <Link
            to="/register"
            className="btn primary bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Чатботоо үүсгэх
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Home;
