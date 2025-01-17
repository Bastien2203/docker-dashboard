import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class Container extends Component {
  @service containers;

  @action async stopContainer() {
    if (!this.isRunning) {
      return;
    }
    await this.containers.stopContainer(this.args.container.id);
    this.args.onRefresh();
  }

  @action async startContainer() {
    if (this.isRunning) {
      return;
    }
    await this.containers.startContainer(this.args.container.id);
    this.args.onRefresh();
  }

  get isRunning() {
    return this.args.container.state === 'running';
  }
}
