/**
 * Created by lipeiwei on 16/10/28.
 */

import React from 'react';
import {
  WebView,
  ActivityIndicator,
  View
} from 'react-native';
import BaseComponent from '../base/baseComponent';
import commonStyle from '../style/commonStyle';

const URL = 'http://www.ducetech.com';

class MyGithubPage extends BaseComponent {

  constructor() {
    super();
  }

  getNavigationBarProps() {
    return {
      title: '关于',
      hideRightButton: true,
      leftButtonImage: require('../image/return.png'),
    };
  }

  renderBody() {
    return (
      <WebView
        style={{flex: 1}}
        startInLoadingState={true}
        source={{uri: URL}}
        renderLoading={() => {
          return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <ActivityIndicator color={commonStyle.LIGHT_BLUE_COLOR}/>
            </View>
          )
        }}
      />
    );
  }

}

export default MyGithubPage;
