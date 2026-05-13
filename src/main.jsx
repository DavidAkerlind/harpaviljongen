import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const observer = new MutationObserver(() => {
	const iframe = document.querySelector('.caspeco-booking-modal-iframe');
	if (iframe) {
		iframe.style.setProperty('width', '104%', 'important');
		iframe.style.setProperty('left', '0', 'important');
	}
});
observer.observe(document.body, { childList: true, subtree: true });

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
