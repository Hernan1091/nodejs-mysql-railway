import express from 'express'
import { dirname,join } from 'path' //para establecer una ruta dinamica
import { stringify } from 'querystring'
import { fileURLToPath } from 'url' //para establecer un  https://www.youtube.com/watch?v=OVESuyVoPkI&t=3830s min 16

import { PORT } from './config.js'
import indexRoutes from './routes/index.js'
const app = express();
//Estableciendo una ruta dinámica en la linea sig:
const __dirname = dirname(fileURLToPath(import.meta.url))


app.set('views',join(__dirname,'views')) // concatena la / para convertirla en el caracter adecuado para cada sistema operativo
app.set('view engine','ejs')
app.use(indexRoutes)

app.use(express.static(join(__dirname,'public')))

app.listen(PORT)
console.log('Server on port', PORT);
