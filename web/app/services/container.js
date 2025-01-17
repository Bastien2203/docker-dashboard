import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import fetch from 'fetch';

export default class ContainerService extends Service {
  @tracked containers = [];

  async fetchContainers() {
    try {
      const response = await fetch('http://localhost:4567/containers');
      this.containers = await response.json();
    } catch (error) {
      console.error('Error fetching containers:', error);
    }
  }

  async startContainer(id) {
    try {
      await fetch(`http://localhost:4567/containers/${id}/start`, {
        method: 'POST',
      });
      await this.fetchContainers();
    } catch (error) {
      console.error('Error starting container:', error);
    }
  }

  async stopContainer(id) {
    try {
      await fetch(`http://localhost:4567/containers/${id}/stop`, {
        method: 'POST',
      });
      await this.fetchContainers();
    } catch (error) {
      console.error('Error stopping container:', error);
    }
  }
}
