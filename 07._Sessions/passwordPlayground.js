import bcrypt from "bcrypt"


const passwordPlaintext = "hunter42"
const passwordPlaintext2 = "notHunter"
const hashedPassword = "$2b$12$pHcZlSesfB1KRBbWgor8vuLcfE6/E2.nFY8/I9ocitiTmqfxXXbsi"

const enryptedPassword = await bcrypt.hash(passwordPlaintext, 12)
console.log(enryptedPassword)

const isSame = await bcrypt.compare(passwordPlaintext, hashedPassword)
console.log(isSame)