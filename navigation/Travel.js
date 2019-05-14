import React from 'react';
import { createStackNavigator } from "react-navigation";

import List from '../screens/List';
import Article from '../screens/Article';

const AppNavigator = createStackNavigator(
    {
        List,
        Article
    },
    {
        initialRouteName: "List",
        // defaultNavigationOptions: {
        //     // header: null,
        //     headerStyle: {
        //         borderBottomColor: 'transparent',
        //         marginTop: 24,
        //         backgroundColor: 'blue',
        //     }
        // }
    }
);

export default AppNavigator;