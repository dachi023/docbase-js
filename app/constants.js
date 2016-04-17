export default {
  protocol: 'https',
  host: 'api.docbase.io',
  version: 1,
  get baseURL() {
    return `${this.protocol}://${this.host}`
  }
}
