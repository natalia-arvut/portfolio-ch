create table if not exists reviews_ch (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  role        text,
  text        text not null,
  rating      int  not null check (rating between 1 and 5),
  language    text default 'en',
  created_at  timestamptz default now()
);

alter table reviews_ch enable row level security;

create policy "reviews_ch read"
  on reviews_ch
  for select
  using (true);

create policy "reviews_ch insert"
  on reviews_ch
  for insert
  with check (true);
