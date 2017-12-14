import Route from '@ember/routing/route';
import { get, set } from '@ember/object';

export default Route.extend({
  model({remoteId}) {
    this._super(...arguments);
    return get(this, 'store').peekRecord('remote', remoteId).get('device');
  }
});
