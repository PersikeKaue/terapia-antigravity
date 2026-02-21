const { chromium } = require('playwright');
const path = require('path');

(async () => {
    const outputPath = path.join(
        'C:\\Users\\kauep\\.gemini\\antigravity\\brain\\aeba78bd-f7a7-4dac-8b5d-a9f1c2878a66',
        'persike-landing-page.pdf'
    );

    const browser = await chromium.launch();
    const page = await browser.newPage();

    // Set viewport to standard desktop
    await page.setViewportSize({ width: 1440, height: 900 });

    console.log('Navigating to page...');
    await page.goto('http://localhost:3003', { waitUntil: 'networkidle', timeout: 30000 });

    // Wait a bit for animations/fonts
    await page.waitForTimeout(2000);

    console.log('Saving PDF...');
    await page.pdf({
        path: outputPath,
        format: 'A3',
        printBackground: true,
        margin: { top: '0', right: '0', bottom: '0', left: '0' },
    });

    await browser.close();
    console.log('PDF saved to:', outputPath);
})();
