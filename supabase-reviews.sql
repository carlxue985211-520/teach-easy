-- Teach Easy 评价模块 Supabase 初始化脚本
-- 在 Supabase SQL Editor 中执行一次即可。

create extension if not exists pgcrypto;

create table if not exists public.teaching_aid_reviews (
  id uuid primary key default gen_random_uuid(),
  site_id text not null default 'teach-easy',
  tool_id text not null,
  tool_title text not null,
  version text not null check (version in ('A', 'B')),
  reviewer_id text not null check (reviewer_id in ('1', '2')),
  content text not null check (char_length(trim(content)) between 1 and 500),
  created_at timestamptz not null default now()
);

create index if not exists teaching_aid_reviews_lookup_idx
  on public.teaching_aid_reviews (site_id, tool_id, version, created_at desc);

alter table public.teaching_aid_reviews enable row level security;

drop policy if exists "teach_easy_reviews_select" on public.teaching_aid_reviews;
create policy "teach_easy_reviews_select"
  on public.teaching_aid_reviews
  for select
  to anon
  using (site_id = 'teach-easy');

drop policy if exists "teach_easy_reviews_insert" on public.teaching_aid_reviews;
create policy "teach_easy_reviews_insert"
  on public.teaching_aid_reviews
  for insert
  to anon
  with check (
    site_id = 'teach-easy'
    and reviewer_id in ('1', '2')
    and version in ('A', 'B')
    and char_length(trim(content)) between 1 and 500
  );

-- 简化账号系统：前端会在删除时发送 x-reviewer-id 请求头。
-- 这能避免正常界面误删别人的评价；但它不是强认证，适合当前非公开评审场景。
drop policy if exists "teach_easy_reviews_delete_own" on public.teaching_aid_reviews;
create policy "teach_easy_reviews_delete_own"
  on public.teaching_aid_reviews
  for delete
  to anon
  using (
    site_id = 'teach-easy'
    and reviewer_id = coalesce(
      nullif(current_setting('request.headers', true), '')::json ->> 'x-reviewer-id',
      ''
    )
  );

grant select, insert, delete on public.teaching_aid_reviews to anon;
