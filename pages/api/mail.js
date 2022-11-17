const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

const TEMPLATE_ID = 'd-858c5869ffea4d9a9ecf3129c1548c11';
const FROM_EMAIL = 'welcome@k33.com';

export default async function handler(req, res) {
  try {
    const body = JSON.parse(req.body);

    const response = await mail.send({
      from: FROM_EMAIL,
      personalizations: [
        {
          to: [
            {
              email: body.email
            }
          ],
          dynamic_template_data: {
            name: 'Hello from K33!',
            subject: 'New Message from K33!',
          }
        }
      ],
      template_id: TEMPLATE_ID
    });

    res.status(200).json({
      status: 'OK',
      response
    });
  } catch (e) {
    res.status(500).json({
      status: 'Error',
      error: e
    });
  }
}
