let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Rec: MCA Official
Script: @Rizal
Github: 
https://github.com/Arya274/Arya-BOT3

*Sosmed :*
Kritik kami di sosmed ataupun YouTube.
Instagram: @hello_zalll_04
➥ YouTube:
youtube.com/GabutsZall

*Thanks To :*
Rizal
MCA
Official
Dan kawan yang lain :)

╠═〘 DONASI 〙 ═
╠➥ Axis Axis: 0838-7457-0716
╠➥ Tsel: 0852-1886-2268
╠➥ Indosat: 0856-9566-6215
║>Request? Wa.me/6283874570716
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

