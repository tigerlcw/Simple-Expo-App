import { WebView } from 'react-native-webview';
import styles from '../Style/AppDesign';

const PageTwo = () => {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://typeset.io/' }}
    />
  );
}

export default PageTwo;
