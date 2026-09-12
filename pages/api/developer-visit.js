export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({
            success: false,
            message: 'Method not allowed',
        });
    }

    try {
        console.log('Visitor data:', req.body);

        // Token
        const token = '2806650:nbQTPRwTdVnK-asnxWKFWIekX_iFr2x6LHY';

        // Chat ID
        const chatId = '362485658';

        // Body information
        const bodyInfo = Object.entries(req.body)
            .map(([key, value]) => {
                return `${key}: ${value || 'Unknown'}`;
            })
            .join('\n');

        // Message
        const message = `
🔴 New Developer Page Visit 🔴

📱 App
salamatmad

📦 Visitor Data
${bodyInfo}


${new Date().toLocaleString('fa-IR', {
    timeZone: 'Asia/Tehran',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
})}
        `.trim();

        // Send message to Bale
        const response = await fetch(`https://tapi.bale.ai/bot${token}/sendMessage`, {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                chat_id: chatId,
                text: message,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('Bale API error:', data);

            return res.status(500).json({
                success: false,
                message: 'Failed to send message',
                error: data,
            });
        }

        return res.status(200).json({
            success: true,
        });
    } catch (error) {
        console.error('Developer visit error:', error);

        return res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
}
