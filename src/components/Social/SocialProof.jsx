import React, { useState } from "react";
import FeedbackForm from "../Feedback/FeedbackForm";

const SocialProof = () => {
  const [activeTab, setActiveTab] = useState("stats");
  const [openFaq, setOpenFaq] = useState(false);

  return (
    <>
      <div className="w-full bg-[#f5f4ff] border rounded-xl shadow-sm">
        <h1 className="text-3xl font-semibold text-center mt-10 mb-6">
          Why Hire From Find Workers!
        </h1>

        {/* Tabs */}
        <div className="flex text-sm font-medium text-center">
          {["stats", "services", "faq"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full p-4 transition ${
                activeTab === tab
                  ? "bg-white font-semibold"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {tab === "stats"
                ? "Statistics"
                : tab === "services"
                ? "Services"
                : "FAQ"}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 bg-white">
          {/* Statistics */}
          {activeTab === "stats" && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              <div>
                <h2 className="text-2xl font-bold">1L+</h2>
                <p className="text-gray-600">
                  Workers trust and use our platform
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">10,000+</h2>
                <p className="text-gray-600">Contractors onboarded</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">200+</h2>
                <p className="text-gray-600">Companies hiring in bulk</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">100+</h2>
                <p className="text-gray-600">Active projects</p>
              </div>
            </div>
          )}

          {/* Services */}
          {activeTab === "services" && (
            <ul className="space-y-4 text-gray-700">
              <li>✅ Instant Worker Matching</li>
              <li>✅ Verified & Trusted Profiles</li>
              <li>✅ Flexible Hiring Options</li>
              <li>✅ Wide Skill Coverage</li>
            </ul>
          )}

          {/* FAQ */}
          {activeTab === "faq" && (
            <div className="border rounded-lg">
              <button
                onClick={() => setOpenFaq(!openFaq)}
                className="w-full flex justify-between items-center p-4 font-medium"
              >
                What are the best places to find workers?
                <span>{openFaq ? "−" : "+"}</span>
              </button>

              {openFaq && (
                <div className="p-4 border-t text-gray-600">
                  <ul className="list-disc ml-5 space-y-1">
                    <li>Job boards (Indeed, Naukri)</li>
                    <li>Freelance platforms</li>
                    <li>Social media groups</li>
                    <li>Local staffing agencies</li>
                    <li>Employee referrals</li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <FeedbackForm />
    </>
  );
};

export default SocialProof;
