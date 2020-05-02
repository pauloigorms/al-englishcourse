const expressJwt = require('express-jwt')
const config = require('_bin/config.json')
const user__service = require('_services/api')

module.exports = jwt;

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // '/api/signup',
            '/api/signin',
            '/api/teachers',
            '/api/comments',
            '/api/news',
            '/api/mail'        
        ]
    })
}

async function isRevoked(req, payload, done) {
    const user = await user__service.getById(payload.sub)
    // revoke token if user no longer exists
    if (!user) {
        return done(null, true)
    }
    done()
};
