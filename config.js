require('dotenv').config(); // Tambahkan baris ini di paling atas file config.js

module.exports = {
  // Bot Identity
  botName: "ABSOLUTE", // Nama bot kamu
  ownerID: "Alief Kaka", // Ganti dengan Nama Kamu

  // Discord Settings
  token: process.env.DISCORD_BOT_TOKEN, // Mengambil token dari .env
  prefix: "!", // Prefix utama untuk bot ini

  clientId:  "1391356030738239609", // ID client bot ini

  //ini pakai kalau misal nya slash / command mau di 1 server aja
  guildID: "1336379125413318657", // ID server tempat bot ini berada

  //fitru braodcast yang bakal di kirim ke beberapa ch yang di input
  broadcastChannels: [
        "1386772688219017326"
    ],

    //auto DL
  autoDownload: {
        // Daftarkan semua ID SERVER tempat fitur ini boleh aktif
        enabledServers: [
            "1336379125413318657", // Ganti dengan ID SERVER (GUILD ID) Anda
            "ini buat server"
        ],
        // (Opsional) Daftarkan ID CHANNEL yang ingin dikecualikan di server tersebut
        excludedChannels: [
            "1336379125413318657", 
            "1384561242815070328"
        ]
    },

  // API Keys
  apikey_lann: process.env.API_KEY_LANN, // Mengambil API key dari .env
  // kamu bisa dapat apikey ini dengan beli di https://api.betabotz.eu.org

  apikey_dana: process.env.API_KEY_DANA, // Mengambil API key dari .env
  // kamu bisa dapat apikey ini dengan beli di https://api.danafxc.my.id atau ke nomor WhatsApp 081289694906


  // =========== di bawah ini tidak usah ==============
  // reminderChannelIds: [
  //       '1391419433741979819',
  //       '1294278656818024545',
  //       // Add more channel IDs as needed
  //   ],
  // ownerId: '686498842560168043',
  // ilabChannelId: 'wajib di isi',
  // // Menu & Feature Settings



  menuPublic: true, // Apakah menu public aktif?

  // Channel IDs
  joinChannelId: "1386907338828419082", // ID channel join
  gempaChannelId: "1384561242815070328", // ID channel gempa
  growgardenChannelId: "1384561242815070328", // ID channel growgarden
  channelIds: {
    rules: "1386759038347247746", // ID channel rules
    pricelist: "1384561242815070328", // ID channel pricelist
    ticket: "1384561242815070328", // ID channel ticket
    queue: "1384561242815070328", // ID channel queue
  },
};
