import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class ContainersController extends Controller {
  @service containers;

  refreshContainers = async () => {
    await this.containers.fetchContainers();
    this.set('model', this.containers.containers);
  };
}
