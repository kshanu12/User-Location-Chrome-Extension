import dotenv from "dotenv"

dotenv.config()

export async function getLocationData(ip: string) {
  console.log("TOKEN", process.env.PLASMO_PUBLIC_TOKEN)
  const response = await fetch(
    `https://ipinfo.io/${ip}/json?token=${process.env.PLASMO_PUBLIC_TOKEN}`
  )

  const data = await response.json()
  console.log("TOKEN", data)
  return data
}
