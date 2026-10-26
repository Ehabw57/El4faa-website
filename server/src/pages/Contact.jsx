import SiteLayout from "../components/SiteLayout.jsx";

export default function Contact() {
  return (
    <SiteLayout
      currentPath="/contact"
      title="تواصل معنا"
      description="معلومات التواصل بشأن مشروع مجمع الشفاء الطبي ومسجد المدينة المنورة."
    >
      <main class="mx-auto min-h-[60vh] max-w-6xl px-5 py-16">
        <h1 class="text-4xl font-bold text-emerald-950">تواصل معنا</h1>
        <p class="mt-5 max-w-2xl leading-8 text-gray-600">
          للاستفسار عن المشروع أو المساهمة فيه، ستُضاف هنا بيانات التواصل
          الرسمية بعد مراجعتها واعتمادها.
        </p>
      </main>
    </SiteLayout>
  );
}
