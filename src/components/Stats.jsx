import React from "react";

const Stats = () => {
  return (
    <section class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
            Apa yang menarik dari UMP ?
          </h2>

          <p class="mt-4 text-gray-500 sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            pariatur suscipit modi consequatur incidunt dolorem doloremque,
            placeat omnis ad esse deserunt ducimus dolorum rem accusantium.
          </p>
        </div>

        <div class="mt-8 sm:mt-12">
          <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-gray-500">
                Dosen
              </dt>

              <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                443+
              </dd>
            </div>

            <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-gray-500">
                Mahasiswa Aktif
              </dt>

              <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                15353+
              </dd>
            </div>

            <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-gray-500">
                Alumni
              </dt>

              <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                43313+
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Stats;
