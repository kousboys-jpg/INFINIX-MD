const settings = {
  packname: '𝐈𝐍𝐅𝐈𝐍𝐈𝐗•𝐌𝐃',
  author: 'rebelle masque',
  botName: "𝐈𝐍𝐅𝐈𝐍𝐈𝐗•𝐌𝐃",
  botOwner: 'rebelle masque', // Your name
  ownerNumber: '2250140768791', //Set your number here without + symbol, just add country code & number without any space
  giphyApiKey: 'qnl7ssQChTdPjsKta2Ax2LMaGXz303tq',
  commandMode: "public",
  maxStoreMessages: 20, 
  storeWriteInterval: 10000,
  description: "Bot WhatsApp Multi-Device pour la gestion de groupes et l’automatisation.",
  version: "3.0.2",
  updateZipUrl: "https://github.com/RebelleMasque/INFINIX-MD/archive/refs/heads/main.zip",
};

module.exports = settings;


// Added prefix setting
module.exports.prefix = process.env.PREFIX || '.';

// Anti-mention de masse (suppression auto)
module.exports.antiMention = { enabled: false, threshold: 5, adminBypass: true };
//rebelle masque 💥