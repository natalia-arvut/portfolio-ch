# reviews-ch-notify — уведомления об отзывах на email

Supabase Edge Function. Срабатывает каждый раз, когда в таблице `reviews_ch`
появляется новая строка (через Database Webhook), и шлёт письмо на `nk@arvut.ch`
через Resend.

---

## Что отправляется

- **From:** `Portfolio CH <portfolio@livebook.ch>` (домен `livebook.ch` уже верифицирован в Resend)
- **To:** `nk@arvut.ch`
- **Subject:** `New review on portfolio-ch: 5★ from <имя>`
- **Body:** красивый HTML-блок в стиле сайта (градиент бренда, циан-акценты), плюс plain-text fallback.

В письме указаны: имя, роль (если есть), рейтинг, язык, дата, сам текст отзыва,
кнопка «Open portfolio» со ссылкой на сайт.

---

## Развёртывание (3 шага, через Supabase Dashboard, без CLI)

### Шаг 1 — создать саму функцию

1. Открыть проект `Nataly-portfolio` в Supabase
2. Слева → **Edge Functions** → **Create a new function**
3. Имя: `reviews-ch-notify`
4. Откроется редактор. **Стереть содержимое и вставить полностью** содержимое файла `index.ts` из этой же папки
5. Сверху справа — кнопка **Deploy** → подтвердить

После деплоя функция доступна по URL вида:
```
https://vrszciahlkxfzypmyasz.functions.supabase.co/reviews-ch-notify
```

### Шаг 2 — добавить секрет с ключом Resend

1. В том же проекте → **Settings (шестерёнка) → Edge Functions → Secrets** *(в новом UI это может быть `Project Settings → Functions → Secrets`)*
2. **Add new secret**
3. Имя: `RESEND_API_KEY`
4. Значение: новый ключ из Resend (см. примечание про ротацию ниже)
5. Сохранить

Функция автоматически подхватит его при следующем вызове.

### Шаг 3 — создать Database Webhook на INSERT в `reviews_ch`

1. Слева → **Database → Webhooks** *(в некоторых UI: `Database → Function Hooks`)*
2. **Create a new hook**
3. Заполнить:
   - **Name:** `reviews-ch-notify-on-insert`
   - **Table:** `public.reviews_ch`
   - **Events:** ✅ только **Insert**
   - **Type:** **Supabase Edge Function**
   - **Edge Function:** выбрать `reviews-ch-notify`
   - **HTTP Method:** `POST` *(оставить дефолт)*
   - **HTTP Headers:** дефолтные подходят, ничего добавлять не нужно
4. **Create webhook**

Готово. Любая новая запись в `reviews_ch` → вебхук → функция → письмо на `nk@arvut.ch`.

---

## Проверить, что работает

1. Открыть швейцарский сайт → раздел **Reviews** → отправить тестовый отзыв
2. Через ~5 секунд должно прийти письмо
3. Если письмо не пришло:
   - Resend dashboard → **Logs** — будет видна попытка отправки и причина отказа
   - Supabase dashboard → **Edge Functions → reviews-ch-notify → Logs** — там видно, был ли вызов и что ответил Resend
4. Тестовую запись потом удалить в **Table Editor → reviews_ch → правый клик → Delete row**

---

## Безопасность

API-ключ хранится **только** в Supabase Edge Function Secrets, **не** в коде сайта и **не** в репозитории GitHub. Файл `index.ts` читает его через `Deno.env.get("RESEND_API_KEY")` — ключ невидим ни в браузере у клиента, ни в исходниках на github.

### Ротация ключа (рекомендуется)
Поскольку первый ключ был передан в чат, лучше его заменить:
1. Resend dashboard → **API Keys** → старый ключ → **Revoke**
2. **Create API Key** → новый → скопировать
3. Supabase → **Secrets** → `RESEND_API_KEY` → **Edit** → вставить новый → Save
4. Готово, никаких других изменений не нужно.

---

## Если в будущем понадобится больше функций

Та же функция может слать письма про разные таблицы — просто меняй webhook
(или создавай дополнительные). Для каждой добавляй отдельный секрет, если ключи
разные.
