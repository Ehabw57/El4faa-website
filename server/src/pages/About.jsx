import SiteLayout from "../components/SiteLayout.jsx";

export default function About() {
  return (
    <SiteLayout
      currentPath="/about"
      title="عن المشروع"
      description="تعرّف على أهداف مجمع الشفاء الطبي ومسجد المدينة المنورة بقرية العليقات."
    >
      <main class="mx-auto min-h-[60vh] max-w-6xl px-5 py-16">
        <p class="font-medium text-emerald-700">عن المشروع</p>
        <h1 class="mt-3 text-4xl font-bold text-emerald-950">
          لخدمة أهل العليقات والقرى المجاورة
        </h1>
        <p class="mt-6 max-w-3xl text-lg leading-9 text-gray-600">
          يجمع المشروع بين إنشاء مجمع طبي يهدف إلى تقريب الخدمات الصحية من
          الأهالي، ومسجد يوفّر مكانًا للعبادة. وسيتم نشر تفاصيل مراحل التنفيذ
          والميزانية والتبرعات بناءً على البيانات المعتمدة للمشروع.
        </p>
      </main>
    </SiteLayout>
  );
}
