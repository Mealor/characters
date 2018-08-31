<template>
  <nav class="pagination need-margin-bot" role="navigation" aria-label="pagination">
    <a class="pagination-previous" @click="movePage(-1)">Назад</a>
    <a class="pagination-next" @click="movePage(1)">Далее</a>
    <ul class="pagination-list">
      <li>
        <a class="pagination-link" aria-label="Goto page 1" @click="setPage(1)">1</a>
      </li>
      <li>
        <span class="pagination-ellipsis">&hellip;</span>
      </li>
      <li>
        <a class="pagination-link"
          v-if="currentPage > 1"
          @click="setPage(currentPage - 1)">
          {{ currentPage - 1 }}
        </a>
      </li>
      <li>
        <a class="pagination-link is-current"
          aria-current="page">
          {{ currentPage }}
        </a>
      </li>
      <li>
        <a class="pagination-link"
          v-if="currentPage < 10"
          @click="setPage(currentPage + 1)">
          {{ currentPage + 1 }}
        </a>
      </li>
      <li>
        <span class="pagination-ellipsis">&hellip;</span>
      </li>
      <li>
        <a class="pagination-link"
          @click="setPage(lastPage)">
          {{ lastPage }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped src="./style.css"></style>
<script src="./script.js"></script>
