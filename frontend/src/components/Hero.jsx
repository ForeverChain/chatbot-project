import React from "react";
import { Link } from "react-router-dom";
import { Bot } from "lucide-react"; // Chatbot icon

const Hero = () => {
  return (
    <header className="relative bg-white">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        {/* Icon + Title */}
        <div className="flex items-center gap-3 mb-6">
          <Bot className="w-8 h-8 text-blue-600" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            AI Чатбот Платформ
          </h1>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mb-8">
          Өөрийн бизнесд зориулж{" "}
          <span className="font-semibold text-blue-600">ухаалаг чатботуудыг</span>{" "}
          хялбархан үүсгэж, удирдаарай
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/register"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Эхлэх
          </Link>
          <Link
            to="/login"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            Нэвтрэх
          </Link>
        </div>

        {/* Optional Illustration */}
        <div className="mt-12 w-full max-w-md">
          <img
            src="https://img.freepik.com/free-vector/ai-chatbot-illustration_33099-601.jpg"
            alt="AI Chatbot Hero"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
