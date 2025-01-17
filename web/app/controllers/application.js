import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service container;

  refreshContainers = async () => {
    await this.container.fetchContainers();
    this.set('model', this.container.containers);
  };
}
