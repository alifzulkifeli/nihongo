// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const resd = await fetch('http://nihongo-api.alifzulkifeli.com/random')
  const data = await resd.json()
  res.status(200).json({ data})
}
