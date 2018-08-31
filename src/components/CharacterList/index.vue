<template>
  <section class="container">
    <Pagination
      :charCount="charCount"
      :currentPage="currentPage"
      :limit="limit"
      @updatePage="updatePage"
    />
    <section class = " tile is-ancestor flex-is-wrap">
      <CharacterItem
        v-for="( char, index ) in pageCharList"
        :index="offset+index"
        :char="char"
        :key="char.id"
      />
    </section>
  </section>
</template>

<style scoped src="./style.css"></style>
<script src="./script.js"></script>
