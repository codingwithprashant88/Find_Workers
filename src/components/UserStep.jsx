
const steps = [
  {
    id: "01",
    title: "Sign-up and Login",
    desc: "the user can view all the information and features available in the system. This ensures that only authorized users can access the data and provides a personalized experience for each user.",
    bg: "bg-lime-400",
    circle: "bg-lime-300",
    width: "w-[78%]",
  },
  {
    id: "02",
    title: "Click Worker",
    desc: "The Worker menu is designed to collect and display information about laborers. Through this section, workers can provide details",
    bg: "bg-emerald-400",
    circle: "bg-emerald-300",
    width: "w-[85%]",
  },
  {
    id: "03",
    title: "Fill Information",
    desc: "The Worker menu allows workers to fill in their personal and professional information, such as skills, experience, location, and availability. This information is saved in the system and helps users find and contact suitable workers easily..",
    bg: "bg-slate-400",
    circle: "bg-slate-400",
    width: "w-[92%]",
  },
  {
    id: "04",
    title: "Submit",
    desc: "After submitting the information, it is stored securely in the system ",
    bg: "bg-purple-400",
    circle: "bg-purple-300",
    width: "w-full",
  },
];

export default function SummitPyramid() {
  return (
    <>
    <div className="min-h-full py-16 px-6 bg-[#f5f4ff]">
      <h1 className="text-center text-black text-3xl mb-10 font-medium font-serif">
        How to Apply
      </h1>

      <div className="max-w-6xl mx-auto space-y-6">
        {steps.map((step) => (
          <div key={step.id} className="flex items-center gap-6 ">
            
            {/* Left Circle */}
            <div
              className={`flex-shrink-0 h-16 w-16 lg:h-20 lg:w-20 
                          rounded-full flex items-center justify-center 
                          text-xl font-semibold ${step.circle}`}
            >
              {step.id}
            </div>

            {/* Pyramid Bar */}
            <div
              className={`relative ${step.bg} ${step.width}
                          rounded-full px-8 py-6 text-gray-900`}
            >
              <h3 className="text-xl font-semibold">
                {step.title}
              </h3>
              <p className="text-sm opacity-80 max-w-xl ">
                {step.desc}
              </p>

              {/* Right Icon Placeholder */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 text-3xl opacity-70">
                ★
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
    </>
  );
}
