import { Router } from "express"

import fs from "fs"

const router = Router()
const pathRouter = __dirname

function removeExtension(fileName: string): string {
  return <string>fileName.split('.').shift()
}

function loadRouter(file: string): void {
  const name = removeExtension(file)
  const skip = ['index'].includes(name)
  if (!skip) {
    import(`./${file}`).then((routerModule) => {
        router.use(`/${name}`, routerModule.router);
    });
  }
}

fs.readdirSync(pathRouter).filter(file => loadRouter(file))

export default router