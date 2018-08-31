/**
 * Dependencies
 */
import CharacterItem from '@/components/CharacterItem';
import Pagination from '@/components/Pagination';

/**
 * Expo
 */
export default {

  name: 'CharacterList',

  components: {
    CharacterItem,
    Pagination,
  },

  props: [
    'charList',
    'page',
  ],

  data() {
    return {
      limit: 12,
      currentPage: this.page,
    };
  },

  computed: {
    charCount() {
      return this.charList.length;
    },

    offset() {
      return (this.currentPage - 1) * this.limit;
    },

    pageCharList() {
      const endIndex = this.offset + this.limit;
      return this.charList.slice(this.offset, endIndex);
    },
  },

  methods: {
    updatePage(value) {
      this.currentPage = value;
      this.$router.replace({
        name: 'home',
        params: { page: value },
      });
    },
  },
};
