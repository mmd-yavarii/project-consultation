import '@fontsource/vazirmatn/400.css';
import '@fontsource/vazirmatn/500.css';
import '@fontsource/vazirmatn/600.css';
import '@fontsource/vazirmatn/700.css';

import BackgroundEffects from './BackgroundEffects';

export default function Layout({ children }) {
    return (
        <html lang="fa" dir="rtl">
            <body>
                <BackgroundEffects />

                {children}
            </body>
        </html>
    );
}
