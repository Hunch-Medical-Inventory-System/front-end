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


async function getInventoryUpdates() {
  const today = new Date();
  const threeDaysLater = new Date(today);
  threeDaysLater.setDate(today.getDate() + 3);

  // Fetch expired items
  const { data: expiredItems, error: expiredError } = await supabase
    .from('inventory')
    .select('id, expiry_date, supply_id') 
    .lt('expiry_date', today.toISOString());

  // Fetch expiring items
  const { data: expiringItems, error: expiringError } = await supabase
    .from('inventory')
    .select('id, expiry_date, supply_id') 
    .gte('expiry_date', today.toISOString())
    .lte('expiry_date', threeDaysLater.toISOString());

  if (expiredError || expiringError) {
    console.error('Error fetching data:', expiredError || expiringError);
    return { expiredItems: [], expiringItems: [] }; 
  }

 
  const { data: supplies, error: suppliesError } = await supabase
    .from('supplies')
    .select('id, item'); 

  if (suppliesError) {
    console.error('Error fetching supplies:', suppliesError);
    return { expiredItems, expiringItems }; 
  }

  const supplyMap = Object.fromEntries(supplies.map(s => [s.id, s.item]));

  // Attach supply names to items
  const attachSupplyNames = items =>
    items.map(item => ({
      ...item,
      supply_name: supplyMap[item.supply_id] || 'Unknown',
    }));

  return {
    expiredItems: attachSupplyNames(expiredItems),
    expiringItems: attachSupplyNames(expiringItems),
  };
}


async function sendEmail() {
  const { expiredItems, expiringItems } = await getInventoryUpdates();

  const emailContent = `
  <img src="/workspaces/front-end/src/assets/header.png" alt="Header Image" style="width: 100%; max-height: 300px; object-fit: cover;" />
  <h2>Inventory Updates</h2>
  <h3>Expired Items:</h3>
  <ul>
    ${expiredItems
      .map(
        item =>
          `<li>${item.supply_name} (Expiry Date: ${new Date(item.expiry_date).toLocaleDateString()})</li>`
      )
      .join('')}
  </ul>
  <h3>Expiring Soon (Next 3 Days):</h3>
  <ul>
    ${expiringItems
      .map(
        item =>
          `<li>${item.supply_name} (Expiry Date: ${new Date(item.expiry_date).toLocaleDateString()})</li>`
      )
      .join('')}
  </ul>
  `;

  const mailOptions = {
    from: 'jjshunch@gmail.com',
    to: '2178956@jeffcoschools.us, 2112376@jeffcoschools.us',
    subject: 'Inventory Expiry Notification',
    html: emailContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Failed to send email:', error);
  }
}

// 5 minute timer for testing
cron.schedule('*/5 * * * *', async () => {
  console.log('Snding inventory update email...');
  await sendEmail();
  console.log('Email sent!');
});
