import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class Application extends Route {
  @service container;

  async model() {
    await this.container.fetchContainers();
    return this.container.containers;
  }
}
