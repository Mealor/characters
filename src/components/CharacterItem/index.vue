<template>
  <router-link :to="'/details/' + index" class="tile is-3 is-parent">
    <div class="tile is-child box">
      <p class="subtitle">{{ char.localized_name }}</p>
      <figure class="image to-bottom">
        <img :src="`https://api.opendota.com${char.img}`">
      </figure>
    </div>
  </router-link>
</template>

<script src="./script.js"></script>
