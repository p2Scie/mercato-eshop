import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import "reflect-metadata";


const index = express();
const PORT = process.env.PORT || 4001;

const corsOptions = {
    origin: ['http://localhost:8080'],
    optionsSuccessStatus: 200,
};

index.use(cors(corsOptions));

index.use(bodyParser.json());

index.post("/register", async (req, res) => {
    const {username, password} = req.body;
/*
    const createUser = await prisma.user.create({
        data: { username, password }
    }) */

    res.send('L\'utilisateur a bien été créer !');
})


index.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})