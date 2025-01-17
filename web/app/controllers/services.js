import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class ServicesController extends Controller {
  @service services;

  refreshServices = async () => {
    await this.services.fetchServices();
    this.set('model', this.services.services);
  };
}
