const contactTemplate = ({
  name,
  email,
  contactNo,
  message,
}) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Details</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f2effb; padding: 20px;">

    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td>
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 5px; box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);">
                    <tr>
                        <td align="center" style="padding: 20px;">
                            <h1 style="color: #671d63">A new inquery has arrived!</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 20px;">
                            <p style="font-size: 1.2rem"><strong style="display: inline-block;">Name:</strong><span style="padding-left: 8px">${name}</span></p>
                            <p style="font-size: 1.2rem"><strong style="display: inline-block;">Email:</strong><span style="padding-left: 8px">${email}</span></p>
                            <p style="font-size: 1.2rem"><strong style="display: inline-block;">Contact:</strong><span style="padding-left: 8px">${contactNo}</span></p>
                            <p style="font-size: 1.2rem"><strong style="display: inline-block;">Message:</strong><span style="padding-left: 8px">${message}</span></p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

</body>
</html>

`;

module.exports = contactTemplate;
