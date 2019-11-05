export default {
  ui: {
    activeImageId: null,
    activeImageTrail: null,
    activeImage: null,
    selectedImage: null
  },
  trail: {
    isFetching: false,
    id: null,
    user: null,
    time: null,
    queries: []
  },
  relatedTrails: {
    trails: null,
    isFetching: true,
    filters: {
      cold: true,
      warm: true,
      bright: true,
      dark: true,
      complex: true,
      simple: true,
      hasText: false,
      year: false,
      month: false,
      day: false
    },
    follow: "instory-p5",
    range: {
      before: 4,
      after: 4
    }
  }
};