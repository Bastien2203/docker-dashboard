import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import fetch from 'fetch';

export default class ContainerService extends Service {
  @tracked services = [];

  async fetchServices() {
    try {
      const response = await fetch('http://localhost:4567/services');
      this.services = await response.json();
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  }
}
