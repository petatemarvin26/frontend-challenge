import ReactDOM from 'react-dom/client';
import Navigator from 'navigator';
import { apiConfig } from 'api';

const rootElement: HTMLElement = document.getElementById('root')!;

const root = ReactDOM.createRoot(rootElement);

// initialize the config before mounting
apiConfig(/* redux-config */);

root.render(<Navigator />);
