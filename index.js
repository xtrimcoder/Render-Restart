const cron = require('node-cron');
const axios = require('axios');

const restartServer = async () => {
  try {

    const response = await axios.post('https://api.render.com/deploy/srv-clbfdi6g1b2c73d3uo80?key=ArCnH6gZXLo');
    const response1 = await axios.post('https://api.render.com/deploy/srv-cjh2ae41ja0c739s3g1g?key=Z03i_QcDHRQ');
    const response2 = await axios.post('https://api.render.com/deploy/srv-cg26mnvdvk4ronvoo3l0?key=RvdesJatPaY');
    console.log('Server restarted:', response.data, response1.data, response2.data);
  } catch (error) {
    console.error('Error restarting server:', error.message);
  }
};

// Schedule the cron job to run every 14 minutes
cron.schedule('*/14 * * * *', () => {
  console.log('Running the restartServer cron job');
  restartServer();
});
