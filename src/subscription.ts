import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 2333,
  name: 'Subscription',
  version: 0,
  author: 'bayunai',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/shibendan/gkd-subscription',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
