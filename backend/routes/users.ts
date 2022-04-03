import * as express from 'express';
import {AppDataSource} from "../database/data-source";
import {User} from "../database/entity/User";

const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

// Register user
router.post('/register', async (req, res) => {
    const user = AppDataSource.getRepository(User).create(req.body)
    const results = AppDataSource.getRepository(User).save(user)
    return res.send(results)
})

module.exports = router;

