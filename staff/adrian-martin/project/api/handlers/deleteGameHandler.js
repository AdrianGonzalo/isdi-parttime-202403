import jwt from '../util/jsonwebtoken-promised.js'
import logic from '../logic/index.js'
const { JWT_SECRET } = process.env
import { CredentialError } from 'com/errors.js'

export default (req, res, next) => {
    try {
        const token = req.headers.authorization.slice(7)

        jwt.verify(token, JWT_SECRET)
            .then(payload => {
                const { sub: userId } = payload

                const { gameId } = req.params

                try {
                    logic.deleteGame(userId, gameId)
                        .then(() => res.status(204).send())
                        .catch(error => next(error))
                } catch (error) {
                    next(error)
                }
            })
            .catch(error => next(new CredentialError(error.message)))
    } catch (error) {
        next(error)
    }
}