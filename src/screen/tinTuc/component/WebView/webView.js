import React from 'react';
import {WebView} from 'react-native-webview';
const webView = ({route}) => {
  const url = route.params.url;
  console.log(typeof url);
  return <WebView source={{uri: url}} />;
};

export default webView;
