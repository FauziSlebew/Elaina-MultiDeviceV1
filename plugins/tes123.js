import fs from 'fs'

import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix: _p }) => {

let info = `𝙁𝙖𝙪𝙯𝙞𝘽𝙤𝙩𝙯-𝙈𝙙 𝘿𝙞𝙨𝙞𝙣𝙞 (｡>_<｡)`



let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'


conn.reply(m.chat, info, m, { quoted: fakes },{ contextInfo: { externalAdReply: { showAdAttribution: true,
      mediaUrl: "https://Instagram.com/fauzibeban__",
      mediaType: 2,
      description: "https://Instagram.com/fauzibeban__", 
      title: global.titlebot,
      body: wm,
      thumbnail: thumb,
      sourceUrl: sig  }}})

}

handler.customPrefix = /^(tes|bot|elaina|test)$/i

handler.command = new RegExp



export default handler
