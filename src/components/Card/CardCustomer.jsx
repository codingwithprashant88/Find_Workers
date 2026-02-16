import React from "react";
import SocialProof from "../Social/SocialProof";

function CardCustomer() {
  return (
 
    <>
<section className="w-full bg-white dark:bg-gray-900 ">
  <div className="max-w-7xl mx-auto px-4 py-10 lg:py-16">
    <div className="text-center mb-8 lg:mb-16">
      <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Our Happy Customers!
      </h2>
    </div>

    <div className="flex flex-col gap-8 md:flex-row md:flex-wrap">
      {/* CARD 1 */}
      <div className="flex flex-col sm:flex-row items-start bg-gray-50 rounded-lg shadow dark:bg-gray-800 w-full md:w-[48%] min-w-0">
        <img
          className="w-full sm:w-48 rounded-lg sm:rounded-none sm:rounded-l-lg object-cover"
          src="https://images-platform.99static.com/cUL4HIs5z77CLz8YUw6OLIydl4M=/500x500/top/smart/99designs-contests-attachments/57/57257/attachment_57257545"
          alt="Customer"
        />
        <div className="p-5 flex-1 min-w-0">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            The Advance Construction Group
          </h3>
          <span className="text-gray-500 dark:text-gray-400">
            Construction Company
          </span>
          <p className="mt-3 text-gray-500 dark:text-gray-400 break-words">
            This platform saved me a lot of time. Earlier I had to call multiple agents, now I can find available workers in minutes.
          </p>
        </div>
      </div>

      {/* CARD 2 - image right */}
      <div className="flex flex-col sm:flex-row-reverse items-start bg-gray-50 rounded-lg shadow dark:bg-gray-800 w-full md:w-[48%] min-w-0">
        <img
          className="w-full sm:w-48 rounded-lg sm:rounded-none sm:rounded-r-lg object-cover"
          src="https://static.arvin.chat/arvin_server/img_common/s3_88VH7XZTxacqFPa4MENuYe.webp"
          alt="Customer"
        />
        <div className="p-5 flex-1 min-w-0">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Construction Pro
          </h3>
          <span className="text-gray-500 dark:text-gray-400">
            Construction Company
          </span>
          <p className="mt-3 text-gray-500 dark:text-gray-400 break-words">
            I liked how easy it is to post a job and get responses quickly. Worker ratings helped me choose the right person.
          </p>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="flex flex-col sm:flex-row items-start bg-gray-50 rounded-lg shadow dark:bg-gray-800 w-full md:w-[48%] min-w-0">
        <img
          className="w-full sm:w-48 rounded-lg sm:rounded-none sm:rounded-l-lg object-cover"
          src="https://static.vecteezy.com/system/resources/thumbnails/055/763/617/small/construction-company-logo-template-illustration-free-vector.jpg"
          alt="Customer"
        />
        <div className="p-5 flex-1 min-w-0">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Slogan Here
          </h3>
          <span className="text-gray-500 dark:text-gray-400">
            Construction Company
          </span>
          <p className="mt-3 text-gray-500 dark:text-gray-400 break-words">
            I found a plumber the same day. The worker arrived on time and pricing was clear.
          </p>
        </div>
      </div>

      {/* CARD 4 - image right */}
      <div className="flex flex-col sm:flex-row-reverse items-start bg-gray-50 rounded-lg shadow dark:bg-gray-800 w-full md:w-[48%] min-w-0">
        <img
          className="w-full sm:w-48 rounded-lg sm:rounded-none sm:rounded-r-lg object-cover"
          src="https://png.pngtree.com/template/20191014/ourmid/pngtree-building-and-construction-logo-design-template-in-round-shape-image_317779.jpg"
          alt="Customer"
        />
        <div className="p-5 flex-1 min-w-0">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Construction Home
          </h3>
          <span className="text-gray-500 dark:text-gray-400">
            Construction Company
          </span>
          <p className="mt-3 text-gray-500 dark:text-gray-400 break-words">
            Managing manpower is much easier now. Daily labour availability is accurate and reliable.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
  <SocialProof/>
</>
  );
}

export default CardCustomer;


