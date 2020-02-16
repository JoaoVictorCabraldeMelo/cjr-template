import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from './pages';

const routes = createAppContainer(createSwitchNavigator({ Home }));

export default routes;