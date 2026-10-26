import Navbar from "../components/Navbar.jsx";

export default function Home({posts}) {
  console.log(posts)
  return (
    <>
      <Navbar />

      <main>
        <section class="mx-auto grid max-w-5xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <p class="mb-3 font-medium text-emerald-700">
              مشروع لخدمة أهل القرية
            </p>

            <h2 class="text-4xl leading-tight font-bold text-emerald-950 md:text-5xl">
              رعاية طبية أقرب،
              <span class="block">وخير يمتد</span>
            </h2>

            <p class="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              مجمع الشفاء الطبي ومسجد المدينة المنورة، مشروع مجتمعي بقرية
              العليقات، مركز قوص، محافظة قنا، لخدمة الأهالي وتيسير الوصول
              إلى الرعاية الصحية ومكان للعبادة.
            </p>

            {posts.map((i) => <h1>{i.name}:{i.age}</h1>)}

            <a
              href="#donate"
              class="mt-8 inline-flex rounded-lg bg-emerald-700 px-6 py-3 font-semibold text-white hover:bg-emerald-800"
            >
              ساهم في دعم المشروع
            </a>
          </div>

          <div
            class="flex min-h-64 flex-col items-center justify-center rounded-3xl border border-emerald-100 bg-emerald-50 p-8 text-center"
            aria-label="نبذة عن أهداف المشروع"
          >
            <span class="text-5xl" aria-hidden="true">✦</span>
            <h2 class="mt-4 text-2xl font-bold text-emerald-950">
              معًا لخدمة المجتمع
            </h2>
            <p class="mt-3 leading-7 text-gray-600">
              رعاية صحية، وتكافل مجتمعي، وعبادة.
            </p>
          </div>
        </section>

        <section id="about" class="border-t border-gray-100 bg-gray-50">
          <div class="mx-auto max-w-6xl px-5 py-16">
            <h2 class="text-3xl font-bold text-gray-900">عن المشروع</h2>
            <p class="mt-4 max-w-3xl leading-8 text-gray-600">
              يهدف المشروع إلى توفير خدمات طبية أقرب للأهالي، مع إنشاء مسجد
              يخدم المصلين. ستُعرض تفاصيل مراحل البناء والتبرعات بعد اعتماد
              بياناتها.
            </p>
          </div>
        </section>

        <section id="services" class="mx-auto max-w-6xl px-5 py-16">
          <h2 class="text-3xl font-bold">الخدمات المستهدفة</h2>
          <div class="mt-7 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {["العيادات", "المعمل", "الصيدلية", "الاستقبال والطوارئ"].map(
              (service) => (
                <div
                  key={service}
                  class="rounded-xl border border-gray-200 p-5 font-semibold"
                >
                  {service}
                </div>
              )
            )}
          </div>
        </section>

        <section id="donate" class="bg-emerald-900 text-white">
          <div class="mx-auto max-w-6xl px-5 py-14">
            <h2 class="text-3xl font-bold">ساهم في دعم المشروع</h2>
            <p class="mt-4 leading-8 text-emerald-50">
              ستُضاف هنا طرق التبرع وبيانات التواصل المعتمدة.
            </p>
          </div>
        </section>
      </main>

      <footer class="border-t border-gray-200 px-5 py-6 text-center text-sm text-gray-600">
        مجمع الشفاء الطبي ومسجد المدينة المنورة — قرية العليقات، مركز قوص، قنا
      </footer>
    </>
  );
}
