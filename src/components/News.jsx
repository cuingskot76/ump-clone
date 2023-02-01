import React from "react";

const News = () => {
  return (
    <div className="py-12">
      <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="mb-12 space-y-2 text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
            Berita Terbaru
          </h2>
          <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            praesentium recusandae tempora cum at vitae repellat fugiat aperiam
            nihil quasi. Quia quisquam quidem inventore quae praesentium
            perferendis, delectus odit nisi?
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Etiam curae si tempus facilisis adipiscing pellentesque duis
                bibendum parturient
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                libero officia asperiores aliquam, mollitia cumque sit enim
                beatae doloribus, fugiat aut impedit quidem voluptate
                corrupti....
              </p>
              <a className="inline-block" href="#">
                <span className="text-blue-500">Read more</span>
              </a>
            </div>
          </div>
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Suspendisse himenaeos ligula aliquet maximus habitant egestas
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                delectus aspernatur pariatur praesentium magnam nihil nemo
                reprehenderit sit similique iure?...
              </p>
              <a className="inline-block" href="#">
                <span className="text-blue-500">Read more</span>
              </a>
            </div>
          </div>
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                lectus posuere convallis non id ut fermentum donec hac inceptos
                est sagittis
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                blanditiis, soluta alias ut a architecto?...
              </p>
              <a className="inline-block" href="#">
                <span className="text-blue-500">Read more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
