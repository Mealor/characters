<template>
  <CharacterList :page="pageIndex" :charList="charList"/>
</template>

<script>
import CharacterList from '@/components/CharacterList';

export default {
  components: {
    CharacterList,
  },
  data() {
    return {
      pageIndex: Number(this.$route.params.page),
    };
  },

  created() {
    this.$store.dispatch('setCharacters');
  },

  computed: {
    charList() {
      return this.$store.state.characters;
    },

  },
};
</script>
