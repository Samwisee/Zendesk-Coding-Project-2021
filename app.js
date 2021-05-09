import { Application, Router} from "https://deno.land/x/oak/mod.ts";

const env = Deno.env.toObject()
const PORT = env.PORT || 8000
const HOST = env.HOST || 'localhost'

const router = new Router()

router.get("/", (context) => {
  context.response.body = "Hello World"
})

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`App is listening on ${PORT} or open http://localhost:${PORT}/`)

await app.listen(`${HOST}:${PORT}`)

