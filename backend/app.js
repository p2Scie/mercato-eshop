import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();
const PORT = process.env.PORT || 4001;

const corsOptions = {
    origin: ['http://localhost:8080'],
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.post("/register", async (req, res) => {
    const {username, password} = req.body;

    const createUser = await prisma.user.create({
        data: { username, password }
    })

    res.send('L\'utilisateur a bien été créer !');
})


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})