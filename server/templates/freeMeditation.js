const freeMeditationTemplate = () => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Free Meditation</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f2effb;
        margin: 0;
        padding: 0;
      }
      .container {
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        text-align: center;
      }
      h1 {
        color: #671d63;
        font-size: 24px;
        margin: 0;
      }
      .content {
        padding: 20px;
      }
      p {
        font-size: 16px;
        color: #333;
        line-height: 1.5;
      }
      .audio-container {
        text-align: center;
      }
      audio {
        width: 100%;
        max-width: 400px;
      }
    </style>
  </head>
  <body>
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td>
          <table align="center" border="0" cellpadding="0" cellspacing="0" class="container">
            <tr>
              <td class="header">
                <h1>Enjoy Free Meditation</h1>
              </td>
            </tr>
            <tr>
              <td class="content">
                <p>
                  Relax and unwind with our free meditation. Click the play button below to begin your meditation session:
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
};

module.exports = freeMeditationTemplate;
