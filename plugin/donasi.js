let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Axis Axis [083874570716]
│ • Telkomsel [085218862268]
│ • Gopay [085218862268]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6283874570716
╰────

Ini *#caranya untuk Donasi*
*Cara Donasi*:
1.) Beli ke pulsa/ konter terdekat semisal Indomaret
2.) Bilang ke konter terdekat..
"Beli pulsa telkomsel"
3.)Dan terus masukkan nomor kami 085218862268
4.) Jika sudah kirim bukti ke sini.. Terimakasih
*Kalau tidak juga gak papa*👍🏻
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
