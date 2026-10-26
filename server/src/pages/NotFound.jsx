import SiteLayout from "../components/SiteLayout.jsx";

export default function NotFound() {
  return (
    <SiteLayout
      currentPath=""
      title="الصفحة غير موجودة"
      description="الصفحة التي تبحث عنها غير موجودة."
    >
      <main class="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-start justify-center px-5 py-16">
        <p class="text-sm font-bold text-emerald-700">خطأ 404</p>
        <h1 class="mt-3 text-4xl font-bold text-gray-900">
          الصفحة غير موجودة
        </h1>
        <p class="mt-4 text-gray-600">
          ربما نُقل الرابط أو كُتب بطريقة غير صحيحة.
        </p>
        <a
          href="/"
          class="mt-7 rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white hover:bg-emerald-800"
        >
          العودة للرئيسية
        </a>
      </main>
    </SiteLayout>
  );
}
