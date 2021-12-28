import type { NextApiRequest, NextApiResponse } from 'next'
import { Account, Tag } from 'types'
import accounts from 'src/db'

type Data = Account[]

export default function handler(
  { query: { page } }: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const filteredByFlag = accounts
    .filter(account => account.haveVoucher)
    .slice(Number(page) * 4)

  res.status(200).json(filteredByFlag)
}
