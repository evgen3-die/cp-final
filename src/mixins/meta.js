export default title => ({
  data () {
    return {
      pageTitle: title
    }
  },
  metaInfo () {
    return {
      title: this.pageTitle
    }
  }
})
