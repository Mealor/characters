/**
 * Expo
 */
export default {

  name: 'Pagination',

  props: [
    'currentPage',
    'charCount',
    'limit',
  ],

  computed: {
    lastPage() {
      return Math.ceil(this.charCount / this.limit);
    },
  },

  methods: {
    movePage(n) {
      const newPage = this.currentPage + n;
      if (newPage < 1 || newPage > this.lastPage) {
        return;
      }
      this.$emit('updatePage', newPage);
    },

    setPage(n) {
      this.$emit('updatePage', n);
    },
  },

};
