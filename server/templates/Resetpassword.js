const resetPasswordTemplate = ({ link }) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Password</title>
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
        text-align: center;
      }
      p {
        font-size: 16px;
        color: #333;
        line-height: 1.5;
      }
      .button-container {
        text-align: center;
        margin-top: 20px;
      }
      .button {
        display: inline-block;
        padding: 12px 24px;
        background-color: #671d63;
        color: white !important;
        text-decoration: none;
        border-radius: 8px;
        transition: all 0.3s, linear;
      }
      .link {
        font-size: 16px;
        color: #671d63;
        word-break: break-all;
        text-align: center;
        margin-top: 20px;
      }
      .footer {
        margin-top: 20px;
        text-align: center;
        color: #999;
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
                <h1>Reset Your Password</h1>
              </td>
            </tr>
            <tr>
              <td class="content">
                <p>
                  You have requested to reset your password. To proceed, please click the button below:
                </p>
                <div class="button-container">
                  <a href="${process.env.HOST_URL}reset-password/${link}" class="button">Reset Password</a>
                </div>
              </td>
            </tr>
            <tr>
              <td class="footer">
                This email was sent to you in response to a password reset request. If you did not initiate this request, please ignore this message.
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

module.exports = resetPasswordTemplate;
