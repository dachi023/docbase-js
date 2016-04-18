export default {
  protocol: 'https',
  host: 'api.docbase.io',
  version: 1,
  get baseUrl() {
    return `${this.protocol}://${this.host}`
  },
  timeout: 1000
}
