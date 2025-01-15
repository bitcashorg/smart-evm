import type { Request, Response } from 'express'

export async function healthcheck(_req: Request, res: Response): Promise<void> {
  res.send('OK')
}
