import dotenv from 'dotenv'

if (process.env.CI !== 'true') {
  dotenv.config({ path: 'env/.env' })
}

const requiredVars = ['SERVICE_URL']

// Check for missing variables
requiredVars.forEach((varName) => {
  if (!process.env[varName]) {
    throw new Error(`Missing required environment variable: ${varName}`)
  }
})

export const SERVICE_URL: string = process.env.SERVICE_URL!
