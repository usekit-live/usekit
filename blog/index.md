---
layout: page
title: Blog
---

<script setup>
import { data as posts } from './posts.data.js'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>

<style scoped>
.blog-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
}

.blog-header {
  margin-bottom: 2.5rem;
  border-bottom: none;
}

.blog-header h1 {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: var(--vp-c-text-1);
  margin: 0 0 0.35rem;
  line-height: 1.2;
}

.blog-subtitle {
  font-size: 1rem;
  color: var(--vp-c-text-3);
  margin: 0;
  font-weight: 400;
}

/* ── Card Grid ── */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

@media (max-width: 860px) {
  .blog-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 540px) {
  .blog-grid { grid-template-columns: 1fr; }
}

/* ── Individual Card ── */
.blog-card a {
  text-decoration: none;
  color: inherit;
  display: block;
}

.blog-cover {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  border-radius: 12px;
  display: block;
}

.blog-cover-placeholder {
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: 12px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7);
}

.blog-title {
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.45;
  color: var(--vp-c-text-1);
  margin: 0.85rem 0 0.4rem;
}

.blog-meta {
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
  margin: 0 0 0.4rem;
}

.blog-desc {
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
  line-height: 1.55;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ── Empty state ── */
.no-posts {
  color: var(--vp-c-text-3);
  font-style: italic;
  text-align: center;
  padding: 4rem 0;
}
</style>

<div class="blog-page">
  <div class="blog-header">
    <h1>UseKit Blog</h1>
    <p class="blog-subtitle">News and updates about UseKit</p>
  </div>

  <ul v-if="posts.length" class="blog-grid">
    <li v-for="post of posts" :key="post.url" class="blog-card">
      <a :href="post.url">
        <img v-if="post.frontmatter.cover" :src="post.frontmatter.cover" :alt="post.frontmatter.title" class="blog-cover" />
        <div v-else class="blog-cover-placeholder"></div>
        <h2 class="blog-title">{{ post.frontmatter.title }}</h2>
        <p class="blog-meta">{{ formatDate(post.frontmatter.date) }}</p>
        <p v-if="post.frontmatter.description" class="blog-desc">{{ post.frontmatter.description }}</p>
      </a>
    </li>
  </ul>

  <p v-else class="no-posts">No posts yet. Check back soon!</p>
</div>
