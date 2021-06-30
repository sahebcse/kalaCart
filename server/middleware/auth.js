const jwt=require('jwt-simple')
const secret="lTHPDXakysNM2KNmKfsa-ivw"
const xtemp="eyJhbGciOiJSUzI1NiIsemtpZCI6IjExMmU0YjUyYWI4MzMwMTdkMzg1Y2UwZDBiNGM2MDU4N2VkMjU4NDIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiODQ1NTA5OTU1OTc5LXJkNTloZnZodWZqY2ZucWZqbmlkbHZtMW1ncXYxamtnLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiODQ1NTA5OTU1OTc5LXJkNTloZnZodWZqY2ZucWZqbmlkbHZtMW1ncXYxamtnLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAyODkzMDMwNDc3NDcyOTUyMDkwIiwiZW1haWwiOiJhaW1hY2hpbmVwYXlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJORTBSNGpDX1hOaDdTYlNBeFBoaTd3IiwibmFtZSI6ImFpIG1hY2hpbmVwYXkiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2p4TDQtRFMtd29CbzU0NzhveWpmQmowZXlXRzB4bTE1b0ZqWk5uPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6ImFpIiwiZmFtaWx5X25hbWUiOiJtYWNoaW5lcGF5IiwibG9jYWxlIjoiZW4iLCJpYXQiOjE2MjQ5ODIyMTYsImV4cCI6MTYyNDk4NTgxNiwianRpIjoiMzA2NGM3NDA1MGQyMDFkNDc1YzdlNWViNGJhMzZmNTBkODAxN2Y5YyJ9.Z7z54OaV6HBdX43yxdQLXrvCleiA2oYUpFaYJnBBCc8eI4VkeHrw6Gc6Xkp29iioVsUZpRyT-G6icppsrfG5mBiqrPf-hQ7styDi819Ms-fQxnVrf_6qDuLKBE98TGqJbhNL7OA0JoqXB6KDxR8m9Wdc0azvnhlUrYF6TuCFviHDLGTUXgFVMYf46NVnaZIiQUmMjZR45Undi5Aae-5oBEIeSa7CWfPLojq-4yhJwmql57awyweA4HYtsJCGzbjT5thHmH4ZnMse0Z8QMKcGynV-3QZwJdISwar4QKKtsxezqrGiQORae3Xl9GhVCztNfs0TmZgQasLPaTPYEnR9Ig"
const fetch = require('node-fetch')

const isAuthenticated=(req,res,next)=>
{
    const authHeader=req.headers["authorization"]
    console.log(authHeader)
    const tempToken = authHeader && authHeader.split(' ')[1]
    console.log(tempToken)
    const decoded=jwt.decode(tempToken, secret, 'RS256')
    console.log(decoded) 
    if (decoded)
    {
        next()
    }
    else
    {
        return res.status(401).json({message: "The user is not authenticated"})
    }

}

module.exports={isAuthenticated}