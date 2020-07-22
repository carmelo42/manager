export default class EnvironmentService {
  constructor() {
    this.region = 'EU';
    this.version = null;
    this.language = 'en_GB';
  }

  setRegion(region = 'EU') {
    this.region = region;
  }

  getRegion() {
    return this.region;
  }

  setVersion(version) {
    this.version = version;
  }

  getVersion() {
    return this.version;
  }

  setLanguage(language = 'en_GB') {
    this.language = language;
  }

  getLanguage() {
    return this.language;
  }
}
