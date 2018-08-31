<template>
  <section class="details container">
    <header class="level notification">
      <div class="level-item has-text-centered title notification">
        <span v-if="char">{{ char.localized_name }}</span>
      </div>
    </header>
    <div class="tile is-ancestor">
      <div class="tile is-vertical">
        <div class="tile">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <figure class="image is-4by3">
                <img v-if="char" :src="`https://api.opendota.com${char.img}`">
              </figure>
            </article>
          </div>
          <div class="tile is-parent is-vertical is-4">
            <article class="tile is-child">
              <div class="subtitle">Характеристики</div>
              <div class="notification is-info">
                <p class="subtitle">Интелект:<span v-if="char">{{char.base_int}}</span></p>
              </div>
              <div class="notification is-danger">
                <p class="subtitle">Сила:<span v-if="char">{{char.base_str}}</span></p>
              </div>
              <div class="notification is-success">
                <p class="subtitle">Ловкость:<span v-if="char">{{char.base_agi}}</span></p>
              </div>
               <a @click="$router.go(-1)" class="button is-medium">Вернуться</a>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script src="./script.js"></script>
