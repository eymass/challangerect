/**
 *
 * Asynchronously loads the component for AuthProvider
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
