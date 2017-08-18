// @flow
export default {
  host: 'api.docbase.io',
  protocol: 'https',
  timeout: 1000,
  version: 1,
  get baseUrl(): string {
    return `${this.protocol}://${this.host}`
  }
}
