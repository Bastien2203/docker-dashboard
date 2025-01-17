import Route from '@ember/routing/route';
import {inject as service} from "@ember/service";

export default class ContainersRoute extends Route {
  @service containers;

  async model() {
    await this.containers.fetchContainers();
    return this.containers.containers;
  }
}
