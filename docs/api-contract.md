# Admin API Contract

هذا العقد هو المرجع المشترك بين مطور الـ Backend ومطور الأدمن. سيُستخدم أيضاً لبناء Mock API أثناء تطوير الواجهة، ولذلك يجب أن تتطابق المحاكاة مع العقود التالية، وليس مع افتراضات مستقلة.

## جدول المحتويات

- [1.1 القواعد العامة](#11-القواعد-العامة)
- [1.2 المصادقة Authentication](#12-المصادقة-authentication)
- [1.3 الاحتياجات Needs](#13-الاحتياجات-needs)
- [1.4 مراحل التنفيذ Stages](#14-مراحل-التنفيذ-stages)
- [1.5 الأخبار News](#15-الأخبار-news)
- [1.6 مكتبة الصور Media](#16-مكتبة-الصور-media)
- [1.7 Dashboard](#17-dashboard)
- [1.8 شكل الأخطاء](#18-شكل-الأخطاء)

---

## 1.1 القواعد العامة

| البند | الاتفاق |
| --- | --- |
| Base URL | `/api/v1/admin` |
| نوع البيانات | JSON |
| المصادقة | JWT داخل HttpOnly Cookie |
| إرسال الطلبات | `credentials: "include"` |
| حالات المحتوى | `published` أو `hidden` فقط |
| Pagination | من السيرفر |
| اللغة | رسائل الأخطاء بالعربية |
| التاريخ | ISO 8601 |
| الحذف | نهائي بعد التأكيد من الواجهة |

### استجابة القوائم الموحدة

```json
{
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 45,
    "totalPages": 3
  }
}
```

### معاملات القوائم

| المعامل | الوصف |
| --- | --- |
| `page` | رقم الصفحة، الافتراضي `1` |
| `limit` | عدد العناصر، الافتراضي `20`، والحد الأقصى `100` |
| `search` | البحث النصي |
| `status` | `published` أو `hidden` |
| `sort` | `newest` أو `oldest` |

---

## 1.2 المصادقة Authentication

| Method | Endpoint | الوظيفة |
| --- | --- | --- |
| `POST` | `/auth/login` | تسجيل الدخول |
| `GET` | `/auth/me` | التحقق من جلسة الدخول |
| `POST` | `/auth/logout` | تسجيل الخروج |

### Login Request

```json
{
  "username": "admin",
  "password": "password"
}
```

عند النجاح: `200 OK` مع إصدار Cookie آمنة، وإرجاع بيانات المسؤول العامة دون كلمة المرور.

### Me Response

```json
{
  "authenticated": true
}
```

### Logout Response

`200 OK`، مع إبطال Cookie.

> **ملاحظة:** لا توجد مجموعة Users أو Sessions في قاعدة البيانات؛ بيانات الدخول من متغيرات البيئة.

---

## 1.3 الاحتياجات Needs

**Base:** `/needs`

| Method | Endpoint | الوظيفة |
| --- | --- | --- |
| `GET` | `/needs` | قائمة الاحتياجات |
| `GET` | `/needs/:id` | تفاصيل احتياج |
| `POST` | `/needs` | إضافة احتياج |
| `PATCH` | `/needs/:id` | تعديل احتياج |
| `PATCH` | `/needs/:id/status` | تغيير الحالة |
| `DELETE` | `/needs/:id` | حذف نهائي |

### Need Object

```json
{
  "id": "need_id",
  "title": "شراء أجهزة طبية",
  "description": "وصف الاحتياج",
  "quantity": 5,
  "unit": "جهاز",
  "estimatedCost": 25000,
  "stageId": "stage_id",
  "isProvided": false,
  "featuredImageId": "media_id",
  "status": "published",
  "createdAt": "2026-11-09T10:00:00.000Z",
  "updatedAt": "2026-11-09T10:00:00.000Z"
}
```

### القواعد

- `title` و`stageId` مطلوبان.
- الحقول الأخرى اختيارية، و`isProvided` افتراضياً `false`.
- `estimatedCost` يمثل التكلفة الإجمالية بالجنيه المصري، وليس سعر الوحدة.
- الترتيب الافتراضي: الأحدث إضافة أولاً.

---

## 1.4 مراحل التنفيذ Stages

**Base:** `/stages`

| Method | Endpoint | الوظيفة |
| --- | --- | --- |
| `GET` | `/stages` | قائمة المراحل |
| `GET` | `/stages/:id` | تفاصيل مرحلة |
| `POST` | `/stages` | إضافة مرحلة |
| `PATCH` | `/stages/:id` | تعديل مرحلة |
| `PATCH` | `/stages/:id/status` | تغيير الحالة |
| `DELETE` | `/stages/:id` | حذف نهائي |

### Stage Object

```json
{
  "id": "stage_id",
  "title": "إنشاء القواعد",
  "description": "تفاصيل المرحلة",
  "eventDate": "2026-11-09",
  "projectScope": "both",
  "sortOrder": 0,
  "featuredImageId": "media_id",
  "status": "published",
  "createdAt": "2026-11-09T10:00:00.000Z",
  "updatedAt": "2026-11-09T10:00:00.000Z"
}
```

### القواعد

- `title` مطلوب.
- `eventDate` تاريخ الحدث، وإذا لم يُرسل يُستخدم تاريخ الإضافة.
- `createdAt` وقت الإنشاء الفعلي من السيرفر.
- `projectScope`: `mosque` أو `medical` أو `both`.
- الترتيب الافتراضي: `eventDate` تنازلياً، أي الأحدث أولاً.
- لا يوجد ترتيب يدوي من واجهة الأدمن؛ `sortOrder` ليس وسيلة لترتيب المستخدم.

---

## 1.5 الأخبار News

**Base:** `/news`

| Method | Endpoint | الوظيفة |
| --- | --- | --- |
| `GET` | `/news` | قائمة الأخبار |
| `GET` | `/news/:id` | تفاصيل خبر |
| `POST` | `/news` | إضافة خبر |
| `PATCH` | `/news/:id` | تعديل خبر |
| `PATCH` | `/news/:id/status` | تغيير الحالة |
| `DELETE` | `/news/:id` | حذف نهائي |

### News Object

```json
{
  "id": "news_id",
  "title": "آخر تطورات المشروع",
  "slug": "latest-project-updates",
  "excerpt": "ملخص الخبر",
  "body": "# عنوان الخبر\n\nمحتوى الخبر بصيغة Markdown",
  "featuredImageId": "media_id",
  "publishedAt": "2026-11-09T10:00:00.000Z",
  "status": "published",
  "createdAt": "2026-11-09T10:00:00.000Z",
  "updatedAt": "2026-11-09T10:00:00.000Z"
}
```

### القواعد

- `title` مطلوب.
- `slug` يولد تلقائياً، ويكون فريداً، ويمكن تعديله يدوياً.
- `excerpt` اختياري.
- `body` يُرسل ويُحفظ بصيغة Markdown الخام.
- المحرر المرئي في الأدمن يحول محتواه إلى Markdown قبل الإرسال.
- الخبر له صورة رئيسية واحدة فقط.
- الصور داخل متن الخبر تُكتب بروابط Markdown مباشرة، ولا تُضاف تلقائياً إلى مكتبة الصور.
- الترتيب: الأحدث نشرًا أولاً.

---

## 1.6 مكتبة الصور Media

**Base:** `/media`

| Method | Endpoint | الوظيفة |
| --- | --- | --- |
| `GET` | `/media` | قائمة الصور |
| `GET` | `/media/:id` | تفاصيل صورة |
| `POST` | `/media` | إضافة رابط صورة |
| `PATCH` | `/media/:id` | تعديل بيانات الصورة |
| `DELETE` | `/media/:id` | حذف صورة |

### Media Object

```json
{
  "id": "media_id",
  "url": "https://example.com/image.jpg",
  "alt": "وصف الصورة",
  "createdAt": "2026-11-09T10:00:00.000Z",
  "updatedAt": "2026-11-09T10:00:00.000Z"
}
```

### القواعد

- لا يوجد رفع ملفات أو Cloudinary.
- `url` مطلوب، و`alt` اختياري.
- إضافة رابط جديد من نموذج المحتوى تنفذ `POST /media` أولاً، ثم تستخدم `id` الناتج في `featuredImageId`.
- اختيار صورة موجودة لا ينشئ سجلاً جديداً.
- حذف صورة مستخدمة في أي محتوى مرفوض من السيرفر.

---

## 1.7 Dashboard

| Method | Endpoint | الوظيفة |
| --- | --- | --- |
| `GET` | `/dashboard` | إحصائيات وملخص لوحة المعلومات |

### الاستجابة المطلوبة

```json
{
  "stats": {
    "needs": {
      "published": 10,
      "hidden": 2,
      "total": 12
    },
    "stages": {
      "total": 8
    },
    "news": {
      "published": 5,
      "hidden": 1,
      "total": 6
    },
    "media": {
      "total": 20
    }
  },
  "latestNews": [],
  "latestStages": [],
  "currentNeeds": []
}
```

---

## 1.8 شكل الأخطاء

يجب أن تكون الأخطاء موحدة في جميع الـ Endpoints:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "يرجى مراجعة البيانات المدخلة",
    "fields": {
      "title": "هذا الحقل مطلوب"
    }
  }
}
```

### أهم أكواد HTTP

| Code | الاستخدام |
| --- | --- |
| `400` | بيانات غير صالحة |
| `401` | غير مسجل الدخول أو انتهت صلاحية JWT |
| `403` | CSRF أو Origin غير مسموح |
| `404` | السجل غير موجود |
| `409` | تعارض، مثل حذف مرحلة مرتبطة باحتياجات |
| `422` | تعذر تنفيذ العملية بسبب قواعد البيانات أو العلاقات |
| `429` | تجاوز حد محاولات الطلب |
| `500` | خطأ داخلي |

### قواعد إلزامية على Backend

- حماية جميع Admin Endpoints عدا Login.
- CSRF/Origin Protection وRate Limiting.
- منع Mass Assignment والتحقق من جميع المدخلات.
- عدم السماح بحذف مرحلة مرتبطة باحتياجات.
- عدم السماح بحذف صورة مرتبطة بمحتوى.
- الإخفاء لا يحذف السجل.
- جميع عمليات الحفظ والنشر مباشرة، ولا توجد Draft أو Scheduled states.
