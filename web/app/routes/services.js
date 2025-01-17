import Route from '@ember/routing/route';
import {inject as service} from "@ember/service";

export default class ServicesRoute extends Route {
  @service services;

  async model() {
    await this.services.fetchServices();
    return this.services.services;
  }
}
