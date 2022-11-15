let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
「 Suport Bot Dengan Cara donasi 」

⫹⫺ Via Pulsa Indosat : 085701863281
⫹⫺ Via Pulsa Smartfren : 08816536465
⫹⫺ Via Dana : 085701863281
⫹⫺ Via Saweria :
⫹⫺ https://saweria.co/LORDZenix

`.trim()
  m.reply(text)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
