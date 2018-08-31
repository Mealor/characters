<template>
  <CharacterDetails :char="char"/>
</template>

<script>
// @ is an alias to /src
import CharacterDetails from '@/components/CharacterDetails';

export default {
  components: {
    CharacterDetails,
  },

  data() {
    return {
      charArrIndex: this.$route.params.index,
    };
  },

  created() {
    this.$store.dispatch('setCharacters');
  },

  computed: {
    char() {
      return this.$store.state.characters[this.charArrIndex];
    },

  },
};
</script>
