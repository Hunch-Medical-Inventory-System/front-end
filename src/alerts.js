const cron = require('node-cron');
const nodemailer = require('nodemailer');
const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase
const supabase = createClient('https://xowegfmkiindptpnsscg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhvd2VnZm1raWluZHB0cG5zc2NnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg0OTE0MzksImV4cCI6MjA0NDA2NzQzOX0._rrgcRNIZYDMqdQaqEWgrHNvFp4jGkk-dFF4ohxroq0');

// Email Transporter Setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jjshunch@gmail.com',
    pass: 'ride rniq eqhj ktri',
  },
});

// Function to Fetch Expired and Expiring Items
async function getInventoryUpdates() {
  const today = new Date();
  const threeDaysLater = new Date(today);
  threeDaysLater.setDate(today.getDate() + 3);

  // Query to get expired items
  const { data: expiredItems } = await supabase
    .from('inventory')
    .select('*')
    .lt('expiry_date', today.toISOString());

  // Query to get expiring items
  const { data: expiringItems } = await supabase
    .from('inventory')
    .select('*')
    .gte('expiry_date', today.toISOString())
    .lte('expiry_date', threeDaysLater.toISOString());

  return { expiredItems, expiringItems };
}

// Function to Send Email
async function sendEmail() {
  const { expiredItems, expiringItems } = await getInventoryUpdates();

  const emailContent = `
    <h2>Inventory Updates</h2>
    <h3>Expired Items:</h3>
    <ul>
      ${expiredItems.map(item => `<li>${item.supply_name} (Expiry Date: ${item.expiry_date})</li>`).join('')}
    </ul>
    <h3>Expiring Soon (Next 3 Days):</h3>
    <ul>
      ${expiringItems.map(item => `<li>${item.supply_name} (Expiry Date: ${item.expiry_date})</li>`).join('')}
    </ul>
  `;

  const mailOptions = {
    from: 'jjshunch@gmail.com',
    to: '2178956@jeffcoschools.us',
    subject: 'Inventory Expiry Notification',
    html: emailContent,
  };

  await transporter.sendMail(mailOptions);
}

// Schedule the Task to Run Every 5 Minutes
cron.schedule('*/5 * * * *', async () => {
  console.log('Sending inventory update email...');
  await sendEmail();
  console.log('Email sent!');
});
