const mail = require('@sendgrid/mail');
const client = require('@sendgrid/client');

mail.setApiKey(process.env.SENDGRID_API_KEY);
client.setApiKey(process.env.SENDGRID_API_KEY);

const TEMPLATE_ID = 'd-858c5869ffea4d9a9ecf3129c1548c11';
const FROM_EMAIL = 'welcome@k33.com';

/**
 * Saves the given email in Sendgrid and sends an email.
 */
export default async function handler(req, res) {
  const { email } = JSON.parse(req.body);

  const { response: sendMailResponse, error: sendMailError } = await sendMail({ email, res });
  const { response: saveContactResponse, error: saveContactError } = await saveContact({ email, res });

  res.status(sendMailError || saveContactError ? 500 : 200).json({
    status: sendMailError || saveContactError ? 'Error' : 'OK',
    responses: {
      saveContact: saveContactResponse,
      sendMail: sendMailResponse
    },
    errors: {
      saveContact: saveContactError,
      sendMail: sendMailError
    }
  });
}

const sendMail = async ({ email }) => {
  try {
    const [response] = await mail.send({
      from: FROM_EMAIL,
      personalizations: [
        {
          to: [
            {
              email
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

    return { response };
  } catch (error) {
    return { error };
  }
};

const saveContact = async ({ email }) => {
  const data = {
    contacts: [
      {
        email
      }
    ]
  };

  const request = {
    url: '/v3/marketing/contacts',
    method: 'PUT',
    body: data
  };

  try {
    const [response] = await client.request(request);
    return { response };
  } catch (error) {
    return { error };
  }
};
