import {NextApiRequest, NextApiResponse} from 'next';

import {Copilot} from 'monacopilot';

const copilot = new Copilot(process.env.ANTHROPIC_API_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {completion, error} = await copilot.complete({
    body: req.body,
  });

  if (error) {
    // Handle error if needed
    // ...
    res.status(500).json({completion: null, error});
  }

  res.status(200).json({completion});
}
