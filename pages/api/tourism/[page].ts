import type { NextApiRequest, NextApiResponse } from 'next'
import { Account, Tag } from 'types'
import accounts from 'src/db'

type Data = Account[]

export default function handler(
  { query: { page } }: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // array.slice(4, 8)
  const filteredByTags = accounts
    .filter(account =>
      account.tags
        .some(
          (tag: Tag) =>
            tag.name === "Turismo en Buenos Aires"
        )
  )
  .slice(Number(page) * 4)


  const branchesOrderedByLocation =
    filteredByTags
      .map(
        account => account.branches
      )
      .flat()
      .sort((a, b) => a.location - b.location)
      .map(e => e)

  const accs: Account[] = []

  let c = 0;

  // unshift para agregar al principio

  while (accs.length < 4) {
    if (c > branchesOrderedByLocation.length) {
      break
    }
    // const el = branchesOrderedByLocation[c]
    const el = filteredByTags.find((count) => count.branches.some(b => b.id === branchesOrderedByLocation[c]?.id))

    if (el?.id && el.branches) {
      // const existInArray = accs.find((acc) => acc.id === el.id)
      // if(!existInArray){
      accs.push({
        ...el,
        branches: [branchesOrderedByLocation[c]]
      })
      // }
    }
    c += 1
  }


  res.status(200).json(accs)
}
