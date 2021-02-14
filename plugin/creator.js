let handler = function (m) {
  // this.sendContact(m.chat, '6283874570716', 'Rizal', m)
  this.sendContact(m.chat, '6283874570716', 'Admin MCA Official', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
