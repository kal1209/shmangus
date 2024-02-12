const shortenAddress = (address, chars = 4) => {
  return `${address.slice(0, chars)}...${address.slice(-chars)}`
}

const slugify = (str, spt = '_') =>
  str
    .trim()
    // .replace(/([a-z])([A-Z])/g, '$1 $2')
    .toLowerCase()
    .replace(/ /g, spt)
    .replace(/[^\w-]+/g, '')

module.exports = { shortenAddress, slugify }