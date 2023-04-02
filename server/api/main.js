export default defineEventHandler(async(event) => {

  const { data } = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=M2sVGSZTCnzb0IHcV55RsxTxNx1Ipjv4jyo1w7cp`)

  return data
  
})