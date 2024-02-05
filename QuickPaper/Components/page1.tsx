import { WebView } from 'react-native-webview';
import styles from '../Style/AppDesign';

const PageOne = () => {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://scholar.google.co.kr/schhp?hl=ko' }}
    />
  );
}

export default PageOne;
