import createTorrent from 'create-torrent'
import fs from 'fs'

createTorrent('./', [urlList: "https://boof.eu.org",] (err, torrent) => {
  if (!err) {
    // `torrent` is a Buffer with the contents of the new .torrent file
    fs.writeFile('site.torrent', torrent)
  }
})
